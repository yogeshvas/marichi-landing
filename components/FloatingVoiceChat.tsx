
import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const FloatingVoiceChat: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-xl border border-white rounded-full shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3 pl-1 pr-1 py-1">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
             <img src="https://picsum.photos/seed/ai-orb/80/80" className="w-full h-full object-cover" alt="AI Agent" />
          </div>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-neutral-800 transition">
            <Phone size={14} fill="white" />
            VOICE CHAT
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 border-l border-neutral-100 hover:bg-neutral-50 transition rounded-full cursor-pointer">
             <img src="https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/us.svg" className="w-4 h-4 rounded-full" alt="US" />
             <ChevronDown size={14} className="text-neutral-400" />
          </div>
        </div>
      </div>
      <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-tighter mr-2">
        Powered by ElevenLabs <span className="underline cursor-pointer">Agents</span>
      </p>
    </div>
  );
};

export default FloatingVoiceChat;
