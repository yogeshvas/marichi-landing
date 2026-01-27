
import React from 'react';

const logos = [
  { name: 'Cisco', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/v2jwewpag3l-Cisco_Color.svg' },
  { name: 'Epic Games', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/y5yygn0fe1-Epic_Games_Color.svg' },
  { name: 'Twilio', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/rm3yki8n1s-Twilio.svg' },
  { name: 'Synthesia', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/c5etmklbfxb-Synthesia.svg' },
  { name: 'TIME', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/aomqq1hqno9-Time.svg' },
  { name: 'Chess.com', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/dlm9k5mcygp-Chess (1).svg' },
  { name: 'TELUS', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/6aedbfafzlt-telus-logo-color.svg' },
  { name: 'Meesho', url: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/48ikral3ek8-meesho-logo-color.svg' },
];

const LogoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12">
        Trusted by leading developers and enterprises
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-100 rounded-3xl overflow-hidden shadow-sm">
        {logos.map((logo) => (
          <div 
            key={logo.name} 
            className="flex items-center justify-center p-8 lg:p-12 border-neutral-100 border-r border-b last:border-r-0 md:[&:nth-child(4)]:border-r-0 md:[&:nth-child(8)]:border-r-0 group hover:bg-neutral-50 transition-colors"
          >
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 lg:h-12 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center gap-4">
        <button className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition">Talk to Sales</button>
        <button className="px-6 py-2.5 bg-neutral-100 text-black rounded-full text-sm font-semibold hover:bg-neutral-200 transition">Read Stories</button>
      </div>
    </div>
  );
};

export default LogoGrid;
