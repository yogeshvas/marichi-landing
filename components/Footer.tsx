import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Platform', 'Features', 'AI Automation', 'Integrations', 'Pricing']
    },
    {
      title: 'Solutions',
      links: ['Use Cases', 'Industries']
    },
    {
      title: 'Resources',
      links: ['About', 'Contact']
    },
    {
      title: 'Company',
      links: ['Privacy Policy', 'Terms of Service']
    }
  ];

  return (
    <footer className="pt-20 pb-12 border-t border-neutral-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-12">
          {/* Logo Column */}
          <div className="w-full lg:w-1/4">
            <a href="/" className="flex items-center gap-1 mb-6">
              <div className="flex text-black font-bold text-2xl tracking-tighter items-center">
                <img src="/logo.png" alt="Logo" width={24} height={24} />
                <span className="ml-1">Marichi</span>
              </div>
            </a>
            <p className="text-neutral-500 text-sm mb-6 max-w-xs">
              Commerce, support & growth — inside WhatsApp.
            </p>
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4">
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
          <p>© 2026 Marichi. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <span className="px-3 py-1 bg-neutral-100 rounded-full text-neutral-600">Built for Africa & India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
