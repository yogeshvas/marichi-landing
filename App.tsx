
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Omnibox from './components/Omnibox';
import LogoGrid from './components/LogoGrid';
import FeaturedCards from './components/FeaturedCards';
import StorySlides from './components/StorySlides';
import TeamSection from './components/TeamSection';
import DevelopersSection from './components/DevelopersSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import FloatingVoiceChat from './components/FloatingVoiceChat';
import { WavyBackground } from './components/ui/wavy-background';
import Squares from './components/Squares';
import StandOutCrowdCTA from './components/StandOutCrowdCTA';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main id="content">


        <Hero />


        <div className="mt-16">
          {/* <WavyBackground> */}
          <Omnibox />
          {/* </WavyBackground> */}
        </div>

        <section className="py-20 lg:py-40 bg-white">
          <LogoGrid />
        </section>

        <section className="py-20 bg-white">
          <FeaturedCards />
        </section>
        {/* 
        <section className="py-20 bg-white">
          <StorySlides />
        </section> */}

        <TeamSection />

        <DevelopersSection />

        <CaseStudies />

        <StandOutCrowdCTA />
      </main>

      <Footer />
      {/* <FloatingVoiceChat /> */}
    </div>
  );
};

export default App;
