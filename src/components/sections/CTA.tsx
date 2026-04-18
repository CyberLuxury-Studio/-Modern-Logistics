"use client";

import { GlowingButton } from "../core/GlowingButton";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Massive Neon Light Source Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,rgba(138,43,226,0.1)_50%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-50 mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          Ready to Upgrade Your <br className="hidden md:block" /> Supply Chain?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Join the bleeding edge of logistics management. Deploy in minutes.
        </p>
        <GlowingButton className="text-lg px-8 py-4">
          Initialize System
        </GlowingButton>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-heading font-bold text-slate-50 mb-4">
            <span className="text-neon-cyan">NEO</span>-LOGISTICS
          </div>
          <p className="text-sm text-slate-500">
            The kinetic intelligence driving modern supply chains.
          </p>
        </div>

        <div>
          <h4 className="text-slate-50 font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-50 font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-50 font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
