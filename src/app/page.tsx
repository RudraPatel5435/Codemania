"use client";

import { PricingTable, Protect } from "@clerk/nextjs";
import Link from "next/link";
import {
  Code2,
  Rocket,
  Users,
  Star,
  User,
  CircleQuestionMark,
  LockIcon,
  CrownIcon,
  Twitter,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold mb-8 text-purple-400"
    >
      {children}
    </motion.h2>
  );
}

export default function HomePage() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans">
      {/* === Hero Section === */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 py-24 text-center bg-gradient-to-b from-purple-900/90 to-neutral-950"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-extrabold mb-6 leading-tight"
        >
          Welcome to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Codemania!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Dive into daily coding challenges, compete on leaderboards, unlock badges, and code in-browser with a playful community built just for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <Link
            href="/problemset"
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="border border-purple-500 hover:bg-purple-500 hover:text-white transition text-purple-400 font-semibold px-8 py-4 rounded-lg"
          >
            View Pricing
          </Link>
        </motion.div>
      </motion.section>

      {/* === Statement Section === */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20 text-center">
        <SectionTitle>My Mission</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          I believe coding should be exciting, accessible, and rewarding. Whether you’re a newbie or a seasoned developer, our platform challenges you daily, celebrates every milestone, and connects you with others who share your passion. Let's make learning to code an adventurous journey — one problem at a time!
        </motion.p>
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Rocket size={96} className="text-purple-500 animate-bounce" />
        </motion.div>
      </section>

      {/* === Premium Protected Demo Section === */}

      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <Protect
          plan={"premium"}
          fallback={
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-900/80 to-purple-700/80 border border-purple-400 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex flex-col items-center gap-4">
                <LockIcon className="text-purple-300" size={48} />
                <h3 className="text-2xl font-bold text-white">Premium Exclusive</h3>
                <p className="text-gray-300 max-w-md">
                  Unlock advanced challenges, in-depth tutorials, and personalized mentoring to take your skills to the next level.
                </p>
                <Link
                  href="/pricing"
                  className="mt-4 bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Upgrade to Premium
                </Link>
              </div>
            </motion.div>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900 to-purple-700 border border-purple-400 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center gap-4">
              <CrownIcon size={48} className="text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Welcome, Premium Member!</h3>
              <p className="text-gray-200 max-w-md">
                You have unlocked exclusive Codemania features — advanced challenges, custom tutorials, and one-on-one mentoring.
              </p>
            </div>
          </motion.div>
        </Protect>
      </section>

      {/* === How It Works === */}
      <section className="bg-neutral-900 py-20 px-6 md:px-20">
        <SectionTitle>How It Works</SectionTitle>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          {[{
            icon: <Code2 size={48} className="text-purple-400" />,
            title: "Solve Daily Challenges",
            desc: "Get a fresh coding problem every day designed to boost your skills and keep your problem-solving sharp."
          }, {
            icon: <Users size={48} className="text-purple-400" />,
            title: "Compete & Collaborate",
            desc: "Join leaderboards, share solutions, and connect with coders worldwide in a supportive environment."
          }, {
            icon: <Star size={48} className="text-purple-400" />,
            title: "Earn Badges & Level Up",
            desc: "Hit milestones and collect badges to showcase your progress, expertise, and dedication."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 max-w-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Dummy Stats Section === */}
      {/* <section className="py-20 px-6 md:px-20 text-center text-purple-300 bg-gradient-to-t from-neutral-900/70 to-transparent">
        <SectionTitle>By the Numbers</SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
          className="flex justify-center gap-16 max-w-5xl mx-auto"
        >
          {[
            { label: "Challenges Solved", value: "15,428" },
            { label: "Active Users", value: "3,512" },
            { label: "Problems Available", value: "1,250" },
            { label: "Badges Earned", value: "8,900" },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-5xl font-extrabold text-purple-400">{value}</p>
              <p className="uppercase tracking-widest text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

      {/* === Dummy Testimonials Section === */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <SectionTitle>What Our Codemasters Say</SectionTitle>
        <div className="grid md:grid-cols-3 gap-14 text-gray-300">
          {[{ name: "Luna M.", avatar: "https://i.pravatar.cc/150?u=luna", quote: "Codemania turned my coding practice from repetitive to exciting. Love the daily challenges and community vibes!" },
          { name: "Jamal K.", avatar: "https://i.pravatar.cc/150?u=jamal", quote: "The badges and leaderboard keep me motivated. Plus, the in-browser editor is sleek and smooth." },
          { name: "Ana P.", avatar: "https://i.pravatar.cc/150?u=ana", quote: "I never miss a day thanks to the streak rewards — this app makes coding a habit." }
          ].map(({ name, avatar, quote }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-xl p-6 shadow-lg flex flex-col items-center"
            >
              <img src={avatar} alt={`${name} avatar`} className="rounded-full w-20 h-20 mb-4 ring-2 ring-purple-500" loading="lazy" />
              <p className="italic text-center">“{quote}”</p>
              <p className="mt-4 font-semibold text-purple-400">{name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Dummy Highlights Section === */}
      <section className="px-6 md:px-20 py-20 bg-neutral-900 text-purple-300 max-w-6xl mx-auto rounded-xl shadow-inner">
        <SectionTitle>Highlights & Fun Stuff</SectionTitle>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg"
        >
          <li>🏆 Regular coding contests with prizes and bragging rights</li>
          <li>⚡ Speed coding mode to race against the clock</li>
          <li>👩‍🏫 Mentor program for personal guidance</li>
          <li>🎯 Custom challenges created by the community</li>
          <li>🧩 Puzzle mode with brain teasers and algorithm twists</li>
        </motion.ul>
      </section>

      {/* === Team Section === */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20 text-center">
        <SectionTitle>Meet the Developer</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-16"
        >
          <div className="bg-neutral-900 rounded-xl p-8 shadow-lg w-72">
            <User size={64} className="mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Rudra Patel</h3>
            <p className="text-gray-400 mb-4">Founder, Developer</p>
            <div className="flex justify-center gap-6">
              <a href="https://x.com/RudraPatel5435" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Twitter /></a>
              <a href="https://github.com/RudraPatel5435" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Github /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* === FAQ Section === */}
      <section className="bg-neutral-900 py-20 px-6 md:px-20 max-w-5xl mx-auto rounded-xl shadow-inner">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="space-y-6 text-gray-300 text-left">
          {[{
            question: "How often are new challenges added?",
            answer: "We release fresh daily challenges every day at midnight UTC, so you can practice consistently."
          }, {
            question: "Can I compete with friends?",
            answer: "Yes! Join our community leaderboards..."
          }, {
            question: "Is there a free plan?",
            answer: "Absolutely..."
          }, {
            question: "What languages does Codemania support?",
            answer: "We support popular languages..."
          }, {
            question: "How does the scoring system work?",
            answer: "Points are awarded per problem..."
          }].map(({ question, answer }, idx) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-purple-400 mb-1 flex items-center gap-2">
                <CircleQuestionMark /> {question}
              </h4>
              <p>{answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Footer === */}
      <footer className="mt-10 bg-neutral-900 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Codemania. All rights reserved.
      </footer>
    </div>
  );
}
