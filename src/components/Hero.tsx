import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';
import { CONFIG, isContractLive } from '../config';
import { ASSETS } from '../assets';

interface HeroProps {
  onNotify: (message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(true);

  const handleCopyTickerOrContract = () => {
    if (isContractLive()) {
      navigator.clipboard.writeText(CONFIG.contractAddress);
      setCopied(true);
      onNotify('Contract address copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } else {
      navigator.clipboard.writeText(CONFIG.ticker);
      setCopied(true);
      onNotify(`Token ticker ${CONFIG.displayTicker} copied! Official contract address will appear here once live on Four.meme.`);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNextUpdateClick = () => {
    onNotify('Stay tuned for the next update!');
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern w-full min-w-0">
      {/* Background ambient lighting - Confined with overflow containment */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#F3BA2F]/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#F59E0B]/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
            
            {/* Clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wider text-[#F3BA2F] uppercase mb-4">
              <span>{CONFIG.network}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Fair Launch Bonding Curve</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-mono">{CONFIG.launchStatus}</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6 break-words max-w-full">
              GOOD CATS. <br />
              <span className="gold-gradient-text">BIG MEMES.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
              {CONFIG.tagline}
            </p>

            {/* Interactive Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-3.5 min-w-0">
              <a
                href={CONFIG.fourMemeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#F3BA2F] hover:bg-[#FBBF24] active:bg-[#D97706] rounded-xl transition-all duration-200 shadow-lg shadow-[#F3BA2F]/25 hover:shadow-[#F3BA2F]/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] whitespace-nowrap"
              >
                <span>Explore Four.meme</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#community"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 hover:text-white bg-[#141620] hover:bg-[#1A1D2B] border border-neutral-700 hover:border-[#F3BA2F]/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] whitespace-nowrap"
              >
                <span>Join Community</span>
                <ArrowDown className="w-4 h-4 text-[#F3BA2F] shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* New Button: "Next Update Coming Soon" placed below the main CTA buttons */}
            <div className="w-full sm:w-auto mb-8 sm:mb-10">
              <button
                type="button"
                onClick={handleNextUpdateClick}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#F3BA2F] bg-[#12141E] hover:bg-[#191C2B] border border-[#F3BA2F]/35 hover:border-[#F3BA2F]/70 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#F3BA2F]/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F] cursor-pointer"
                aria-label="Next Update Coming Soon"
              >
                <Sparkles className="w-4 h-4 text-[#F3BA2F] shrink-0" aria-hidden="true" />
                <span>Next Update Coming Soon</span>
              </button>
            </div>

            {/* Contract Notice & Quick Copy Strip */}
            <div className="w-full max-w-xl p-3.5 sm:p-4 bg-[#12131A] border border-neutral-800 rounded-xl shadow-inner min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs min-w-0">
                <div className="flex items-start sm:items-center gap-2 text-neutral-400 min-w-0 flex-1">
                  <ShieldCheck className="w-4 h-4 text-[#F3BA2F] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 min-w-0 flex-1">
                    <span className="font-semibold text-neutral-300 shrink-0">Contract Address:</span>
                    <span className="font-mono text-neutral-400 break-all sm:truncate text-[11px] sm:text-xs">
                      {isContractLive() ? CONFIG.contractAddress : 'Not launched yet (Fair launch on Four.meme)'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyTickerOrContract}
                  className="w-full sm:w-auto min-h-[44px] sm:min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1C1F2D] hover:bg-[#25293C] text-neutral-200 hover:text-white text-xs font-semibold rounded-lg transition-colors border border-neutral-700/60 shrink-0 self-stretch sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F]"
                  title={isContractLive() ? "Copy contract address" : "Copy token ticker"}
                  aria-label={isContractLive() ? "Copy contract address" : "Copy token ticker"}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F3BA2F] shrink-0" aria-hidden="true" />
                      <span>{isContractLive() ? 'Copy Address' : 'Copy Ticker'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Spec Strip - Unboxed clean metadata with bullet separators */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs text-neutral-400 min-w-0">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className="text-neutral-500">Ticker:</span>
                <strong className="text-white font-mono">{CONFIG.displayTicker}</strong>
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className="text-neutral-500">Chain:</span>
                <strong className="text-white">{CONFIG.network}</strong>
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className="text-neutral-500">Platform:</span>
                <strong className="text-white">Four.meme</strong>
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className="text-neutral-500">Status:</span>
                <strong className="text-[#F3BA2F]">{CONFIG.launchStatus}</strong>
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Cat Mascot Artwork with Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full min-w-0">
            <div className="relative w-full max-w-[270px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#1C1E2B] via-[#12131C] to-[#0A0B10] border border-[#F3BA2F]/30 gold-glow-hero group min-w-0">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#F3BA2F]/10 via-transparent to-[#F3BA2F]/20 pointer-events-none" />

              {/* Main Artwork Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0D0E15] relative flex items-center justify-center">
                {imgLoaded ? (
                  <img
                    src={ASSETS.heroMascot}
                    alt="CatCoins official cat mascot wearing sunglasses and gold coin medal"
                    referrerPolicy="no-referrer"
                    onError={() => setImgLoaded(false)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Zero-broken-image fallback container */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-[#1C1F2D] to-[#0B0C10] text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/40 flex items-center justify-center text-3xl sm:text-5xl mb-3 sm:mb-4">
                      🐱
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white mb-1">CatCoins Mascot</span>
                    <span className="text-xs text-[#F3BA2F]">The Most Powerful Feline on BNB Chain</span>
                  </div>
                )}

                {/* Floating badge anchor */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B0C10]/85 backdrop-blur-md border border-neutral-700/80 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3BA2F]" aria-hidden="true" />
                    <span className="text-[11px] sm:text-xs font-semibold text-white">CatCoins Genesis Mascot</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#F3BA2F] bg-[#F3BA2F]/15 px-2 py-0.5 rounded">
                    BEP-20
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
