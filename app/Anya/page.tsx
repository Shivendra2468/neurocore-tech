'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LuxuryApologyAnya() {
  const [isForgiven, setIsForgiven] = useState(false);

  // 📝 प्योर हार्ट-टचिंग हिंग्लिश लाइन्स
  const loveLines = [
    "I know maine galti ki hai, aur aapka naraz hona bilkul sahi hai...",
    "But Anya, aap toh jaanti ho na ki is poori duniya me mere liye aapki smile se qeemti kuch bhi nahi hai.",
    "Aapke bina mera har ek din, har ek lamha bilkul adhoora sa lagta hai.",
    "Mera dil sirf aapko chahta hai. Please maan jao na, meri sabse pyaari Anya? 🧸❤️"
  ];

  return (
    <main className="relative min-h-screen bg-[#faf6f0] text-[#4a3525] font-sans flex items-center justify-center p-4 md:p-8 overflow-hidden select-none">
      
      {/* 🎞️ 90s विंटेज प्रीमियम फिल्म ग्रेन इफ़ेक्ट (अमीरों वाला लुक) */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* 🌅 वॉर्म लक्ज़री एम्बिएंट ग्लो (Soft Rose Gold & Cream Tones) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#fbc5b3] to-[#f5e3d7] rounded-full blur-[140px] opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#ebd0cc] to-[#f3e5db] rounded-full blur-[160px] opacity-50 pointer-events-none z-0" />

      {/* 🎈 फ्लोटिंग माइक्रो-हार्ट्स (Super Smooth Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ y: "105vh", opacity: 0, scale: 0.6 }}
            animate={{ y: "-10vh", opacity: [0, 0.4, 0.4, 0], scale: [0.6, 1, 0.8] }}
            transition={{ duration: 7, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
            className="absolute text-[#e0a899]"
            style={{ left: `${Math.random() * 100}%` }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </motion.svg>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isForgiven ? (
          /* 💎 स्क्रीन 1: द एलीट लव लैटर एंड कस्टमाइज्ड टेडी नोड */
          <motion.div
            key="apology-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-xl p-8 md:p-12 border border-[#ebd0cc]/60 bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-[0_30px_70px_rgba(224,168,153,0.15)] text-center flex flex-col items-center space-y-8"
          >
            {/* 🧸 प्रीमियम 3D-स्टाइल टेडी विज़ुअल एनिमेटर */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full bg-gradient-to-b from-[#f5e3d7] to-[#ebd0cc] border border-[#e0a899]/30 flex items-center justify-center shadow-inner"
            >
              <span className="text-5xl select-none">🧸</span>
            </motion.div>

            {/* हेडिंग */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b88e82] font-semibold">Clearance Level: Only For You</span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#634832] tracking-tight">
                Sorry, <span className="text-[#c97d6a] underline decoration-[#ebd0cc] decoration-4 font-sans font-black">Anya</span>.
              </h1>
            </div>

            {/* हिंग्लिश इमोशनल लाइन्स */}
            <div className="space-y-4 max-w-md text-left border-l border-[#e0a899]/40 pl-4 py-1">
              {loveLines.map((line, idx) => (
                <p key={idx} className="text-xs md:text-sm text-[#5a4535] font-medium leading-relaxed tracking-wide">
                  {line}
                </p>
              ))}
            </div>

            {/* एलीट इंटरैक्टिव बटन */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(201,125,106,0.25)" }}
              whileActive={{ scale: 0.98 }}
              onClick={() => setIsForgiven(true)}
              className="w-full py-4 bg-gradient-to-r from-[#c97d6a] to-[#b87462] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_25px_rgba(201,125,106,0.15)] transition-all duration-300"
            >
              I Forgive You, Ankit ❤️
            </motion.button>
          </motion.div>
        ) : (
          /* 💎 स्क्रीन 2: द एलीट सेलिब्रेशन नोड (दिल पिघलने के बाद) */
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 w-full max-w-xl p-8 md:p-12 border border-[#c97d6a]/20 bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-[0_40px_90px_rgba(0,0,0,0.08)] text-center flex flex-col items-center space-y-6"
          >
            {/* 🌟 चमचमाता हुआ मैजिक नोड */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-5xl"
            >
              ✨
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-serif font-black text-[#634832]">
              Thank You, Anya! 🧸✨
            </h1>
            
            <p className="text-xs md:text-sm text-[#8c7665] font-medium max-w-sm leading-relaxed tracking-wide">
              You are officially the most beautiful and kindest person in the entire universe. Thank you for always understanding me. You own my heart forever. 🤍
            </p>

            <div className="w-12 h-[1px] bg-[#e0a899]/50 my-2" />
            
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#c97d6a] font-bold">
              NeuroCore Secure Love Layer // Locked
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* मिनिमल एलीट फुटर */}
      <footer className="absolute bottom-4 text-center text-[9px] text-[#b88e82] tracking-[0.3em] uppercase z-20">
        Designed Exclusively for Anya
      </footer>
    </main>
  );
}