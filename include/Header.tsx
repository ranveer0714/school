import React, { useEffect, useState } from 'react';
import { Menu, X, Star, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Activities', href: '/activities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Admission', href: '/admission' },
  { name: 'Charity', href: '/charity' },
  { name: 'Contact', href: '/contact' },
];

type HeaderProps = {
  currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasSolidBackground = isScrolled || currentPath !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidBackground ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap size={24} />
              <Star size={12} className="absolute -top-1 -right-1 text-sunshine fill-sunshine animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">
              Little<span className="text-primary">Champ</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-transform after:origin-left ${
                    isActive
                      ? 'text-primary after:scale-x-100'
                      : 'text-foreground/80 hover:text-primary after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Login
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = currentPath === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold">
                  Login
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
