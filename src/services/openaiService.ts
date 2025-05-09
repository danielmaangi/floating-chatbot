import { Message } from '../types';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import { Document } from 'langchain/document';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export async function generateChatCompletion(
  prompt: string,
  previousMessages: Message[]
): Promise<string> {
  try {
    // Search for relevant documents
    const vectorStore = new SupabaseVectorStore(embeddings, {
      client: supabase,
      tableName: 'documents',
      queryName: 'match_documents',
    });

    const relevantDocs = await vectorStore.similaritySearch(prompt, 3);
    const context = relevantDocs.map(doc => doc.pageContent).join('\n\n');

    // Format messages for OpenAI API
    const formattedMessages = previousMessages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    // Add context and current prompt
    formattedMessages.push({
      role: 'system',
      content: `Use the following context to help answer the user's question:\n\n${context}`
    });
    
    formattedMessages.push({
      role: 'user',
      content: prompt
    });

    const completion = await openai.chat.completions.create({
      messages: formattedMessages,
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error generating chat completion:', error);
    throw new Error('Failed to generate response');
  }
}

export async function uploadDocument(file: File): Promise<void> {
  try {
    const text = await file.text();
    const doc = new Document({ pageContent: text });
    
    const vectorStore = new SupabaseVectorStore(embeddings, {
      client: supabase,
      tableName: 'documents',
      queryName: 'match_documents',
    });

    await vectorStore.addDocuments([doc]);
  } catch (error) {
    console.error('Error uploading document:', error);
    throw new Error('Failed to upload document');
  }
}