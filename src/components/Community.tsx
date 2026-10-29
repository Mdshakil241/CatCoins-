import React, { useState } from 'react';
import { Send, Share2, Check, ExternalLink, ShieldAlert } from 'lucide-react';
import { CONFIG } from '../config';

interface CommunityProps {
  onNotify: (message: string) => void;
}

export const Community: React.FC<CommunityProps> = ({ onNotify }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const isTelegramPlaceholder = CONFIG.telegramUrl.includes('REPLACE_WITH_YOUR');
  const isXPlaceholder = CONFIG.xUrl.includes('REPLACE_WITH_YOUR');

  const handleShare = () => {
    const url = window.location.href || CONFIG.websiteUrl;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    onNotify('Website link copied to clipboard! Share it with fellow cat enthusiasts.');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="community" className="py-16 sm:py-20 md:py-24 bg-[#090A0F] border-t border-neutral-900 relative w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#F3BA2F] uppercase mb-3">
            <span>Community Hub</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Join the Pride</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 break-words">
            Join the CatCoins Community
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
            The heart of {CONFIG.projectName} is its passionate community. Follow our official channels for real-time announcements, launch alerts on Four.meme, meme contests, and direct discussions with fellow holders.
          </p>
        </div>

        {/* 2 Primary Social Channel Cards + Share Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 min-w-0">
          
          {/* Telegram Channel Card - Updated heading to Telegram Community and button to Join TG Community */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 min-w-0">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0088cc]/10 border border-[#0088cc]/30 flex items-center justify-center text-[#229ED9] mb-5 sm:mb-6">
                <Send className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                Telegram Community
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Join the main Telegram chat for community raids, real-time Four.meme bonding alerts, voice chats, and feline memes.
              </p>
            </div>

            <div>
              {isTelegramPlaceholder && (
                <div className="mb-4 text-[11px] sm:text-xs text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20 font-mono break-all">
                  Placeholder link · Update in src/config.ts
                </div>
              )}
              <a
                href={CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#229ED9] hover:bg-[#1E8AC0] rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9]"
              >
                <span>Join TG Community</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* X (formerly Twitter) Card */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 min-w-0">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                Follow on X
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Get official milestone announcements, Four.meme launch notifications, viral memes, and official CatCoins updates on X.
              </p>
            </div>

            <div>
              {isXPlaceholder && (
                <div className="mb-4 text-[11px] sm:text-xs text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20 font-mono break-all">
                  Placeholder link · Update in src/config.ts
                </div>
              )}
              <a
                href={CONFIG.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Follow @CatCoins on X</span>
                <ExternalLink className="w-3.5 h-3.5 text-black shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Share Card */}
          <div className="bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#F3BA2F]/40 transition-colors duration-200 md:col-span-2 lg:col-span-1 min-w-0">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/30 flex items-center justify-center text-[#F3BA2F] mb-5 sm:mb-6">
                <Share2 className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                Share CatCoins
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Spread the feline revolution to your community. Copy the website link to invite friends, meme creators, and BNB Chain degens.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={handleShare}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#F3BA2F] hover:bg-[#FBBF24] rounded-xl transition-all shadow-md shadow-[#F3BA2F]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F]"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-black shrink-0" aria-hidden="true" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-black shrink-0" aria-hidden="true" />
                    <span>Copy Official Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Safety & Anti-Scam Callout */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#14151F] border border-neutral-800 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 min-w-0">
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3BA2F] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs text-neutral-300 leading-relaxed min-w-0 flex-1">
            <strong className="text-white font-semibold block mb-1">
              Safety First: Avoid Impersonators
            </strong>
            The official {CONFIG.projectName} ({CONFIG.displayTicker}) team will never DM you first, ask for your private keys, or request transfers of BNB. Always verify contract addresses and links exclusively from our official website and verified Four.meme channel.
          </div>
        </div>

      </div>
    </section>
  );
};
