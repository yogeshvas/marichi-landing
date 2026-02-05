import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
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
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors flex items-center gap-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="hidden lg:flex items-center gap-x-2">
              <a href="/book-demo" className="px-5 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition">Book Demo</a>
            </div>
            <button
              className="lg:hidden p-2 text-neutral-900 hover:bg-neutral-100 rounded-full transition z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 bg-white border-t border-neutral-100 lg:hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              <nav>
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 text-lg font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <a
                  href="/book-demo"
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
