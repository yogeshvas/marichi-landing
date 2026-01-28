
import React from 'react';
import SplitText from './SplitText';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="">

        </h1>
        <SplitText
          text="  Humanising AI. Powering WhatsApp Commerce."
          className="text-4xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-neutral-900"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => { }}

        />


        <p className="mt-6 text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Turn WhatsApp into your most powerful sales, support, and operations channel with AI that
          feels human.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-10 py-4 text-base font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition min-w-[180px]">
            Book a Demo
          </button>
          <button className="px-10 py-4 text-base font-semibold text-neutral-900 bg-neutral-100 rounded-full hover:bg-neutral-200 transition min-w-[180px]">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
