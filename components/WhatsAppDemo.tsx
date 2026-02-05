import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CheckCheck } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: React.ReactNode;
  time: string;
  status?: 'sent' | 'delivered' | 'read';
}

const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const sequence: { message: Message; delay: number }[] = [
      {
        message: {
          id: '1',
          type: 'user',
          content: 'Hi, I saw your ad. Do you have laptop bags?',
          time: '10:12',
          status: 'read'
        },
        delay: 1000
      },
      {
        message: {
          id: '2',
          type: 'bot',
          content: (
            <div>
              <p className="font-bold text-xs text-neutral-500 mb-1">PROMO</p>
              <p>Yes! Choose size:</p>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>13-inch</li>
                <li>15-inch</li>
                <li>Office tote</li>
              </ol>
              <p className="mt-2 text-xs text-neutral-500">Reply 1/2/3 for options.</p>
            </div>
          ),
          time: '10:12',
        },
        delay: 2500
      },
      {
        message: {
          id: '3',
          type: 'user',
          content: '2',
          time: '10:13',
          status: 'read'
        },
        delay: 4500
      },
      {
        message: {
          id: '4',
          type: 'bot',
          content: (
            <div>
              <p>Great. Here are our bestsellers. Where should we deliver?</p>
              <div className="mt-3 flex flex-col gap-2">
                <button className="w-full py-2 px-3 bg-white text-[#00A884] font-medium text-sm rounded border border-neutral-100 shadow-sm">Browse Catalog</button>
                <button className="w-full py-2 px-3 bg-white text-[#00A884] font-medium text-sm rounded border border-neutral-100 shadow-sm">Talk to Sales</button>
                <button className="w-full py-2 px-3 bg-white text-[#00A884] font-medium text-sm rounded border border-neutral-100 shadow-sm">Get Offers</button>
              </div>
            </div>
          ),
          time: '10:13',
        },
        delay: 6000
      }
    ];

    let timeouts: NodeJS.Timeout[] = [];

    const runSequence = () => {
      setMessages([]);
      sequence.forEach(({ message, delay }) => {
        const timeout = setTimeout(() => {
          setMessages(prev => [...prev, message]);
        }, delay);
        timeouts.push(timeout);
      });
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-[#E5DDD5] rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden relative h-[500px]">
      {/* Header */}
      <div className="bg-[#008069] p-4 flex items-center gap-3 text-white">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
          M
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm">Marichi</p>
          <p className="text-xs text-white/80">Acquire + Convert</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 space-y-4 h-full overflow-y-auto pb-20 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-[0.97]">
        <AnimatePresence mode='popLayout'>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-2 text-sm shadow-sm relative ${msg.type === 'user'
                    ? 'bg-[#E7FFDB] rounded-tr-none text-black'
                    : 'bg-white rounded-tl-none text-black'
                  }`}
              >
                <div className="mr-6">{msg.content}</div>
                <div className="flex items-center gap-0.5 absolute bottom-1 right-2">
                  <span className="text-[10px] text-neutral-500 leading-none">{msg.time}</span>
                  {msg.type === 'user' && ( // Only show checks for user messages
                    msg.status === 'read' ? <CheckCheck size={12} className="text-[#53BDEB]" /> : <Check size={12} className="text-neutral-500" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F0F2F5] p-3 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-neutral-300"></div>
        <div className="flex-1 h-9 bg-white rounded-full"></div>
        <div className="w-8 h-8 rounded-full bg-[#008069] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
        </div>
      </div>

    </div>
  );
};

export default WhatsAppDemo;
