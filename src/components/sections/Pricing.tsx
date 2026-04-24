"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Shield, Crosshair } from "lucide-react";

const tiers = [
  {
    name: "Fighter Class",
    price: "499",
    description: "Perfect for solo smugglers and small crews.",
    icon: <Crosshair className="w-6 h-6 text-slate-400" />,
    features: [
      "Up to 5 Starships",
      "Standard Radar Maps",
      "Community Comms",
      "99% Uptime Guarantee",
    ],
  },
  {
    name: "Cruiser Class",
    price: "1,299",
    description: "Advanced targeting for established space guilds.",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    features: [
      "Up to 50 Starships",
      "Predictive AI Routing",
      "Priority Holo-Support",
      "Quantum Encryption",
      "Custom Fleet Skins",
    ],
    popular: true,
  },
  {
    name: "Mothership",
    price: "Custom",
    description: "Total galactic domination for massive empires.",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    features: [
      "Unlimited Starships",
      "Dedicated Server Nodes",
      "On-Premise Vaults",
      "24/7 Sovereign Support",
      "Custom API Integration",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#020617] relative border-t-2 border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-400 font-mono font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Galactic Leaderboard</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-mono uppercase tracking-tighter text-white">
            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">Tier</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium font-mono">
            Upgrade your command center to match your guildyour guild&apos;s ambitionapos;s ambition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
              className={`rounded-3xl p-10 border-2 font-mono ${
                tier.popular
                  ? "bg-black/80 border-green-500 relative shadow-[0_0_40px_rgba(34,197,94,0.2)] md:-translate-y-4"
                  : "bg-black/40 border-white/10 hover:border-white/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-green-400 to-emerald-600 text-black text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Meta Build
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl border border-white/10 ${tier.popular ? 'bg-green-500/20' : 'bg-white/5'}`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{tier.name}</h3>
              </div>
              
              <p className="text-slate-400 text-sm mb-8 min-h-[40px] font-medium">{tier.description}</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-white">{tier.price === "Custom" ? "" : "$"}{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-slate-500 font-bold">/mo</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.popular ? "text-green-400" : "text-slate-500"}`} />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all border-2 ${
                tier.popular
                  ? "bg-green-500 text-black border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                  : "bg-transparent text-white border-white/20 hover:bg-white/10"
              }`}>
                {tier.price === "Custom" ? "Contact Command" : "Purchase Upgrade"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
