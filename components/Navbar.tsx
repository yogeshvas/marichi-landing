
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    'Platform',
    'Features',
    'Use Cases',
    'AI',
    'Integrations',
    'Industries',
    'Pricing'
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <a href="/" className="flex items-center gap-1">
            <div className="flex text-black font-bold text-xl tracking-tighter items-center">
              <img src="/logo.png" alt="Logo" width={24} height={24} />
              <span className="mr-0.5"></span>Marichi Solutions
            </div>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-1">
              {navItems.map((item) => (
                <li key={item}>
                  <button className="px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors flex items-center gap-1">
                    {item}
                    {['Pricing'].indexOf(item) === -1 && <ChevronDown size={14} />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="hidden lg:flex items-center gap-x-2">
            <a href="/book-demo" className="px-5 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition">Book Demo</a>
          </div>
          <button className="lg:hidden p-2 text-neutral-900 hover:bg-neutral-100 rounded-full transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
