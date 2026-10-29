import React from 'react';
import { HeartHandshake, Zap, Scale, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#0B0C12] border-t border-neutral-900 relative w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#F3BA2F] uppercase mb-3">
            <span>Project Ethos</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Zero False Promises</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 break-words">
            Built for Cat Lovers, Powered by Pure Community.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
            {CONFIG.projectName} is an honest, lighthearted meme project bringing feline energy to the BNB Chain ecosystem. No artificial utility claims, no bogus roadmap promises—just authentic meme culture, open community participation, and fair launch distribution on Four.meme.
          </p>
        </div>

        {/* 3 Core Structural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 min-w-0">
          
          {/* Card 1: Four.meme Fair Launch */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 min-w-0">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] mb-5 sm:mb-6">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 sm:mb-3">
                Fair Launch on Four.meme
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Tokens are minted strictly through the Four.meme bonding curve. There are no private insider sales, no VC allocations, and no unfair seed advantages. Every participant enters on equal ground.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-800/80 text-[11px] sm:text-xs text-neutral-400 font-mono">
              Fair Bonding Curve · Transparent Rules
            </div>
          </div>

          {/* Card 2: BNB Chain Performance */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 min-w-0">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] mb-5 sm:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 sm:mb-3">
                BNB Chain High Speed & Low Fees
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Meme coins should be fun and accessible. BNB Chain provides sub-second transaction speeds and penny-fraction gas costs so everyone can trade and share memes without prohibitive network fees.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800/80 text-[11px] sm:text-xs text-neutral-400 font-mono">
              BEP-20 Standard · Negligible Gas
            </div>
          </div>

          {/* Card 3: Community Spirit & Transparency */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 md:col-span-2 lg:col-span-1 min-w-0">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] mb-5 sm:mb-6">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 sm:mb-3">
                100% Community-Driven Ethos
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                The strength of {CONFIG.projectName} comes from the collective creativity of meme creators, feline advocates, and crypto enthusiasts. All growth and milestone decisions are driven organically by the community.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800/80 text-[11px] sm:text-xs text-neutral-400 font-mono">
              Meme Power · Organic Growth
            </div>
          </div>

        </div>

        {/* Honest Community Note Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#141622] border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-w-0">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F3BA2F]/15 flex items-center justify-center text-[#F3BA2F] shrink-0 mt-0.5 sm:mt-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                Transparency First: What We Stand For
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 max-w-2xl leading-relaxed">
                {CONFIG.projectName} does not claim to solve global logistics or invent quantum cryptography. It is a genuine meme token created to celebrate cats, ignite viral social memes, and foster a fun crypto community on BNB Chain.
              </p>
            </div>
          </div>
          <a
            href={CONFIG.fourMemeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center text-xs font-semibold text-[#F3BA2F] hover:text-[#FBBF24] underline underline-offset-4 shrink-0 transition-colors"
          >
            Read about Four.meme Launch Model →
          </a>
        </div>

      </div>
    </section>
  );
};
