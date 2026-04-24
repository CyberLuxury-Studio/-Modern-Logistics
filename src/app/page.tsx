import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Pricing } from "@/components/sections/Pricing";
import { CTA, Footer } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative bg-[#020617] overflow-hidden text-slate-50 selection:bg-green-500/30 selection:text-green-400">
      <Header />
      <Hero />
      
      {/* Infinite Gamified Marquee */}
      <section className="py-6 border-y-2 border-green-500/20 bg-black/80 overflow-hidden relative z-20">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="flex w-[200%] animate-[marquee_15s_linear_infinite]">
            <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                <span className="text-2xl font-black text-green-500/50 uppercase tracking-[0.3em] font-mono">🛸 1M+ PAYLOADS DELIVERED</span>
                <span className="text-2xl font-black text-purple-500/50 uppercase tracking-[0.3em] font-mono">⚡ LIGHTSPEED WARP ENABLED</span>
                <span className="text-2xl font-black text-green-500/50 uppercase tracking-[0.3em] font-mono">🛡️ LVL 99 SHIELDS ACTIVE</span>
                <span className="text-2xl font-black text-purple-500/50 uppercase tracking-[0.3em] font-mono">🌌 SECTOR 7 CLEAR</span>
            </div>
            <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                <span className="text-2xl font-black text-green-500/50 uppercase tracking-[0.3em] font-mono">🛸 1M+ PAYLOADS DELIVERED</span>
                <span className="text-2xl font-black text-purple-500/50 uppercase tracking-[0.3em] font-mono">⚡ LIGHTSPEED WARP ENABLED</span>
                <span className="text-2xl font-black text-green-500/50 uppercase tracking-[0.3em] font-mono">🛡️ LVL 99 SHIELDS ACTIVE</span>
                <span className="text-2xl font-black text-purple-500/50 uppercase tracking-[0.3em] font-mono">🌌 SECTOR 7 CLEAR</span>
            </div>
        </div>
      </section>

      <Features />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
