import React from 'react';
import ChatbotButton from './components/ChatbotButton';
import Chatbot from './components/Chatbot';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Floating Chatbot</h1>
          <p className="mt-2 text-gray-600">Enhance your website with an intelligent AI assistant</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transform Your Website's Customer Support</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Floating Chatbot is a powerful AI-powered chat solution that integrates seamlessly with any website. 
                Powered by OpenAI's advanced language models, it provides instant, intelligent responses to your visitors' queries.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-900">
                  <li>24/7 automated customer support</li>
                  <li>Seamless website integration</li>
                  <li>Powered by OpenAI's GPT technology</li>
                  <li>Customizable appearance</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
              <p>
                Try it out by clicking the chat icon in the bottom right corner!
              </p>
            </div>
          </div>
        </div>
      </main>

      <ChatProvider>
        <ChatbotButton />
        <Chatbot />
      </ChatProvider>
    </div>
  );
}

export default App;