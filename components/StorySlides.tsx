
import React, { useState } from 'react';
// Added Play and Pause to imports
import { ArrowUpRight, Play, Pause } from 'lucide-react';

const slides = [
  {
    id: 'audiobooks',
    title: 'Audiobooks',
    subtitle: 'Upload your ePub or PDF, pick your characters, direct the delivery, and publish high-quality multi-voice audiobooks.',
    cta: 'Get started free',
    logo: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/abslge3yzn9-TIME.svg',
    company: 'TIME',
    benefit: 'uses Studio for high-quality, long-form Text to Speech at scale'
  },
  {
    id: 'video',
    title: 'Video voiceovers',
    subtitle: 'Select the ideal voice or clone your own. Generate ads, shorts, or films with our AI voice generator.',
    cta: 'Create Voice Over',
    logo: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/vokukxy7m5s-synthesia.svg',
    company: 'Synthesia',
    benefit: 'powers realistic voices for avatars with ElevenLabs'
  },
  {
    id: 'dubbing',
    title: 'Dubbed videos',
    subtitle: 'Translate into 30+ languages while preserving the speaker’s voice. Dub with one click or use Dubbing Studio for full control.',
    cta: 'Get started free',
    logo: 'https://eleven-public-cdn.elevenlabs.io/payloadcms/unrvx5sipyb-Lex name image (1).webp',
    company: 'Lex Fridman',
    benefit: 'uses dubbing to localize his content'
  },
  {
    id: 'philosophy',
    title: 'Humanising AI',
    subtitle: 'Our Belief: AI should amplify humans — not replace them.',
    cta: 'See AI in Action',
    logo: '',
    company: 'Marichi',
    benefit: 'The philosophy behind our Human-Centric AI',
    customContent: (
      <div className="w-full h-full flex flex-col justify-center px-8 py-6">
        <h4 className="text-lg font-bold mb-6 text-neutral-900">How Marichi Humanises AI</h4>
        <ul className="space-y-3 mb-8">
          {[
            'Intent detection, not keyword matching',
            'Context retention across conversations',
            'Emotion-aware responses',
            'Smart human escalation',
            'Continuous learning'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
              <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-white/80 p-5 rounded-2xl border border-neutral-100 shadow-sm">
          <h5 className="font-bold text-neutral-900 mb-2 text-sm">AI + Humans Together</h5>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Marichi ensures that AI handles scale, while humans handle empathy and complexity.
          </p>
        </div>
      </div>
    )
  }
];

const StorySlides: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
        <span>For</span>
        <a href="#" className="underline decoration-dotted hover:text-black">creators, media & entertainment</a>
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold mb-12 max-w-2xl leading-tight">
        Generate high-quality audio with our AI voice generator for audiobooks, videos, and podcasts
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`text-left transition-opacity duration-300 ${activeSlide === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2">{slide.title}</h3>
              <p className="text-neutral-900 font-medium mb-4">{slide.subtitle}</p>
              {activeSlide === idx && (
                <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition">
                  {slide.cta}
                </button>
              )}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 flex flex-col bg-neutral-50 p-4 rounded-3xl overflow-hidden min-h-[400px]">
          <div className="flex-1 bg-neutral-200 rounded-2xl relative overflow-hidden group">
            {/* @ts-ignore */}
            {slides[activeSlide].customContent ? (
              // @ts-ignore
              slides[activeSlide].customContent
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition cursor-pointer">
                    <Play fill="white" size={24} />
                  </div>
                </div>
                {/* Visual content would go here, representing the active slide's video/image */}
                <div className="absolute top-4 left-4 bg-black text-white p-2 rounded-full">
                  <Pause size={14} />
                </div>
              </>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {slides[activeSlide].logo && (
                <div className="bg-white border border-neutral-100 p-2 px-4 rounded-xl flex items-center gap-2 shadow-sm shrink-0">
                  <img src={slides[activeSlide].logo} alt={slides[activeSlide].company} className="h-4 w-auto grayscale" />
                  <ArrowUpRight size={14} className="text-neutral-400" />
                </div>
              )}
              <p className="text-sm text-neutral-500 truncate">
                {slides[activeSlide].benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySlides;
