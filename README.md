# CatCoins ($CATC) Landing Page

Official production-ready, high-performance landing page for **CatCoins ($CATC)** on **BNB Chain**, designed for fair launch on **Four.meme**.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 📁 Project Structure

```text
├── index.html                 # HTML entry point with SEO, Open Graph & Schema.org JSON-LD
├── metadata.json              # AI Studio application metadata
├── package.json               # Dependencies and scripts (Vite, React 19, Tailwind)
├── tsconfig.json              # Strict TypeScript configuration
├── vite.config.ts             # Vite build & Tailwind configuration
├── public/
│   ├── favicon.svg            # Custom CatCoin gold coin SVG favicon
│   ├── robots.txt             # Web crawler directives and sitemap reference
│   └── sitemap.xml            # XML sitemap for search engine indexation (Google Search Console)
├── src/
│   ├── config.ts              # ⭐ Single configuration file for links, contract, and ticker
│   ├── main.tsx               # React root mounting
│   ├── App.tsx                # Master page layout and accessibility landmark composition
│   ├── index.css              # Global styles, fonts, and gold ambient glows
│   ├── assets/
│   │   ├── index.ts           # Centralized visual asset exports
│   │   └── images/            # High-fidelity mascot and token medallion artwork
│   └── components/
│       ├── Navbar.tsx         # 3-zone Top Bar Contract navigation with mobile drawer
│       ├── Hero.tsx           # High-impact headline, cat mascot, Four.meme CTA, contract box
│       ├── About.tsx          # Honest project ethos, BNB performance & Four.meme explanation
│       ├── Tokenomics.tsx     # Transparent token parameters, BEP-20 info & bonding curve guide
│       ├── Roadmap.tsx        # Clearly labeled current vs. planned milestones
│       ├── Community.tsx      # Telegram, X links, safety warnings & share utility
│       ├── Footer.tsx         # Quick mirrors, social links & full crypto risk disclaimer
│       └── Toast.tsx          # Accessible feedback toast for copying addresses/links
└── README.md                  # Complete deployment, GitHub & Cloudflare Pages guide
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (packaged with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```
This generates a production-optimized static bundle in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## ⚙️ Updating Links, Socials & Contract Address

All project links, token details, contract addresses, and status badges are managed in a **single file**:

📂 `src/config.ts`

```typescript
export const CONFIG = {
  projectName: 'CatCoins',
  ticker: 'CATC',
  displayTicker: '$CATC',
  network: 'BNB Chain',
  bscrScanUrl: 'https://bscscan.com',
  fourMemeUrl: 'https://four.meme/',
  telegramUrl: 'https://t.me/REPLACE_WITH_YOUR_TELEGRAM',       // 👈 Put your real Telegram group here
  xUrl: 'https://x.com/REPLACE_WITH_YOUR_X_USERNAME',             // 👈 Put your real X / Twitter handle here
  contractAddress: '',                                           // 👈 Paste your 0x... contract address after Four.meme launch!
  launchStatus: 'Coming Soon',                                   // 👈 Change to 'Live on Four.meme' after launch
  websiteUrl: 'https://www.catcoins.fun',                         // 👈 Your live production domain
  headline: 'GOOD CATS. BIG MEMES.',
  tagline: 'The purr-fect community meme token arriving on BNB Chain via Four.meme...',
};
```

When you edit this file, **every button, copy action, footer link, and status badge updates automatically across the entire site**.

---

## 🚀 How to Push to GitHub

Follow these steps in your terminal:

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "feat: initial CatCoin landing page with Four.meme integration"
```

### Step 2: Create a New GitHub Repository
1. Go to [GitHub](https://github.com) and sign in.
2. Click the **+** icon in the upper right and select **New repository**.
3. Name your repository (e.g. `catcoin-website`), keep it **Public** (or Private), and do not initialize with README (you already have one).
4. Click **Create repository**.

### Step 3: Connect and Push
Run the following commands (replace `<YOUR_GITHUB_USERNAME>` and `<REPO_NAME>` with your GitHub details):

```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

---

## 🌐 Deploying to Cloudflare Pages

Cloudflare Pages provides blazing-fast global edge hosting with free SSL and automatic git deployments:

### Step 1: Connect Your GitHub Account to Cloudflare
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left navigation sidebar, select **Compute (Workers & Pages)** > **Pages**.
3. Click **Create application** > **Pages** > **Connect to Git**.
4. Select your GitHub account and authorize Cloudflare to access your `catcoin-website` repository.

### Step 2: Configure Build Settings
Under the **Set up builds and deployments** section, configure the following exact settings:

| Setting | Value |
| :--- | :--- |
| **Project Name** | `catcoin` (or your preferred project name) |
| **Production Branch** | `main` |
| **Framework preset** | `Vite` (or `None`) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave blank or default) |

*Environment variables are not required because CatCoin is a pure static client application without backend secrets.*

### Step 3: Deploy
Click **Save and Deploy**. Cloudflare will download the repository, run `npm install`, execute `npm run build`, and publish your site globally within 60 seconds.

### Automatic Deployments:
Whenever you push changes to your `main` branch (for example, when you update `src/config.ts` with your live contract address), Cloudflare Pages will automatically trigger a new build and deploy the update with zero downtime.

---

## 🔗 Adding a Custom Domain on Cloudflare Pages

1. In your Cloudflare Pages project dashboard, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain name (e.g. `catcoin.meme` or `catc.io`).
4. Follow the automatic DNS verification steps:
   - If your domain is already registered on Cloudflare, DNS records are added with one click.
   - If your domain is on GoDaddy, Namecheap, or Porkbun, add the `CNAME` record pointing to `<your-project>.pages.dev`.
5. Cloudflare will automatically provision a free universal SSL certificate (HTTPS).

---

## 📝 Updating the Website After Token Launch

When your token launches on Four.meme:
1. Open `src/config.ts`.
2. Update:
   - `contractAddress: '0xYourActualBNBChainContractAddress'`
   - `launchStatus: 'Live on Four.meme'`
   - `telegramUrl: 'https://t.me/YourRealChannel'`
   - `xUrl: 'https://x.com/YourRealHandle'`
3. Commit and push to GitHub:
   ```bash
   git add src/config.ts
   git commit -m "chore: update contract address and live status"
   git push origin main
   ```
4. Cloudflare Pages will auto-deploy the update within moments!

---

## 🛡️ License & Risk Disclaimer
This project is open-source. CatCoin ($CATC) is a community meme coin created for entertainment purposes. Cryptocurrency trading carries financial risk. Always do your own research (DYOR).
