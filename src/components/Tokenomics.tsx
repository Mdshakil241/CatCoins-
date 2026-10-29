import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Info, Shield, Layers } from 'lucide-react';
import { CONFIG, isContractLive, getDisplayContractAddress } from '../config';
import { ASSETS } from '../assets';

interface TokenomicsProps {
  onNotify: (message: string) => void;
}

export const Tokenomics: React.FC<TokenomicsProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [coinImgLoaded, setCoinImgLoaded] = useState(true);

  const handleCopyContract = () => {
    if (isContractLive()) {
      navigator.clipboard.writeText(CONFIG.contractAddress);
      setCopied(true);
      onNotify('Contract address copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } else {
      navigator.clipboard.writeText(CONFIG.ticker);
      setCopied(true);
      onNotify(`Symbol ${CONFIG.displayTicker} copied. The smart contract address is not launched yet and will be updated here once deployed on Four.meme.`);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const specs = [
    { label: 'Token Name', value: CONFIG.projectName },
    { label: 'Symbol / Ticker', value: CONFIG.ticker, highlight: true },
    { label: 'Blockchain Network', value: CONFIG.network },
    { label: 'Token Standard', value: 'BEP-20' },
    { label: 'Launch Platform', value: 'Four.meme' },
    { label: 'Launch Model', value: 'Fair Bonding Curve' },
    { label: 'Launch Status', value: CONFIG.launchStatus, statusTag: true },
    { label: 'Presale / Private Seed', value: 'None (0%)' },
    { label: 'Team Tax / Buy-Sell Tax', value: '0% / 0%' },
  ];

  return (
    <section id="tokenomics" className="py-16 sm:py-20 md:py-24 bg-[#090A0F] border-t border-neutral-900 relative w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#F3BA2F] uppercase mb-3">
            <span>Specifications & Structure</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Fair Distribution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 break-words">
            Token Information
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
            All parameters for {CONFIG.projectName} are structured for radical transparency. No private seed allocations, no developer sell taxes, and no hidden contract mint functions.
          </p>
        </div>

        {/* Main Grid: Medallion Card + Detailed Specs - Stack on mobile/tablet, side-by-side on large desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12 min-w-0">
          
          {/* Left Column: 3D Medallion & Launch Platform Spotlight */}
          <div className="lg:col-span-5 bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-w-0">
            <div className="flex flex-col items-center text-center w-full min-w-0">
              
              {/* Token Coin Visual */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-2 bg-gradient-to-b from-[#F3BA2F]/30 via-transparent to-[#F3BA2F]/10 mb-4 sm:mb-6 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0B10] flex items-center justify-center border border-[#F3BA2F]/40 shadow-xl shadow-black/80">
                  {coinImgLoaded ? (
                    <img
                      src={ASSETS.tokenCoin}
                      alt="CatCoins BNB Chain official gold token coin medallion"
                      referrerPolicy="no-referrer"
                      onError={() => setCoinImgLoaded(false)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4">
                      <span className="text-4xl sm:text-5xl mb-2">🪙</span>
                      <span className="text-xs font-bold text-[#F3BA2F] font-mono">$CATC</span>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 break-words">
                {CONFIG.projectName} ({CONFIG.displayTicker})
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
                Deployed strictly on {CONFIG.network} through Four.meme's decentralized bonding curve protocol.
              </p>

              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 min-w-0">
                <a
                  href={CONFIG.fourMemeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#F3BA2F] hover:bg-[#FBBF24] rounded-xl transition-colors shadow-md shadow-[#F3BA2F]/20 whitespace-nowrap"
                >
                  <span>View on Four.meme</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={CONFIG.bscrScanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-[#1A1D2B] hover:bg-[#222638] border border-neutral-700/80 rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>BscScan</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-800 text-center">
              <span className="text-xs text-neutral-400">
                Verified Launch Platform: <strong className="text-white">Four.meme</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Key Metrics Table + Smart Contract Interactive Box */}
          <div className="lg:col-span-7 bg-[#12131C] border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-w-0">
            <div className="min-w-0 w-full">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#F3BA2F] shrink-0" aria-hidden="true" />
                <span>Verified Token Parameters</span>
              </h3>

              {/* Data Table with robust min-w-0 layout */}
              <div className="divide-y divide-neutral-800/80 min-w-0">
                {specs.map((item) => (
                  <div key={item.label} className="py-3 sm:py-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm min-w-0">
                    <span className="text-neutral-400 font-medium shrink-0">{item.label}</span>
                    <span
                      className={`font-semibold truncate text-right max-w-[55%] ${
                        item.highlight
                          ? 'text-[#F3BA2F] font-mono text-sm sm:text-base'
                          : item.statusTag
                          ? 'text-amber-300 font-medium'
                          : 'text-white'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Contract Field (Interactive Box) - Priority 2 Fix: Centered icon/label & perfectly aligned */}
            <div className="mt-6 pt-6 border-t border-neutral-800 min-w-0 w-full">
              <label htmlFor="contract-box" className="block text-xs font-semibold text-neutral-300 mb-2">
                Smart Contract Address (BNB Chain)
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full min-w-0">
                {/* Input text display box */}
                <div
                  id="contract-box"
                  className="flex-1 min-w-0 px-3.5 sm:px-4 py-3 bg-[#0A0B10] border border-neutral-800 rounded-xl text-xs font-mono text-neutral-300 select-all flex items-center overflow-hidden"
                >
                  {isContractLive() ? (
                    <span className="text-white truncate">{CONFIG.contractAddress}</span>
                  ) : (
                    <span className="text-neutral-400 italic truncate text-[11px] sm:text-xs">
                      {getDisplayContractAddress()}
                    </span>
                  )}
                </div>

                {/* Copy Button: Centered text + icon, 44px min touch target, aligned within parent */}
                <button
                  type="button"
                  onClick={handleCopyContract}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1C1F2E] hover:bg-[#25293E] border border-neutral-700 text-xs font-bold text-white rounded-xl transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3BA2F]"
                  aria-label={isContractLive() ? "Copy contract address" : "Copy token symbol"}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#F3BA2F] shrink-0" aria-hidden="true" />
                      <span className="font-semibold">{isContractLive() ? 'Copy Address' : 'Copy Ticker'}</span>
                    </>
                  )}
                </button>
              </div>

              {!isContractLive() && (
                <p className="mt-2 text-[11px] text-neutral-400 flex items-start gap-1.5 leading-normal">
                  <Info className="w-3.5 h-3.5 text-[#F3BA2F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Contract address will be finalized upon deployment on Four.meme. Always verify official channels before interacting.
                  </span>
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Four.meme Bonding Curve Explanation Box */}
        <div className="bg-[#10121A] border border-neutral-800/90 rounded-2xl p-5 sm:p-6 lg:p-8 min-w-0">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/30 flex items-center justify-center text-[#F3BA2F] shrink-0">
              <Shield className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                How the Four.meme Fair Launch Works
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                Four.meme utilizes a deterministic mathematical bonding curve. During the fair launch stage, token price is calculated transparently based on supply demand. Once the bonding curve target is reached, liquidity is automatically locked and migrated to decentralized exchanges like PancakeSwap, ensuring permanent decentralized trading without developer intervention.
              </p>
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-neutral-400 font-mono">
                <span>✓ 100% Fair Entry</span>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <span>✓ No Presale Whitelist</span>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <span>✓ Automated Liquidity Migration</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
