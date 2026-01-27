import React from 'react';
import { Send, Phone, Video, MoreVertical, Paperclip, Smile } from 'lucide-react';

interface Message {
  text: string;
  sender: 'ai' | 'user';
  time: string;
}

interface ChatPreviewProps {
  industryName: string;
  messages: Message[];
  accentColor?: string;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ industryName, messages, accentColor = '#25D366' }) => {
  return (
    <div className="w-full h-full bg-[#E5DDD5] flex flex-col font-sans relative overflow-hidden">
      {/* WhatsApp Background Pattern - Simplified */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      {/* Header */}
      <div className="bg-[#075E54] p-3 flex items-center justify-between text-white shrink-0 z-10 shadow-sm relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            {/* Generic Industry Icon Placeholder */}
            <span className="text-lg">🤖</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight">{industryName} Bot</span>
            <span className="text-xs text-white/80">online</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/90">
          <Video size={20} />
          <Phone size={18} />
          <MoreVertical size={18} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 relative z-10 no-scrollbar">
        {/* Date Divider */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#E1F3FB] text-gray-600 text-xs py-1 px-3 rounded-lg shadow-sm font-medium">
            Today
          </span>
        </div>

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-2 px-3 shadow-sm relative text-[14px] leading-snug ${msg.sender === 'user'
                ? 'bg-[#dcf8c6] text-black rounded-tr-none'
                : 'bg-white text-black rounded-tl-none'
                }`}
            >
              <p className="mr-4 pb-1">{msg.text}</p>
              <span className={`text-[10px] absolute bottom-1 right-2 ${msg.sender === 'user' ? 'text-gray-500' : 'text-gray-400'}`}>
                {msg.time}
                {msg.sender === 'user' && <span className="ml-1 text-blue-500">✓✓</span>}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-2 bg-[#F0F0F0] flex items-center gap-2 shrink-0 z-10 relative">
        <Smile className="text-gray-500" size={24} />
        <Paperclip className="text-gray-500" size={20} />
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500 shadow-sm">
          Type a message
        </div>
        <div className="w-10 h-10 bg-[#008f79] rounded-full flex items-center justify-center text-white shadow-sm">
          <Send size={18} className="translate-x-0.5 translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
