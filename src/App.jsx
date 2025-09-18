import React, { useEffect, useState } from "react";

export default function App() {
  // Countdown to Sept 1, 2025 (UTC)
  const LAUNCH_DATE = new Date("2025-09-01T00:00:00Z");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, LAUNCH_DATE.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white antialiased relative">
      
      {/* Hero background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/60"></div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 pointer-events-none"></div>

    /&gt;
    
    {/* Dark overlay so text is always readable */}
    <div className="absolute inset-0 -z-10 bg-black/60"></div>
    
      {/* Subtle noise/texture overlay (inline SVG, no network call) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 .4 .35 .3 .25 .2 .15 .1 .08 .06 .04 .02 0'/></feComponentTransfer><feBlend mode='multiply'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.30'/></svg>`
          )}")`,
        }}
      />

      <div className="w-full bg-pink-600/10 border-b border-pink-600/30 text-center text-sm py-2 px-3">
        <span className="text-pink-300 font-semibold">Launch:</span> Coin goes live <span className="font-semibold">Sept 2025</span> •
        <a href="#join" className="ml-2 underline decoration-pink-400 hover:text-pink-200">Join whitelist</a>
        <span className="ml-3 text-pink-200/80">⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="font-black">TMV</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">The Muzik Vault</h1>
            <p className="text-xs text-gray-300">Unlock The Vault. Own The Culture.</p>
          </div>
        </div>
        <nav className="flex items-center gap-3 sm:gap-4">
          <a href="#roadmap" className="text-sm hover:text-pink-400">Roadmap</a>
          <a href="#tokenomics" className="text-sm hover:text-pink-400">Tokenomics</a>
          <a href="#vault" className="text-sm hover:text-pink-400">Vault</a>
          <a href="#faq" className="text-sm hover:text-pink-400">FAQ</a>
          <button aria-label="Connect Wallet" className="hidden sm:inline px-4 py-2 border border-white/15 rounded-md text-sm hover:bg-white/5">Connect Wallet</button>
          <a href="#join" className="px-4 py-2 bg-pink-600 rounded-md text-sm font-semibold hover:opacity-90">Buy $TMV</a>
        </nav>
      </header>

      <section className="w-full max-w-7xl mx-auto px-6 pt-4 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">The Muzik Vault ($TMV)</h2>
          <p className="mt-4 text-lg text-gray-300">A hybrid subscription + collectibles ecosystem powered by crypto. Exclusive merch, NFT drops, and revenue sharing for token holders.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#join" className="px-5 py-3 bg-pink-600 rounded-md font-semibold">Join Whitelist</a>
            <a href="#miniwp" className="px-5 py-3 border border-gray-700 rounded-md text-sm">Mini Whitepaper</a>
            <a href="#roadmap" className="px-5 py-3 border border-dashed border-gray-700 rounded-md text-sm">View Roadmap</a>
          </div>

          {/* Countdown pill in hero */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <span className="opacity-80">Countdown to Launch:</span>
            <span className="font-semibold text-pink-300">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-4 bg-gradient-to-br from-white/5 to-white/2 rounded-lg">
              <h4 className="text-sm text-gray-200">Price</h4>
              <p className="font-bold text-xl">$30 / mo</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-white/5 to-white/2 rounded-lg">
              <h4 className="text-sm text-gray-200">Token</h4>
              <p className="font-bold text-xl">$TMV</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-white/5 to-white/2 rounded-lg">
              <h4 className="text-sm text-gray-200">Launchpad</h4>
              <p className="font-bold text-xl">Bonk.fun</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-black/30 border border-white/5">
            <img src="/roadmap-poster.png" alt="TMV Visual Roadmap" className="w-full object-cover h-64"/>
            <div className="p-5">
              <h3 className="font-bold">Vault Edition — Gen 01</h3>
              <p className="text-sm text-gray-300 mt-2">Includes T-shirt, exclusive collectible, branded gear, and NFT pass for holders.</p>
              <div className="mt-4 flex gap-3">
                <a href="#join" className="px-4 py-2 bg-pink-600 rounded-md text-sm font-semibold">Buy $TMV</a>
                <a href="#tokenomics" className="px-4 py-2 border border-white/10 rounded-md text-sm">Tokenomics</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="w-full max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">Roadmap — Tracklist</h3>
        <p className="text-gray-300 mt-2">A music-inspired roadmap that reveals our major milestones.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {title: 'Track 1: Coin Launch', date: 'Sept 2025', bullets: ['Launch on Bonk.fun', 'Founding Vault whitelist', 'Influencer rollout']},
            {title: 'Track 2: Building the Vault', date: 'Q4 2025', bullets: ['Website & e-commerce', 'Vendor contracts', 'NFT prototypes']},
            {title: 'Track 3: Opening the Vault', date: 'Q1 2026', bullets: ['First Vault shipments', 'NFT drop for holders', 'Artist collabs']},
            {title: 'Track 4: Revenue Remix', date: 'Q2 2026', bullets: ['% of revenue to stakers', 'Staking discounts', 'Holder-only Vaults']},
            {title: 'Track 5: Community Stage', date: 'Q3 2026', bullets: ['DAO voting', 'Vault Lounge (Discord)', 'Community-driven drops']},
            {title: 'Track 6: World Tour', date: '2027', bullets: ['International rollout', 'Festival activations', 'Vault Collabs series']}
          ].map((t,i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-white/3 to-white/1 rounded-xl border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-pink-400 font-semibold">{t.date}</span>
                  <h4 className="mt-2 font-bold text-xl">{t.title}</h4>
                </div>
                <div className="text-4xl opacity-20 font-black">{i+1}</div>
              </div>
              <ul className="mt-4 text-gray-300 list-disc list-inside">
                {t.bullets.map((b,idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="tokenomics" className="w-full max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">Tokenomics</h3>
        <p className="text-gray-300 mt-2">Transparent distribution & clear holder incentives.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h4 className="font-bold">Distribution</h4>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>40% Holders / Rewards</li>
              <li>20% Treasury / Growth</li>
              <li>15% Team & Advisors (vested)</li>
              <li>15% Marketing & Partnerships</li>
              <li>10% Liquidity</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h4 className="font-bold">Revenue Sharing (Example)</h4>
            <p className="text-gray-300 mt-2">X% of subscription revenue distributed to staked $TMV holders quarterly. Exact % set by governance vote.</p>
            <div className="mt-4">
              <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                <div style={{width: "30%"}} className="h-4 bg-pink-500" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Shown: 30% example</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vault" className="w-full max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">The Vault — What You Get</h3>
        <p className="text-gray-300 mt-2">Physical + digital value designed for music lovers & collectors.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            {icon:"🎁", title:"Novelty Item", sub:"Stickers, gadgets, collectibles"},
            {icon:"🎶", title:"Branded Item", sub:"Phone skins, decals, gear"},
            {icon:"💎", title:"Collectible", sub:"Vinyl, art print, NFT pass"},
            {icon:"👕", title:"Custom T-Shirt", sub:"Genre-inspired designs"}
          ].map((c, i)=> (
            <div key={i} className="p-4 bg-white/5 rounded-lg text-center border border-white/10">
              <div className="text-3xl">{c.icon}</div>
              <h5 className="mt-2 font-bold">{c.title}</h5>
              <p className="text-sm text-gray-300">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold">Stay in the Loop</h3>
        <p className="text-gray-300 mt-2">Get launch reminders, artist collabs, and early Vault previews.</p>
        <form className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <input aria-label="Email address" type="email" required placeholder="you@email.com" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-80"/>
          <button className="px-6 py-3 rounded-md bg-pink-600 font-semibold">Notify Me</button>
        </form>
      </section>

      <section id="whitepaper" className="w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/roadmap-poster.png" alt="Mini White Paper Preview" className="rounded-lg shadow-lg border border-white/10"/>
        </div>
        <div>
          <h3 className="text-3xl font-bold">View the Mini White Paper</h3>
          <p className="text-gray-300 mt-2">Learn about our mission, tokenomics, and roadmap in a concise PDF format.</p>
          <a href="/The_Muzik_Vault_Mini_WhitePaper.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-block px-6 py-3 bg-pink-600 rounded-md font-semibold">Download PDF</a>
        </div>
      </section>

      <section id="faq" className="w-full max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">FAQ</h3>
        <div className="mt-6 grid gap-4">
          <details className="bg-white/5 border border-white/10 rounded-md p-4">
            <summary className="cursor-pointer font-semibold">How do I buy $TMV?</summary>
            <p className="text-gray-300 mt-2">Click “Buy $TMV” to open our Bonk.fun listing (placeholder). Connect your Solana wallet and follow the on-screen steps.</p>
          </details>
          <details className="bg-white/5 border border-white/10 rounded-md p-4">
            <summary className="cursor-pointer font-semibold">Do holders earn revenue share?</summary>
            <p className="text-gray-300 mt-2">Yes. A % of subscription revenue is allocated to staked $TMV holders, distributed quarterly. The exact % is set by governance.</p>
          </details>
          <details className="bg-white/5 border border-white/10 rounded-md p-4">
            <summary className="cursor-pointer font-semibold">When do boxes ship?</summary>
            <p className="text-gray-300 mt-2">Targeting Q1 2026 for Founding Vault Members. Official schedule will be posted post-launch.</p>
          </details>
        </div>
      </section>

      <section id="join" className="w-full max-w-7xl mx-auto px-6 py-14 text-center">
        <h3 className="text-3xl font-bold">Join the Vault</h3>
        <p className="text-gray-300 mt-2">Whitelist spots limited. Founding Vault Members receive special perks & lifetime discounts.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://bonk.fun/your-tmv-listing" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-pink-600 font-semibold">Buy on Bonk.fun</a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md border border-white/10">Join Discord</a>
          <a href="/The_Muzik_Vault_Mini_WhitePaper.pdf" className="px-6 py-3 rounded-md border border-white/10">Mini White Paper</a>
        </div>
        <p className="text-xs text-gray-400 mt-4">* Replace links with your actual listing & invite.</p>
      </section>

      <footer className="w-full border-t border-white/10 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold">The Muzik Vault</h4>
            <p className="text-gray-400 text-sm">Unlock The Vault. Own The Culture.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/themuzikvault" target="_blank" rel="noreferrer" className="text-sm text-gray-300">Twitter</a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" className="text-sm text-gray-300">Telegram</a>
            <a href="https://bonk.fun/your-tmv-listing" target="_blank" rel="noreferrer" className="text-sm text-gray-300">Bonk.fun</a>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="/privacy.html" className="hover:text-gray-200">Privacy</a>
            <a href="/terms.html" className="hover:text-gray-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
