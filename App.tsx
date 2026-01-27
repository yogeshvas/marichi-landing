
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Omnibox from './components/Omnibox';
import LogoGrid from './components/LogoGrid';
import FeaturedCards from './components/FeaturedCards';
import StorySlides from './components/StorySlides';
import SocialProof from './components/SocialProof';
import DevelopersSection from './components/DevelopersSection';
import LatestUpdates from './components/LatestUpdates';
import Footer from './components/Footer';
import FloatingVoiceChat from './components/FloatingVoiceChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main id="content">
        <Hero />

        <div className="mt-16">
          <Omnibox />
        </div>

        <section className="py-20 lg:py-40 bg-white">
          <LogoGrid />
        </section>

        <section className="py-20 bg-white">
          <FeaturedCards />
        </section>

        <section className="py-20 bg-white">
          <StorySlides />
        </section>

        <SocialProof />

        <DevelopersSection />

        <LatestUpdates />

        <div className="relative mt-20 pb-40">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="max-w-md w-full text-center">
              <div className="p-10 rounded-3xl bg-neutral-50/80 backdrop-blur-xl border border-neutral-100 shadow-2xl">
                <div className="flex justify-center mb-8">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                    <svg fill="none" height="24" viewBox="0 0 12 20" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 0H0V20H4V0Z" fill="currentColor"></path>
                      <path d="M12 0H8V20H12V0Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6">Create with the highest quality AI Audio</h2>
                <a href="#" className="block w-full py-4 bg-black text-white rounded-full font-semibold hover:bg-neutral-800 transition">Get started free</a>
                <p className="mt-4 text-sm text-neutral-500">
                  Already have an account? <a href="#" className="text-black underline">Log in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      {/* <FloatingVoiceChat /> */}
    </div>
  );
};

export default App;
