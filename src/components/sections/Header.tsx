"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "../core/GlowingButton";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/50"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-heading font-bold text-slate-50 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] flex items-center gap-2">
          <span className="text-neon-cyan">NEO</span>-LOGISTICS
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-neon-cyan transition-colors">Features</a>
          <a href="#dashboard" className="hover:text-neon-cyan transition-colors">Dashboard</a>
          <a href="#pricing" className="hover:text-neon-cyan transition-colors">Pricing</a>
        </nav>

        <GlowingButton variant="outline" className="hidden md:flex px-4 py-2 text-sm">
          Get Started
        </GlowingButton>
      </div>
    </motion.header>
  );
}
