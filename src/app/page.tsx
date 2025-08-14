'use client'

import React from "react";
import { motion } from "framer-motion";
import { Code2, Calendar, Zap, Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold mb-8 text-purple-400 text-center"
    >
      {children}
    </motion.h2>
  );
}

export default function HomePage() {
  return (
    <div className="relative bg-neutral-950 text-white min-h-screen antialiased">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-20 py-32 text-center bg-gradient-to-b from-purple-900/30 to-neutral-950 relative overflow-hidden min-h-[80vh] flex flex-col justify-center"
      >
        {/* Floating fun elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-8 top-20 text-6xl opacity-20 pointer-events-none select-none"
        >
          💻
        </motion.div>

        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute right-16 top-32 text-5xl opacity-20 pointer-events-none select-none"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute left-1/4 bottom-32 text-4xl opacity-15 pointer-events-none select-none"
        >
          ⚡
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 bottom-40 text-3xl opacity-15 pointer-events-none select-none"
        >
          🎯
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight relative z-10"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Codemania
          </span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="inline-block ml-4 text-4xl"
          >
            🎪
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 relative z-10 font-light leading-relaxed"
        >
          Daily coding challenges that don't make you want to
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
            className="inline-block text-red-400 font-semibold mx-2"
          >
            quit
          </motion.span>
          <span className="text-5xl">🙃</span>
          <br />
          <span className="text-purple-300 font-semibold">Simple. Fun. Addictive.</span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 4 }}
            className="inline-block ml-2 text-3xl"
          >
            ✨
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-white font-bold px-12 py-5 rounded-xl shadow-2xl text-xl relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <Link href='/problemset' className="relative flex items-center gap-3">
              Start Coding Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </Link>
          </motion.button>
        </motion.div>

        {/* Fun subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 text-gray-400 text-lg relative z-10"
        >
          Warning: May cause sudden bursts of confidence
          <motion.span
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            className="inline-block ml-2"
          >
            😎
          </motion.span>
        </motion.div>
      </motion.section>

      {/* WHAT TO DO HERE SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <SectionTitle>What You'll Find Here</SectionTitle>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">AI-Generated Problems</h3>
            <p className="text-gray-400 leading-relaxed">
              Fresh coding challenges generated by AI every week. No recycled problems, just pure brain exercise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Python & JavaScript</h3>
            <p className="text-gray-400 leading-relaxed">
              Solve in your favorite language. Start with Python or JavaScript, more languages coming soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Weekly Updates</h3>
            <p className="text-gray-400 leading-relaxed">
              New problems drop every week. Open any problem, code your solution, level up your skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DAILY STREAK SECTION */}
      {/* <section className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900/80 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30"
          >
            <div className="text-6xl mb-6">🔥</div>
            <h2 className="text-4xl font-extrabold mb-6 text-purple-400">
              Build Your Streak
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Solve just <span className="text-purple-300 font-semibold">one problem daily</span> and watch your streak grow.
              Consistency beats intensity every time.
            </p>
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400">1</div>
                <div className="text-sm text-gray-400">Problem/Day</div>
              </div>
              <div className="text-purple-400 text-2xl">→</div>
              <div>
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400">Streak Power</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* MEET THE GUY SECTION */}
      <section className="max-w-4xl mx-auto px-6 md:px-20 py-20 text-center">
        <SectionTitle>Meet the Guy</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 rounded-3xl p-10 shadow-2xl border border-purple-500/20"
        >
          <img
            src="/me.jpg"
            alt="Rudra Patel avatar"
            className="rounded-full w-32 h-32 mx-auto mb-6 ring-4 ring-purple-600 shadow-xl"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold text-purple-300 mb-2">Rudra Patel</h3>
          <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Founder & Chief Tinkerer</p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Builds things that slightly overcomplicate simple tasks. Drinks too much brain juice.
            Made Codemania because coding felt lonely sometimes.
          </p>

          <div className="border-t border-neutral-800 pt-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Got questions, feedback, or just want to say hi? I'd love to hear from you.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/RudraPatel5435"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110"
            >
              <Twitter size={24} className="text-purple-400" />
            </a>
            <a
              href="https://github.com/RudraPatel5435"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-purple-400" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900/80 py-12 px-6 md:px-20 text-center border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Codemania — Made with questionable optimism and lots of stress.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}