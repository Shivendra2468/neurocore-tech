'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function SorryAnya() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-6 text-center font-sans">
      
      {/* फ्लोटिंग हार्ट्स */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: 0.6 }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.4 }}
            className="absolute text-pink-400"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {!accepted ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white max-w-lg"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Heart className="w-20 h-20 text-pink-500 mx-auto mb-6" fill="currentColor" />
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-black text-rose-600 mb-4">Sorry, Anya! 🧸</h1>
            <p className="text-rose-800 text-lg md:text-xl font-medium mb-8 leading-relaxed">
              पता है मैंने गलती की है, और आपका नाराज़ होना भी बनता है। <br />
              लेकिन आप जानती हो ना कि मेरे लिए आप सब कुछ हो? <br />
              बिना आपके, मेरी दुनिया एकदम खाली है। <br />
              प्लीज़ मान जाओ ना?
            </p>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setAccepted(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Forgive me? ❤️
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/90 p-12 rounded-3xl shadow-2xl max-w-lg"
          >
            <Sparkles className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl font-black text-pink-600 mb-4">I Love You Anya! ✨</h1>
            <p className="text-pink-800 text-xl font-bold">
              शुक्रिया मुझे माफ करने के लिए! <br />
              आप दुनिया की सबसे बेस्ट गर्ल हो। 🧸❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}