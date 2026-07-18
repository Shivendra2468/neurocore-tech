'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TermIcon, Shield, Activity, Cpu, ArrowUpRight, Radio, Database, Zap, Layers, Send, HelpCircle, Box, Server, Battery, Wifi, WifiOff } from 'lucide-react';

export default function Home() {
  const [logText, setLogText] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('---%');
  const [isOnline, setIsOnline] = useState(true);
  
  // 🧠 इंटरैक्टिव टर्मिनल स्टेट्स
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'NEUROCORE INTERACTIVE KERNEL V2.0',
    'ENTER "help" FOR AVAILABLE MAIN PASSWAY COMMANDS.',
    ''
  ]);
  const historyEndRef = useRef<HTMLDivElement>(null);

  const logs = [
    'INIT CORE SECURE PROTOCOL...',
    'CONNECTING TO SHIVAM RAJPOOT MAIN PASSWAY...',
    'LOADING KERNEL LAYERS [SUCCESS]',
    'SEO MASTERING MAP INITIALIZED...',
    'STATUS: 100% SECURE & ACTIVE.'
  ];

  useEffect(() => {
    // 🔮 live terminal logging effect
    let currentLogIndex = 0;
    let currentCharIndex = 0;
    let currentDisplay = '';

    const typeLogs = () => {
      if (currentLogIndex < logs.length) {
        if (currentCharIndex < logs[currentLogIndex].length) {
          currentDisplay += logs[currentLogIndex][currentCharIndex];
          setLogText(currentDisplay + '_');
          currentCharIndex++;
          setTimeout(typeLogs, 20);
        } else {
          currentDisplay += '\n';
          currentLogIndex++;
          currentCharIndex = 0;
          setTimeout(typeLogs, 300);
        }
      } else {
        setLogText(currentDisplay + ' ✓ CORE SYSTEM LOGGER ONLINE.');
      }
    };
    typeLogs();

    // 📊 Battery Tracker
    if (typeof window !== 'undefined' && navigator.getBattery) {
      navigator.getBattery().then((battery: any) => {
        setBatteryLevel(`${Math.round(battery.level * 100)}%`);
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(`${Math.round(battery.level * 100)}%`);
        });
      });
    }

    // 🌐 Network Tracker
    setIsOnline(navigator.onLine);
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // ऑटो-स्क्रॉल टर्मिनल
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // 🛠️ टर्मिनल कमांड्स हैंडलर
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [`shivam-mainframe@root:~$ ${terminalInput}`];

    if (cmd === 'help') {
      response.push(
        '  help   - Display available database nodes.',
        '  shivam - Unlock Administrator clearance & core details.',
        '  clear  - Purge terminal display logs.'
      );
    } else if (cmd === 'shivam') {
      response.push(
        '  [ACCESS GRANTED - CLEARANCE LEVEL: GODMODE]',
        '  ----------------------------------------',
        '  ADMIN: MR. SHIVAM RAJPOOT',
        '  ROLE: OWNER & DIRECTED OVERLORD OF NEUROCORE',
        '  STATUS: ACTIVE MATRIX CONTROL PROCESSED',
        '  ASSETS: VALUATION ELITE SECURE LAYER'
      );
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      response.push(`  Command not found: "${terminalInput}". Type "help" for system maps.`);
    }

    setTerminalHistory(prev => [...prev, ...response, '']);
    setTerminalInput('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <main className="relative min-h-screen bg-[#01060a] text-[#00f0ff] font-mono overflow-x-hidden flex flex-col items-center justify-between p-4 md:p-8 select-none">
      
      {/* 🎬 4K सिनेमैटिक बैकग्राउंड वीडियो */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-25">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-23091-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🎞️ 90s विंटेज फिल्म ग्रेन */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* निऑन ग्रिड ओवरले */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#02131e_1px,transparent_1px),linear-gradient(to_bottom,#02131e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-10" />

      {/* 🌅 वॉर्म गोल्डन ऑवर और होलोग्राफिक ब्लर */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#ffaa00] to-[#7000ff] rounded-full blur-[140px] opacity-20 pointer-events-none z-10" />
      <div className="absolute top-[30%] right-[-5%] w-[350px] h-[350px] bg-gradient-to-br from-[#ffc800] to-[#ff007b] rounded-full blur-[130px] opacity-10 pointer-events-none z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#00f0ff] to-[#7000ff] rounded-full blur-[150px] opacity-10 pointer-events-none z-10" />

      {/* 🛸 1. प्रीमियम होलोग्राफिक नेविगेशन बार */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 w-full max-w-6xl flex items-center justify-between p-4 border border-[#02333d]/60 bg-black/50 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffaa00] to-[#7000ff] flex items-center justify-center shadow-[0_0_15px_rgba(255,170,0,0.4)]">
            <Cpu className="w-4 h-4 text-black font-bold animate-pulse" />
          </div>
          <span className="text-white font-black tracking-widest text-sm group-hover:text-[#00f0ff] transition-colors duration-300">
            NEUROCORE<span className="text-[#ffaa00]">.TECH</span>
          </span>
        </div>

        {/* 📊 लाइव साइबर HUD नोड */}
        <div className="flex items-center gap-4 border border-[#02333d] px-4 py-1.5 rounded-xl bg-black/40 backdrop-blur-md text-[11px] font-bold text-slate-400">
          <div className="flex items-center gap-1.5 hover:text-[#ffaa00] transition-colors">
            <Battery className="w-3.5 h-3.5 text-[#ffaa00]" />
            <span>HUD BATT: <span className="text-white">{batteryLevel}</span></span>
          </div>
          <div className="w-[1px] h-3 bg-[#02333d]" />
          <div className="flex items-center gap-1.5">
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                <span className="text-green-500">SYS_ONLINE</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-red-500" />
                <span className="text-red-500">SYS_DISCONNECT</span>
              </>
            )}
          </div>
        </div>

        <button className="hidden md:flex items-center gap-1.5 border border-[#ffaa00]/40 px-4 py-1.5 rounded-lg bg-black/20 text-xs text-[#ffaa00] hover:bg-[#ffaa00] hover:text-black hover:shadow-[0_0_20px_rgba(255,170,0,0.4)] transition-all duration-300 font-bold">
          LIVE NODES <Radio className="w-3 h-3 text-red-500 animate-ping" />
        </button>
      </motion.header>

      {/* 🛸 2. मुख्य कंटेनर */}
      <div className="relative z-20 w-full max-w-5xl flex flex-col items-center text-center my-auto space-y-12 pt-16 pb-16">
        
        <div className="space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="border border-[#ffaa00]/30 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#ffaa00] shadow-[0_0_15px_rgba(255,170,0,0.15)] flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffaa00] animate-ping" />
            ADMINISTRATOR: MR. SHIVAM RAJPOOT SYSTEM IS ONLINE
          </motion.div>

          {/* ग्लिच हेडिंग */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ 
              skewX: [0, -10, 10, -5, 5, 0],
              filter: ["none", "hue-rotate(90deg)", "hue-rotate(180deg)", "none"]
            }}
            className="text-5xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-white via-[#00f0ff] to-[#ffaa00] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.25)] uppercase select-none cursor-matrix transition-all duration-100"
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

        {/* 🧠 ⚡ 2. फुली वर्किंग इंटरैक्टिव हैकर टर्मिनल */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-3xl p-5 border border-[#02333d] bg-black/95 rounded-xl shadow-[0_0_35px_rgba(0,0,0,0.9)] text-left"
        >
          <div className="flex items-center justify-between border-b border-[#02333d]/60 pb-2 mb-3">
            <div className="flex items-center gap-2 text-[10px] tracking-widest font-bold text-[#ffaa00]">
              <TermIcon className="w-3.5 h-3.5 text-[#00f0ff]" /> SHIVAM_MAINFRAME_ROOT_TERMINAL
            </div>
            <span className="text-[9px] text-green-500 font-bold tracking-widest animate-pulse">● INTERACTIVE NODE</span>
          </div>

          {/* हिस्ट्री लॉग्स */}
          <div className="text-xs md:text-sm text-[#00f0ff] font-mono leading-relaxed h-[150px] overflow-y-auto mb-2 space-y-1 scrollbar-thin scrollbar-thumb-[#02333d]">
            {terminalHistory.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap font-bold">{line}</div>
            ))}
            <div ref={historyEndRef} />
          </div>

          {/* कमांड इनपुट फ़ील्ड */}
          <form onSubmit={handleCommandSubmit} className="flex items-center text-xs md:text-sm font-mono border-t border-[#02333d]/40 pt-2 text-white">
            <span className="text-[#ffaa00] shrink-0 font-bold mr-2">shivam-mainframe@root:~$</span>
            <input 
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type your command..."
              className="w-full bg-transparent outline-none text-[#00f0ff] placeholder-slate-700 font-bold"
              autoFocus
            />
          </form>
        </motion.div>

        {/* SYSTEM STATUS MAIN LOGGER */}
        <div className="w-full max-w-3xl text-left border border-[#02333d]/40 p-3 bg-black/40 rounded-lg text-[10px] text-slate-500 font-bold">
          <span className="text-[#00f0ff] font-black">LOG STREAM:</span> {logText}
        </div>

        {/* प्रीमियम ग्लासमोर्फिज्म कार्ड */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ x: [0, -4, 4, -2, 2, 0] }}
          className="relative w-full max-w-3xl p-6 md:p-8 border border-[#02333d] bg-gradient-to-b from-black/70 to-[#000c14]/95 backdrop-blur-xl rounded-2xl shadow-[inset_0_0_30px_rgba(0,240,255,0.05),0_20px_50px_rgba(0,0,0,0.9)] flex flex-col sm:flex-row gap-6 items-center justify-between text-left group hover:border-[#ffaa00]/40 transition-all duration-300"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#ffaa00] font-bold">
              <TermIcon className="w-3 h-3 text-[#00f0ff]" /> NEURAL INTERFACE TERMINAL
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Quantum Web Architecture</h3>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              डायनेमिक सर्वर-साइड ऑप्टिमाइज़ेशन (SSR) के साथ इंटीग्रेटेड, जो आपकी साइट के हर एक कंपोनेंट को गूगल क्रॉलर के लिए मख्खन की तरह स्मूथ और सुपर-फास्ट बनाता है।
            </p>
          </div>
          <button className="relative px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#ffaa00] text-black font-black uppercase tracking-wider rounded-xl text-xs shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(255,170,0,0.6)] hover:scale-105 active:scale-[0.95] transition-all duration-300 flex items-center justify-center gap-2 shrink-0">
            CONNECT TO CORE <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
          </button>
        </motion.div>

        {/* THE MILLION DOLLAR FEATURES NODE GRID */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-4">
          {[
            { title: "Neural Synergy Engine", desc: "Aigocy-inspired glass layers executing autonomous operations in real-time.", icon: Database, tag: "CORE MATRIX" },
            { title: "Blazing Data Nodes", desc: "Zero server latency architecture processing matrix visual components at 0.01ms.", icon: Zap, tag: "LIGHTNING SSR" },
            { title: "Cryptographic Shield", desc: "Military-grade structural encapsulation guarding the mainframe from layout errors.", icon: Layers, tag: "EXTREME SECURITY" }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="p-6 border border-[#02333d]/60 bg-gradient-to-br from-black/90 to-[#000c14]/95 rounded-xl text-left shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-between group hover:border-[#ffaa00]/50 hover:shadow-[0_0_20px_rgba(255,170,0,0.1)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff] group-hover:bg-[#ffaa00] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-bold tracking-widest">{feature.tag}</span>
                  </div>
                  <h4 className="text-white font-bold text-base tracking-tight group-hover:text-[#ffaa00] transition-colors">{feature.title}</h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{feature.desc}</p>
                </div>
                <div className="pt-6 flex items-center gap-1 text-[10px] text-[#ffaa00] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ACTIVATE NODE <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ⚡ 3. DYNAMIC TECH STACK NODE (3D SPINNING ICONS) */}
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-4xl text-left pt-12 space-y-6">
          <div className="flex flex-col space-y-2 border-l-2 border-[#ffaa00] pl-4">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Mainframe Tech Stack</h2>
            <p className="text-xs text-slate-400 font-sans">इस हाई-परफॉर्मेंस सिस्टम को power देने वाले कोर इंजनों की 3D एनिमेटेड मैट्रिक्स ग्रिड।</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full [perspective:1000px]">
            {[
              { name: "Next.js 15", tech: "Framework Engine", svg: <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.3 127.3L67.8 52.2H52.2V127.8H66.1V69.7L118.6 135.9C121.7 133.3 124.6 130.4 127.3 127.3Z" fill="currentColor"/><path d="M116.1 52.2V107.8L129.4 124.7V52.2H116.1Z" fill="currentColor"/><circle cx="90" cy="90" r="85" stroke="currentColor" strokeWidth="10"/></svg> },
              { name: "React 19", tech: "UI Architecture", svg: <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="10" ry="25" stroke="currentColor" strokeWidth="5" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="10" ry="25" stroke="currentColor" strokeWidth="5" transform="rotate(90 50 50)"/><ellipse cx="50" cy="50" rx="10" ry="25" stroke="currentColor" strokeWidth="5" transform="rotate(150 50 50)"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg> },
              { name: "Tailwind CSS", tech: "Neon Visual Styling", svg: <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50C25 35 40 30 50 40C60 50 65 55 75 50C85 45 85 60 75 65C65 70 60 65 50 55C40 45 25 40 25 50Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Framer Motion", tech: "3D Animation Matrix", svg: <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L50 50L80 20H20Z" fill="currentColor"/><path d="M20 50L50 80L80 50H20Z" fill="currentColor"/><path d="M20 80H80L50 50L20 80Z" fill="currentColor"/></svg> }
            ].map((stack, idx) => (
              <div key={idx} className="p-4 border border-[#02333d]/40 bg-black/40 rounded-xl flex items-center gap-3 group cursor-pointer hover:border-[#ffaa00]/50 hover:bg-black/80 transition-all duration-300">
                <motion.div whileHover={{ rotateY: 360, scale: 1.15 }} transition={{ duration: 0.8, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }} className="p-2.5 rounded-lg bg-[#ffaa00]/10 border border-[#ffaa00]/30 text-[#ffaa00] group-hover:border-[#00f0ff]/50 group-hover:bg-[#00f0ff]/10 shrink-0 flex items-center justify-center">
                  {stack.svg}
                </motion.div>
                <div>
                  <h5 className="text-white text-xs font-bold tracking-tight group-hover:text-[#ffaa00] transition-colors">{stack.name}</h5>
                  <p className="text-[10px] text-slate-500 font-sans mt-0.5">{stack.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THE ACTIVE MAINFRAME PROJECTS SHOP */}
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-4xl text-left pt-12 space-y-6">
          <div className="flex flex-col space-y-2 border-l-2 border-[#00f0ff] pl-4">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Active Deep-Tech Projects</h2>
            <p className="text-xs text-slate-400 font-sans">लाइव सर्वर कर्नल पर चल रहे हमारे सबसे एडवांस हाई-एंड सिस्टम्स का रियल-टाइम प्रोग्रेस डेटा।</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              { name: "Project CyberShield V2", progress: "94%", desc: "Autonomous firewall intercepting rogue data packets globally.", icon: Server, color: "from-[#00f0ff] to-[#ffaa00]" },
              { name: "Hyperion UI Mainframe", progress: "87%", desc: "Elite glassmorphic designs executing with pure GPU acceleration.", icon: Box, color: "from-[#ff007b] to-[#00f0ff]" }
            ].map((proj, i) => {
              const ProjIcon = proj.icon;
              return (
                <div key={i} className="p-6 border border-[#02333d]/40 bg-black/60 backdrop-blur-md rounded-xl space-y-4 group hover:border-[#ffaa00]/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ProjIcon className="w-5 h-5 text-[#ffaa00] group-hover:text-[#00f0ff] transition-colors" />
                      <h4 className="text-white font-bold text-sm">{proj.name}</h4>
                    </div>
                    <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/5 px-2 py-0.5 rounded border border-[#00f0ff]/20">{proj.progress}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{proj.desc}</p>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#02333d]">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: proj.progress }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} className={`h-full bg-gradient-to-r ${proj.color} rounded-full`} />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* फुटर */}
      <footer className="relative z-10 w-full max-w-6xl text-center text-[10px] text-slate-600 tracking-widest pt-4 border-t border-[#02333d]/20">
        © {new Date().getFullYear()} NEUROCORE.TECH // ALL RIGHTS RESERVED BY SECURITY PROTOCOL
      </footer>
    </main>
  );
}