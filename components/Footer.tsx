
import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Research',
      links: ['Text to Speech (TTS)', 'Speech to Text', 'Realtime Speech to Text', 'Voice Changer', 'Text to Sound Effects', 'Voice Cloning', 'Voice Isolator', 'AI Music Generator']
    },
    {
      title: 'Products',
      links: ['Studio', 'Agents Platform', 'Dubbing Studio', 'Voice Library', 'Image & Video', 'Audio Native', 'ElevenStudios', 'API', 'Voiceover Studio', 'ElevenReader', 'Mobile App', 'AI Voice Generator']
    },
    {
      title: 'Solutions',
      links: ['For Enterprise', 'For Teams', 'For Developers', 'For Startups', 'For Students', 'Retail and E-Commerce', 'Telecommunications', 'Financial Services', 'Technology', 'Customer Support', 'AI Voice Agents']
    },
    {
      title: 'Earn As',
      links: ['Affiliate', 'Voice Actor', 'Data Partner', 'Commercial Partner']
    },
    {
      title: 'Resources',
      links: ['API Reference', 'Product Guides', 'Help Centre', 'Languages', 'Webinars', 'Terms', 'Privacy', 'Cookie Settings']
    },
    {
      title: 'Socials',
      links: ['X', 'LinkedIn', 'GitHub', 'YouTube', 'Discord', 'TikTok', 'Instagram', 'Facebook', 'Reddit']
    },
    {
      title: 'Company',
      links: ['About', 'Safety', 'Careers', 'Blog', 'Impact Program', 'Brand and Press Kit', 'Iconic Marketplace', 'Modern Slavery Policy', 'CCPA Notice']
    }
  ];

  return (
    <footer className="pt-20 pb-12 border-t border-neutral-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          {/* Logo Column */}
          <div className="w-full lg:w-1/4">
            <a href="/" className="text-black font-bold text-2xl tracking-tighter hover:text-neutral-600 transition flex items-center gap-1 mb-6">
              <span>II</span>ElevenLabs
            </a>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-neutral-200 rounded-lg w-fit text-sm font-medium hover:bg-neutral-50 cursor-pointer">
              <Globe size={16} />
              English
              <ChevronDown size={14} className="text-neutral-400" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors whitespace-nowrap">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-medium">
          <p>© 2024 ElevenLabs Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900 transition">Accessibility</a>
            <a href="#" className="hover:text-neutral-900 transition">Modern Slavery Statement</a>
            <a href="#" className="hover:text-neutral-900 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ChevronDown = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
