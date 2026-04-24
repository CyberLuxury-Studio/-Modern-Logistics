"use client";
import React from "react";

import { motion } from "framer-motion";
import { Zap, Shield, Radar, Rocket, Target, Boxes } from "lucide-react";

const upgrades = [
  {
    icon: <Radar className="w-8 h-8 text-green-400" />,
    title: "Omni-Radar",
    description: "Track your entire fleet across 12 sectors simultaneously. Real-time telemetry prevents ambushes.",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-400" />,
    title: "Warp Drive Level 3",
    description: "Optimize hyperlane routing. Cut delivery times by 40% and save on dark-matter fuel.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Plasma Shields",
    description: "Military-grade encryption protects your cargo manifest from rival guilds and space pirates.",
  },
  {
    icon: <Target className="w-8 h-8 text-green-400" />,
    title: "Auto-Targeting",
    description: "Predictive AI automatically reroutes payloads when sector anomalies are detected.",
  },
  {
    icon: <Boxes className="w-8 h-8 text-green-400" />,
    title: "Quantum Storage",
    description: "Infinite payload capacity in the cloud. Manage inventory without physical limits.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-400" />,
    title: "Mothership Sync",
    description: "Instant data replication across your entire fleet. Everyone stays on the same mission.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-[#020617] relative border-b-2 border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-400 font-mono font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Fleet Upgrades</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-mono uppercase tracking-tighter text-white">
            Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">Arsenal</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium font-mono">
            Equip these legendary modules to dominate the galactic trade routes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upgrades.map((upgrade, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-3xl bg-black/60 border-2 border-white/10 hover:border-green-500/50 transition-colors group relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] group-hover:bg-green-500/20 transition-all"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#020617] border-2 border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                {upgrade.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 font-mono uppercase tracking-wide text-white">{upgrade.title}</h3>
              <p className="text-slate-400 font-mono text-base leading-relaxed">
                {upgrade.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-green-400 font-mono text-xs uppercase font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Equip Module <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
