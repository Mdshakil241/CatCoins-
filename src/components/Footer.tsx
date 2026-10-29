import React from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import { CONFIG } from '../config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06070A] border-t border-neutral-900 pt-12 sm:pt-16 pb-8 sm:pb-12 text-neutral-400 text-sm w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-neutral-900 min-w-0">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-5 min-w-0">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FDE68A] via-[#F3BA2F] to-[#D97706] p-0.5 shrink-0">
                <div className="w-full h-full bg-[#12131A] rounded-[6px] flex items-center justify-center text-sm font-black text-[#F3BA2F]">
                  🐱
                </div>
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                {CONFIG.projectName}
                <span className="text-[#F3BA2F] font-semibold text-xs ml-1.5 font-mono">
                  {CONFIG.displayTicker}
                </span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed mb-5">
              The premier feline meme token on {CONFIG.network}, launching transparently via Four.meme's decentralized bonding curve. Good cats. Big memes.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              Configured for {CONFIG.network} · Status: {CONFIG.launchStatus}
            </div>
          </div>

          {/* Quick Nav Mirrors */}
          <div className="md:col-span-3 min-w-0">
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="inline-block py-1 hover:text-[#F3BA2F] transition-colors">
                  About CatCoins
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="inline-block py-1 hover:text-[#F3BA2F] transition-colors">
                  Tokenomics & Specs
                </a>
              </li>
              <li>
                <a href="#roadmap" className="inline-block py-1 hover:text-[#F3BA2F] transition-colors">
                  Planned Roadmap
                </a>
              </li>
              <li>
                <a href="#community" className="inline-block py-1 hover:text-[#F3BA2F] transition-colors">
                  Community Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Ecosystem Links */}
          <div className="sm:col-span-2 md:col-span-4 min-w-0">
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-3 sm:mb-4">
              Official Ecosystem Links
            </h4>
            <div className="flex flex-col gap-2 text-xs min-w-0">
              <a
                href={CONFIG.fourMemeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-between p-3 rounded-xl bg-[#0F1018] border border-neutral-800 hover:border-[#F3BA2F]/40 hover:text-white transition-all group"
              >
                <span>Four.meme Launchpad</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F3BA2F] shrink-0" />
              </a>

              <a
                href={CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-between p-3 rounded-xl bg-[#0F1018] border border-neutral-800 hover:border-[#F3BA2F]/40 hover:text-white transition-all group"
              >
                <span>Telegram Community</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F3BA2F] shrink-0" />
              </a>

              <a
                href={CONFIG.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-between p-3 rounded-xl bg-[#0F1018] border border-neutral-800 hover:border-[#F3BA2F]/40 hover:text-white transition-all group"
              >
                <span>Official X (@CatCoins)</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F3BA2F] shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Crypto Risk Disclaimer */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-[#090A10] border border-neutral-900/90 text-xs text-neutral-400 min-w-0">
          <div className="flex flex-col sm:flex-row items-start gap-3 min-w-0">
            <AlertTriangle className="w-4 h-4 text-[#F3BA2F] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-2 min-w-0 flex-1">
              <p className="font-semibold text-neutral-300">
                Cryptocurrency & Meme Token Risk Disclaimer:
              </p>
              <p className="leading-relaxed">
                {CONFIG.projectName} ({CONFIG.displayTicker}) is a decentralized cryptocurrency meme token created for entertainment, cultural celebration, and community engagement on {CONFIG.network}. Meme tokens are subject to extreme market volatility and carry significant risk of capital loss. The token carries no guarantee of profits, intrinsic value, or formal governance commitments.
              </p>
              <p className="leading-relaxed">
                Nothing presented on this website or in community communications constitutes financial, trading, tax, or legal advice. Always conduct thorough independent research (DYOR) and never commit funds that you cannot afford to lose entirely.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 text-center sm:text-left">
          <p>© {currentYear} {CONFIG.projectName} Community. All rights reserved.</p>
          <p className="text-neutral-400 font-mono text-[11px] sm:text-xs">
            BNB Chain · Fair Launch on Four.meme
          </p>
        </div>

      </div>
    </footer>
  );
};
