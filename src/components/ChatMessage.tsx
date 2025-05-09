import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div 
      className={`mb-6 ${isUser ? 'text-right' : 'text-left'}`}
    >
      <div className="flex items-end gap-2 mb-1">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm">
            AI
          </div>
        )}
        <div 
          className={`inline-block p-4 rounded-2xl max-w-[80%] shadow-sm
          ${isUser 
            ? 'bg-blue-800 text-white rounded-br-none' 
            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
          }`}
        >
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
            You
          </div>
        )}
      </div>
      <div className={`text-xs text-gray-400 ${isUser ? 'mr-10' : 'ml-10'}`}>
        {message.timestamp.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })}
      </div>
    </div>
  );
};

export default ChatMessage;