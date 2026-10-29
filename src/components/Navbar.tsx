import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { CONFIG } from '../config';

interface NavbarProps {
  onNotify?: (message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#090A0F]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract with min-w-0 to prevent narrow viewport overflow */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-18 sm:h-20 min-w-0">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] rounded-lg"
            aria-label={`${CONFIG.projectName} Home`}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FDE68A] via-[#F3BA2F] to-[#D97706] p-0.5 shadow-md shadow-[#F3BA2F]/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <div className="w-full h-full bg-[#12131A] rounded-[10px] flex items-center justify-center text-sm sm:text-base font-black text-[#F3BA2F]">
                🐱
              </div>
            </div>
            <span className="font-display font-extrabold text-base sm:text-xl tracking-tight text-white">
              {CONFIG.projectName}
              <span className="text-[#F3BA2F] font-semibold text-xs sm:text-sm ml-1 font-mono">
                {CONFIG.displayTicker}
              </span>
            </span>
          </a>

          {/* Zone 2: Single-Line Navigation Links (Hidden on mobile & small tablet) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#F3BA2F] transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#F3BA2F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={CONFIG.fourMemeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#F3BA2F] hover:bg-[#FBBF24] active:bg-[#D97706] rounded-lg transition-all duration-150 shadow-md shadow-[#F3BA2F]/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F]"
            >
              <span>Explore Four.meme</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (Minimum 44px touch target) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] sm:top-20 bg-[#090A0F]/98 backdrop-blur-xl z-50 md:hidden flex flex-col p-6 border-t border-neutral-800/80 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-lg font-medium text-neutral-200 hover:text-[#F3BA2F] py-2 border-b border-neutral-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col gap-4">
            <div className="text-xs text-neutral-400 font-mono">
              Network: {CONFIG.network} · {CONFIG.launchStatus}
            </div>
            <a
              href={CONFIG.fourMemeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider text-black bg-[#F3BA2F] hover:bg-[#FBBF24] rounded-xl transition-colors shadow-lg shadow-[#F3BA2F]/20"
            >
              <span>Explore Four.meme</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
