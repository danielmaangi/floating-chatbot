import { Message } from '../types';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateChatCompletion(
  prompt: string,
  previousMessages: Message[]
): Promise<string> {
  try {
    // Format messages for OpenAI API
    const formattedMessages = previousMessages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    // Add current prompt
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