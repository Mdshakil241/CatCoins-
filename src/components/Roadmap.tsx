import React from 'react';
import { Calendar } from 'lucide-react';
import { CONFIG } from '../config';

interface Milestone {
  number: string;
  title: string;
  timeline: string;
  status: 'In Progress' | 'Planned Milestone';
  isCurrent: boolean;
  description: string;
  goals: string[];
}

export const Roadmap: React.FC = () => {
  const milestones: Milestone[] = [
    {
      number: '01',
      title: 'Genesis & Community Setup',
      timeline: 'Current Stage',
      status: 'In Progress',
      isCurrent: true,
      description: 'Establishing the core brand identity, publishing the official landing page, launching initial Telegram & X channels, and seeding community cat meme lore.',
      goals: [
        'Launch official responsive landing page',
        'Deploy centralized transparent configuration',
        'Create Telegram community and official X handle',
        'Begin community meme initiatives and feline artwork',
      ],
    },
    {
      number: '02',
      title: 'Four.meme Fair Launch',
      timeline: 'Upcoming Phase',
      status: 'Planned Milestone',
      isCurrent: false,
      description: 'Official fair launch deployment of $CATC on Four.meme bonding curve on BNB Chain. Public contract verification and community trading commencement.',
      goals: [
        'Fair launch token deployment on Four.meme',
        'Publish official verified smart contract address',
        'Open public trading on the bonding curve',
        'Community raid campaigns and viral BNB social blitz',
      ],
    },
    {
      number: '03',
      title: 'Graduation & DEX Liquidity Migration',
      timeline: 'Future Planned Phase',
      status: 'Planned Milestone',
      isCurrent: false,
      description: 'Completion of the Four.meme bonding curve target, automatic liquidity provisioning to PancakeSwap, and listing discovery on DexScreener & CoinGecko.',
      goals: [
        'Automatic bonding curve graduation',
        'Decentralized liquidity migration to PancakeSwap',
        'Application for CoinMarketCap & CoinGecko indexing',
        'DexScreener profile verification & community trust score',
      ],
    },
    {
      number: '04',
      title: 'Community Culture & Feline Initiatives',
      timeline: 'Long-Term Vision',
      status: 'Planned Milestone',
      isCurrent: false,
      description: 'Deepening meme lore, launching community-voted charitable cat shelter donations, and exploring community governance tools.',
      goals: [
        'Community-curated cat meme competitions with rewards',
        'Community-voted shelter support donation drives',
        'CatCoins meme sticker packs & merchandise drops',
        'Ecosystem partnerships with aligned BNB Chain communities',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-20 md:py-24 bg-[#0B0C12] border-t border-neutral-900 relative w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#F3BA2F] uppercase mb-3">
            <span>Development Roadmap</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Planned Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-5 break-words">
            Transparent Project Milestones
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
            All milestones are clearly designated as either current or planned. We never claim completed targets before they happen.
          </p>
        </div>

        {/* Roadmap Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 min-w-0">
          {milestones.map((m) => (
            <div
              key={m.number}
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-w-0 ${
                m.isCurrent
                  ? 'bg-[#151724] border-[#F3BA2F]/40 shadow-lg shadow-black/40'
                  : 'bg-[#12131C] border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="min-w-0">
                {/* Header info strip: Editorial Index + Status Indicator */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 min-w-0">
                  <span className="font-display font-black text-2xl text-[#F3BA2F] font-mono">
                    {m.number}.
                  </span>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap ${
                        m.isCurrent
                          ? 'bg-[#F3BA2F]/20 text-[#F3BA2F] border border-[#F3BA2F]/40'
                          : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 break-words">
                  {m.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
                  <span>{m.timeline}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {m.description}
                </p>

                {/* Concrete Deliverable Bullet points */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 min-w-0">
                  {m.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400 min-w-0">
                      <span className="text-[#F3BA2F] font-bold mt-0.5 shrink-0">·</span>
                      <span className="leading-relaxed">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer status note */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                <span>Phase {m.number} Scope</span>
                <span className={m.isCurrent ? 'text-[#F3BA2F] font-medium' : 'text-neutral-400'}>
                  {m.isCurrent ? 'Active Execution' : 'Scheduled Upon Launch'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Disclaimer Callout */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#10121A] border border-neutral-800 text-center max-w-2xl mx-auto min-w-0">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Note: Milestones represent the planned trajectory for {CONFIG.projectName}. Because community meme tokens evolve organically with market interest and community participation, timelines may adjust flexibly while maintaining 100% transparency.
          </p>
        </div>

      </div>
    </section>
  );
};
