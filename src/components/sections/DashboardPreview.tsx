"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-mono uppercase tracking-tighter text-white">
            Live <span className="text-purple-400">Holo-Map</span>
          </h2>
          <p className="text-xl text-slate-400 font-mono">Monitor your fleetyour fleet&apos;s positionapos;s position in the galaxy in real-time.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)] bg-black"
        >
          {/* Decorative Terminal Header */}
          <div className="h-12 bg-[#020617] border-b-2 border-white/10 flex items-center px-6 gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-slate-400 font-bold tracking-widest uppercase">Targeting System // Sector 7</div>
          </div>
          
          <div className="aspect-[16/9] relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#020617] to-[#020617] flex items-center justify-center">
             
             {/* Gamified Radar Animation */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] border border-green-500/20 rounded-full flex items-center justify-center">
                   <div className="w-[60%] h-[60%] border border-green-500/30 rounded-full flex items-center justify-center">
                      <div className="w-[40%] h-[40%] border border-green-500/40 rounded-full relative">
                         <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent to-green-500 origin-left animate-[spin_4s_linear_infinite]"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Fake Ship Pings */}
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.8)]"></motion.div>
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></motion.div>
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></motion.div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(34,197,94,0.5)] border-4 border-white/30 group"
            >
              <Play className="w-8 h-8 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
