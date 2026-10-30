/**
 * CatCoins Project Configuration
 * ============================================================================
 * EDIT THIS FILE to update your project details, social links, token status,
 * and contract address when launching on Four.meme.
 *
 * All buttons, links, banners, and info sections throughout the website
 * automatically pull their values directly from this configuration.
 * ============================================================================
 */

export interface CatCoinsConfig {
  /** The full official name of your project */
  projectName: string;

  /** The token ticker without symbols (e.g. 'CATC') */
  ticker: string;

  /** The token ticker formatted with currency prefix (e.g. '$CATC') */
  displayTicker: string;

  /** Target blockchain network */
  network: string;

  /** BNB Chain Explorer base URL */
  bscrScanUrl: string;

  /** Direct Four.meme token launch or exploration link */
  fourMemeUrl: string;

  /** Official Telegram community or channel link */
  telegramUrl: string;

  /** Official X (formerly Twitter) account link */
  xUrl: string;

  /**
   * Smart contract address on BNB Chain.
   * Leave empty ('') until the token is deployed on Four.meme.
   * Example after launch: '0x1234567890abcdef1234567890abcdef12345678'
   */
  contractAddress: string;

  /**
   * Current launch stage.
   * Examples: 'Coming Soon', 'Fair Launching on Four.meme', 'Live on Four.meme'
   */
  launchStatus: string;

  /**
   * Website URL (used for sharing cards and copy links).
   * Replace with your production Cloudflare Pages or custom domain when live.
   */
  websiteUrl: string;

  /** Project slogan / primary headline */
  headline: string;

  /** Brief description explaining the project ethos */
  tagline: string;
}

export const CONFIG: CatCoinsConfig = {
  projectName: 'CatCoins',
  ticker: 'CATC',
  displayTicker: '$CATC',
  network: 'BNB Chain',
  bscrScanUrl: 'https://bscscan.com',
  fourMemeUrl: 'https://four.meme/',
  telegramUrl: 'https://t.me/REPLACE_WITH_YOUR_TELEGRAM',
  xUrl: 'https://x.com/REPLACE_WITH_YOUR_X_USERNAME',
  contractAddress: '', // Leave empty until deployed on Four.meme
  launchStatus: 'Coming Soon',
  websiteUrl: 'https://www.catcoins.fun', // Production custom domain
  headline: 'GOOD CATS. BIG MEMES.',
  tagline: 'The purr-fect community meme token arriving on BNB Chain via Four.meme. Pure fun, fair launch bonding curve, zero hidden team fees, and 100% feline energy.',
};

/**
 * Helper to check whether the token contract is live
 */
export function isContractLive(): boolean {
  return Boolean(CONFIG.contractAddress && CONFIG.contractAddress.trim().length > 0);
}

/**
 * Helper to get a human-friendly display version of the contract address
 */
export function getDisplayContractAddress(): string {
  if (!isContractLive()) {
    return 'Not launched yet (Revealed upon Four.meme launch)';
  }
  const addr = CONFIG.contractAddress.trim();
  if (addr.length > 14) {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }
  return addr;
}
