
import React from 'react';

const updates = [
  {
    category: 'Company',
    title: 'Introducing The Eleven Album',
    description: 'A landmark musical release created in collaboration with world-class artists and powered by Eleven Music.',
    image: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/ElevenAlbum_Cover%20(2).webp'
  },
  {
    category: 'Research',
    title: 'Introducing Scribe v2',
    description: 'Today we’re introducing Scribe v2: the most accurate transcription model ever released, with support for more than 90 languages.',
    image: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/g0gh9x8hiz-Scribe%20v2%20square.webp'
  },
  {
    category: 'Product',
    title: 'Introducing ElevenLabs Image & Video',
    description: 'Within ElevenLabs, you can now bring ideas to life in one complete creative workflow.',
    image: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/0qz7kchmvoid-Image%20%26%20Video%20Vertical%20Square.webp'
  }
];

const LatestUpdates: React.FC = () => {
  return (
    <section className="py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Latest updates</h2>
          <button className="hidden lg:block px-6 py-2 bg-neutral-100 rounded-full text-sm font-semibold hover:bg-neutral-200 transition">All updates</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => (
            <article key={update.title} className="group cursor-pointer">
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden mb-6 relative">
                 <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">
                   {update.category}
                 </div>
                 <img 
                   src={update.image} 
                   alt={update.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                 />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:underline">{update.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                {update.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
