'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HeroSection() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-black pt-20">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg">
              <span className="gradient-text font-semibold">✨ Welcome to SoundHub</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent leading-tight"
          >
            Experience Premium
            <br />
            Audio Excellence
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Discover world-class music gear and audio equipment. Crafted for professionals, loved by enthusiasts.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/products">
              <button className="btn-primary group inline-flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="btn-secondary group inline-flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            variants={item}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-16 relative"
          >
            <div className="glass-effect rounded-2xl p-8 mx-auto max-w-2xl">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-accent/20 mb-4">
                    <Play className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-gray-300">Premium Audio Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
