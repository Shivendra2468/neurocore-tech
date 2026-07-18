'use client'; 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Activity, Cpu, ArrowUpRight, Radio, Database, Zap, Layers, Send, HelpCircle, Box, Server, Infinity, Code2, Sparkles, Wind } from 'lucide-react';

export default function Home() {
  const [logText, setLogText] = useState('');
  
  const logs = [
    'INIT CORE SECURE PROTOCOL...',
    'CONNECTING TO SHIVAM RAJPOOT MAIN PASSWAY...',
    'LOADING KERNEL LAYERS [SUCCESS]',
    'SEO MASTERING MAP INITIALIZED...',
    'STATUS: 100% SECURE & ACTIVE.'
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    let currentCharIndex = 0;
    let currentDisplay = '';

    const typeLogs = () => {
      if (currentLogIndex < logs.length) {
        if (currentCharIndex < logs[currentLogIndex].length) {
          currentDisplay += logs[currentLogIndex][currentCharIndex];
          setLogText(currentDisplay + '_');
          currentCharIndex++;
          setTimeout(typeLogs, 30);
        } else {
          currentDisplay += '\n';
          currentLogIndex++;
          currentCharIndex = 0;
          setTimeout(typeLogs, 500);
        }
      } else {
        setLogText(currentDisplay + ' ✓ TERMINAL READY.');
      }
    };

    typeLogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <main className="relative min-h-screen bg-[#01060a] text-[#00f0ff] font-mono overflow-x-hidden flex flex-col items-center justify-between p-4 md:p-8 select-none">
      
      {/* निऑन ग्रिड बैकग्राउंड */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#02131e_1px,transparent_1px),linear-gradient(to_bottom,#02131e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* होलोग्राफिक ग्लो */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#00f0ff] to-[#7000ff] rounded-full blur-[130px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#ff007b] to-[#00f0ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* 🛸 1. प्रीमियम होलोग्राफिक नेविगेशन बार */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 w-full max-w-6xl flex items-center justify-between p-4 border border-[#02333d]/60 bg-black/40 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <Cpu className="w-4 h-4 text-black font-bold animate-pulse" />
          </div>
          <span className="text-white font-black tracking-widest text-sm group-hover:text-[#00f0ff] transition-colors duration-300">
            NEUROCORE<span className="text-[#7000ff]">.TECH</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest text-slate-400">
          {['MAINFRAME', 'AI CORE', 'PROJECTS', 'TERMINAL'].map((item, idx) => (
            <a key={idx} href="#" className="hover:text-[#00f0ff] transition-colors duration-200 relative group py-1">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-1.5 border border-[#00f0ff]/40 px-4 py-1.5 rounded-lg bg-black/20 text-xs text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 font-bold">
          LIVE NODES <Radio className="w-3 h-3 text-red-500 animate-ping" />
        </button>
      </motion.header>

      {/* 🛸 2. मुख्य कंटेनर (Hero Section) */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center my-auto space-y-12 pt-16 pb-16">
        
        <div className="space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="border border-[#00f0ff]/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            ADMINISTRATOR: MR. SHIVAM RAJPOOT SYSTEM IS ONLINE
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-white via-[#00f0ff] to-[#7000ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.25)] uppercase select-none"
          >
            NEUROCORE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-xs md:text-base text-slate-400 tracking-wide font-sans leading-relaxed px-4"
          >
            The ultimate digital intelligence mainframe owned and directed by Mr. Shivam Rajpoot. Engineered exclusively for elite performance, multi-million dollar valuation aesthetics, and global Google Search domination.
          </motion.p>
        </div>

        {/* SYSTEM CORE LOGS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-3xl p-4 border border-[#02333d] bg-black/80 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.8)] text-left"
        >
          <div className="flex items-center justify-between border-b border-[#02333d]/60 pb-2 mb-3">
            <div className="flex items-center gap-2 text-[10px] tracking-widest font-bold text-[#7000ff]">
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" /> CORE MATRIX LIVE STATUS LOGGER
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 animate-pulse" />
            </div>
          </div>
          <pre className="text-xs md:text-sm text-[#00f0ff] font-mono leading-relaxed whitespace-pre-line min-h-[100px] font-bold">
            {logText}
          </pre>
        </motion.div>

        {/* प्रीमियम ग्लासमोर्फिज्म कार्ड */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full max-w-3xl p-6 md:p-8 border border-[#02333d] bg-gradient-to-b from-black/60 to-[#000c14]/90 backdrop-blur-xl rounded-2xl shadow-[inset_0_0_30px_rgba(0,240,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row gap-6 items-center justify-between text-left group hover:border-[#00f0ff]/40 transition-all duration-500"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#7000ff] font-bold">
              <Terminal className="w-3 h-3 text-[#00f0ff]" /> NEURAL INTERFACE TERMINAL
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Quantum Web Architecture</h3>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              डायनेमिक सर्वर-साइड ऑप्टिमाइज़ेशन (SSR) के साथ इंटीग्रेटेड, जो आपकी साइट के हर एक कंपोनेंट को गूगल क्रॉलर के लिए मख्खन की तरह स्मूथ और सुपर-फास्ट बनाता है।
            </p>
          </div>

          <button className="relative px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-black font-black uppercase tracking-wider rounded-xl text-xs shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shrink-0">
            CONNECT TO CORE <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
          </button>
        </motion.div>

        {/* THE MILLION DOLLAR FEATURES NODE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-4"
        >
          {[
            { title: "Neural Synergy Engine", desc: "Aigocy-inspired glass layers executing autonomous operations in real-time.", icon: Database, tag: "CORE MATRIX" },
            { title: "Blazing Data Nodes", desc: "Zero server latency architecture processing matrix visual components at 0.01ms.", icon: Zap, tag: "LIGHTNING SSR" },
            { title: "Cryptographic Shield", desc: "Military-grade structural encapsulation guarding the mainframe from layout errors.", icon: Layers, tag: "EXTREME SECURITY" }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-6 border border-[#02333d]/60 bg-gradient-to-br from-black/80 to-[#000c14]/90 rounded-xl text-left shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-bold tracking-widest">{feature.tag}</span>
                  </div>
                  <h4 className="text-white font-bold text-base tracking-tight group-hover:text-[#00f0ff] transition-colors">{feature.title}</h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{feature.desc}</p>
                </div>
                <div className="pt-6 flex items-center gap-1 text-[10px] text-[#00f0ff] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ACTIVATE NODE <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ⚡ 3. DYNAMIC TECH STACK NODE (नया 3D स्पिनिंग आइकॉन्स सेक्शन) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-left pt-12 space-y-6"
        >
          <div className="flex flex-col space-y-2 border-l-2 border-[#7000ff] pl-4">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Mainframe Tech Stack</h2>
            <p className="text-xs text-slate-400 font-sans">इस हाई-परफॉर्मेंस सिस्टम को पावर देने वाले कोर इंजनों की 3D एनिमेटेड मैट्रिक्स ग्रिड।</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { name: "Next.js 15", tech: "Framework Engine", icon: Infinity },
              { name: "React 19", tech: "UI Architecture", icon: Code2 },
              { name: "Tailwind CSS", tech: "Neon Visual Styling", icon: Wind },
              { name: "Framer Motion", tech: "3D Animation Matrix", icon: Sparkles }
            ].map((stack, idx) => {
              const StackIcon = stack.icon;
              return (
                <div key={idx} className="p-4 border border-[#02333d]/40 bg-black/40 rounded-xl flex items-center gap-3 group cursor-pointer hover:border-[#00f0ff]/50 hover:bg-black/80 transition-all duration-300">
                  <motion.div 
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="p-2.5 rounded-lg bg-[#7000ff]/10 border border-[#7000ff]/30 text-[#00f0ff] group-hover:border-[#00f0ff]/50 group-hover:bg-[#00f0ff]/10 shrink-0"
                  >
                    <StackIcon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h5 className="text-white text-xs font-bold tracking-tight group-hover:text-[#00f0ff] transition-colors">{stack.name}</h5>
                    <p className="text-[10px] text-slate-500 font-sans mt-0.5">{stack.tech}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* THE ACTIVE MAINFRAME PROJECTS SHOP */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-left pt-12 space-y-6"
        >
          <div className="flex flex-col space-y-2 border-l-2 border-[#00f0ff] pl-4">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Active Deep-Tech Projects</h2>
            <p className="text-xs text-slate-400 font-sans">लाइव सर्वर कर्नल पर चल रहे हमारे सबसे एडवांस हाई-एंड सिस्टम्स का रियल-टाइम प्रोग्रेस डेटा।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              { name: "Project CyberShield V2", progress: "94%", desc: "Autonomous firewall intercepting rogue data packets globally.", icon: Server, color: "from-[#00f0ff] to-[#7000ff]" },
              { name: "Hyperion UI Mainframe", progress: "87%", desc: "Elite glassmorphic designs executing with pure GPU acceleration.", icon: Box, color: "from-[#ff007b] to-[#00f0ff]" }
            ].map((proj, i) => {
              const ProjIcon = proj.icon;
              return (
                <div key={i} className="p-6 border border-[#02333d]/40 bg-black/50 backdrop-blur-md rounded-xl space-y-4 group hover:border-[#00f0ff]/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ProjIcon className="w-5 h-5 text-[#7000ff] group-hover:text-[#00f0ff] transition-colors" />
                      <h4 className="text-white font-bold text-sm">{proj.name}</h4>
                    </div>
                    <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/5 px-2 py-0.5 rounded border border-[#00f0ff]/20">{proj.progress}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{proj.desc}</p>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#02333d]">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: proj.progress }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className={`h-full bg-gradient-to-r ${proj.color} rounded-full`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* THE SOVEREIGN QUERY HUB */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl p-6 md:p-8 border border-[#02333d]/60 bg-gradient-to-b from-black/40 to-[#000b12]/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left mt-8 space-y-6 relative group"
        >
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#01060a] border border-[#02333d] px-3 py-1 rounded-md text-[9px] text-[#7000ff] font-bold tracking-widest uppercase">
            SECURE LINK INTERFACE
          </div>

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-black text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#00f0ff]" /> Initialize Communication
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              हमारे न्यूरल नेटवर्क कोर से जुड़ने के लिए अपना कमांड इनपुट सबमिट करें। 100% एन्क्रिप्टेड कर्नल पाथ।
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-sans text-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-mono tracking-widest text-[#00f0ff]/70 uppercase font-bold">IDENTIFICATION</label>
              <input 
                type="text" 
                placeholder="Enter your name..." 
                className="w-full bg-black/60 border border-[#02333d] rounded-xl p-3 text-white placeholder-slate-600 outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 font-mono text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-mono tracking-widest text-[#00f0ff]/70 uppercase font-bold">NEURAL ADDRESS</label>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-black/60 border border-[#02333d] rounded-xl p-3 text-white placeholder-slate-600 outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 font-mono text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label className="text-[10px] font-mono tracking-widest text-[#00f0ff]/70 uppercase font-bold">COMMAND DATA/MESSAGE</label>
              <textarea 
                rows={3}
                placeholder="Type your strategic query here..." 
                className="w-full bg-black/60 border border-[#02333d] rounded-xl p-3 text-white placeholder-slate-600 outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 font-mono text-xs resize-none"
              />
            </div>

            <button className="md:col-span-2 w-full mt-2 py-3.5 bg-black/40 border border-[#00f0ff]/40 rounded-xl font-mono text-xs uppercase tracking-widest font-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2">
              TRANSMIT SECURE DATA <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>
        </motion.div>

        {/* लाइव系统 मेट्रिक्स */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-[#02333d]/50"
        >
          {[
            { label: 'SEO RATING', val: '100/100', icon: Shield },
            { label: 'CORE SPEED', val: '0.01ms', icon: Activity },
            { label: 'INTERFACE FRAME', val: 'PREMIUM', icon: Cpu },
            { label: 'MARKET ASSET', val: 'ELITE', icon: Terminal }
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div key={i} className="bg-black/40 p-4 border border-[#02333d]/30 rounded-xl backdrop-blur-sm flex flex-col items-center md:items-start group hover:bg-black/60 hover:border-[#00f0ff]/30 transition-all duration-300">
                <div className="flex items-center gap-1 text-[9px] text-slate-500 tracking-widest uppercase">
                  <IconComponent className="w-3 h-3 text-[#00f0ff]/60 group-hover:text-[#00f0ff] transition-colors" />
                  {stat.label}
                </div>
                <div className="text-lg font-black text-white mt-1 group-hover:text-[#00f0ff] transition-colors">{stat.val}</div>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* फुटर */}
      <footer className="relative z-10 w-full max-w-6xl text-center text-[10px] text-slate-600 tracking-widest pt-4 border-t border-[#02333d]/20">
        © {new Date().getFullYear()} NEUROCORE.TECH // ALL RIGHTS RESERVED BY SECURITY PROTOCOL
      </footer>
    </main>
  );
}