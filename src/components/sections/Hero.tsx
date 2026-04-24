"use client";

import { motion } from "framer-motion";
import { Activity, Crosshair } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden border-b-2 border-green-500/20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#020617] -z-20" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 -z-10 mix-blend-overlay"></div>
      
      {/* Gamified Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"></div>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border-2 border-green-500/50 text-green-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold font-mono tracking-[0.2em] uppercase">Hyperlane Network Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] font-mono text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            COMMAND <br className="hidden md:block" /> YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500">FLEET</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium font-mono"
          >
            Manage interstellar payloads, optimize warp routes, and dominate the global trade network in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button 
               whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,197,94,0.6)" }}
               whileTap={{ scale: 0.95 }}
               className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-500 text-black font-black font-mono text-lg rounded-xl overflow-hidden uppercase tracking-[0.2em] border-2 border-white/50"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <Crosshair className="w-5 h-5" /> Initialize Radar
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black font-mono text-lg rounded-xl bg-black/50 border-2 border-white/20 backdrop-blur-md hover:border-green-500/50 transition-colors uppercase tracking-[0.2em]"
            >
              <Activity className="w-5 h-5 text-purple-400" /> View Ship Stats
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
