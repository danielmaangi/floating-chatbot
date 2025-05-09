import React from 'react';
import ChatbotButton from './components/ChatbotButton';
import Chatbot from './components/Chatbot';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Website</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome</h2>
          <p className="text-gray-600">
            This is your website content. The chatbot is available in the bottom right corner.
            Click on the icon to start a conversation powered by OpenAI.
          </p>
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