
import React from 'react';

const creators = [
  { 
    name: 'Michael Caine', 
    role: 'Voice Cloning', 
    avatar: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/hffwkiy10yn-Michael%20Caine%20small.webp' 
  },
  { 
    name: 'Andrew Huberman', 
    role: 'Text to Speech', 
    avatar: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/5ipd8asdza-huberman-avatar.webp' 
  },
  { 
    name: 'Arianna Huffington', 
    role: 'Studio', 
    avatar: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/wluapvd030l-5fdf7f4a18a0bb5ee3712aa2_5fd7bce43e63aa7a9a67c664_Arianna%20Hffington-p-500.webp' 
  },
  { 
    name: 'Matthew McConaughey', 
    role: 'Dubbing', 
    avatar: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/dxdtsbxksgk-Matthew%20McConaughey%20small.webp' 
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Used by millions of the best creators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator) => (
            <div key={creator.name} className="flex flex-col group cursor-pointer">
              <p className="text-sm text-neutral-400 mb-6 font-medium">
                Create content faster with <span className="text-black font-semibold">{creator.role}</span>
              </p>
              <div className="aspect-square bg-neutral-50 rounded-2xl overflow-hidden mb-4 border border-neutral-100">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="flex items-center gap-3">
                <img src={creator.avatar} className="w-6 h-6 rounded-full" alt="" />
                <span className="text-sm font-semibold">{creator.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="px-8 py-3 bg-neutral-100 text-black rounded-full font-semibold hover:bg-neutral-200 transition">Get started</button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
