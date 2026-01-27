
import React from 'react';
// Added Play to imports
import { ArrowUpRight, Play } from 'lucide-react';

const DevelopersSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-xs uppercase tracking-widest font-bold text-neutral-500">For</span>
          <a href="#" className="text-white underline decoration-dotted font-semibold">Developers</a>
        </div>
        
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 max-w-3xl leading-tight">
          Build the most advanced audio models into your product with our APIs and SDKs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="p-8 lg:p-10 bg-[#0F1117] rounded-[32px] border border-white/10 flex flex-col justify-between gap-12 hover:border-white/20 transition">
            <div>
              <h3 className="text-2xl font-bold mb-4">Text to Speech API</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Independently rated the leading Text to Speech models. Choose Multilingual v2 for lifelike consistent speech; eleven_v3 for emotionally rich and expressive speech; or Flash v2.5 for the lowest latency. All support 29+ languages.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-6 bg-white rounded-full mt-1 shrink-0" />
                <div>
                  <div className="font-bold">IIFlash</div>
                  <div className="text-xs text-neutral-500">75ms latency for conversational usecases</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-6 bg-white rounded-full mt-1 shrink-0" />
                <div>
                  <div className="font-bold">IIMultilingual</div>
                  <div className="text-xs text-neutral-500">Best lifelike consistent speech</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-6 bg-white rounded-full mt-1 shrink-0" />
                <div>
                  <div className="font-bold">IIv3</div>
                  <div className="text-xs text-neutral-500">Our most expressive model yet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 lg:p-10 bg-[#0F1117] rounded-[32px] border border-white/10 flex flex-col justify-between gap-12 lg:col-span-1 hover:border-white/20 transition">
            <div>
              <h3 className="text-2xl font-bold mb-4">Speech to Text API</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                The <span className="text-white underline">most accurate ASR model</span>. Low cost and supporting speaker diarization and character level timestamps.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex gap-3">
                 <div className="w-1 h-4 bg-white rounded-full mt-1.5 shrink-0" />
                 <div>
                    <div className="font-bold">98%</div>
                    <div className="text-xs text-neutral-500">Accuracy</div>
                 </div>
              </div>
              <div className="flex gap-3">
                 <div className="w-1 h-4 bg-white rounded-full mt-1.5 shrink-0" />
                 <div>
                    <div className="font-bold">$0.22</div>
                    <div className="text-xs text-neutral-500">/hour on plan</div>
                 </div>
              </div>
            </div>
            <div className="bg-neutral-900 rounded-2xl h-32 flex items-center justify-center overflow-hidden">
               <div className="w-full px-8 py-2 space-y-2">
                 <div className="h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full w-full flex items-center px-4 text-xs font-bold">IIScribe v1</div>
                 <div className="h-6 bg-neutral-800 rounded-full w-2/3 ml-auto text-[10px] flex items-center px-3 text-neutral-500">Gemini 2.0 Flash</div>
                 <div className="h-6 bg-neutral-800 rounded-full w-1/2 ml-auto text-[10px] flex items-center px-3 text-neutral-500">Whisper Large V3</div>
               </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 lg:p-10 bg-[#0F1117] rounded-[32px] border border-white/10 flex flex-col justify-between gap-12 hover:border-white/20 transition">
            <div>
              <h3 className="text-2xl font-bold mb-4">Voice Changer API</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                The leading Voice Changer model. Give your users full control over delivery of timing, inflection and emotion through voice control.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex gap-3">
                 <div className="w-1 h-4 bg-white rounded-full mt-1.5 shrink-0" />
                 <div>
                    <div className="font-bold">1000+</div>
                    <div className="text-xs text-neutral-500">Voices</div>
                 </div>
              </div>
              <div className="flex gap-3">
                 <div className="w-1 h-4 bg-white rounded-full mt-1.5 shrink-0" />
                 <div>
                    <div className="font-bold">29+</div>
                    <div className="text-xs text-neutral-500">Languages</div>
                 </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition">
                <Play size={20} fill="currentColor" />
              </button>
              <div className="flex bg-neutral-800 p-1 rounded-full text-[10px] font-bold uppercase">
                <button className="px-3 py-1.5 bg-white text-black rounded-full">Input</button>
                <button className="px-3 py-1.5 text-neutral-500">Output</button>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                 <div className="w-10 h-10 border border-neutral-700 rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500/40 rounded-full blur-md" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
