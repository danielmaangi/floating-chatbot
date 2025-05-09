# Floating Chatbot

A powerful AI-powered chat solution that integrates seamlessly with any website. Built with React, TypeScript, and OpenAI's GPT technology.

![Floating Chatbot Demo](https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🤖 AI-Powered Responses: Leverages OpenAI's GPT models for intelligent conversations
- 💬 Real-time Chat Interface: Beautiful, responsive chat UI with typing indicators
- 🎨 Customizable Design: Modern UI built with Tailwind CSS and shadcn/ui
- 📱 Mobile-Friendly: Fully responsive design that works on all devices
- ⚡ Fast & Lightweight: Built with Vite for optimal performance
- 🔒 Secure: Environment variables for API key protection

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Integration

To add the Floating Chatbot to your website, simply include the built files in your project and wrap your application with the ChatProvider:

```jsx
import { ChatProvider } from './context/ChatContext';
import ChatbotButton from './components/ChatbotButton';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ChatProvider>
      {/* Your existing app content */}
      <ChatbotButton />
      <Chatbot />
    </ChatProvider>
  );
}
```

## Customization

The chatbot's appearance can be customized through Tailwind CSS classes and the shadcn/ui component library. The main theme colors and styles can be adjusted in the `tailwind.config.js` file.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- OpenAI API
- Lucide React Icons

## License

MIT License - Feel free to use this in your projects!

## Support

For support, feature requests, or bug reports, please open an issue on the GitHub repository.