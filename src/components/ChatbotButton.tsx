import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatbotButton: React.FC = () => {
  const { isOpen, openChat } = useChat();

  return (
    <button
      onClick={openChat}
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-blue-800 text-white shadow-lg 
      hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50
      ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-label="Open chat"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatbotButton;