'use client'

import React from "react";
import Link from "next/link";
import { Protect } from "@clerk/nextjs";
import {
  Code2,
  Users,
  Star,
  Lock,
  Crown,
  Twitter,
  Github,
  CircleQuestionMark,
} from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

type Stat = { label: string; target: number; suffix?: string };
type TeamMember = { name: string; role: string; avatar: string; bio: string; socials?: { twitter?: string; github?: string } };
type FAQItem = { q: string; a: string };

export default function HomePage() {
  const statList: Stat[] = [
    { label: "Challenges Solved", target: 15428 },
    { label: "Active Codemasters", target: 3512 },
    { label: "Problems in Vault", target: 1250 },
    { label: "Badges Earned", target: 8900 },
  ];

  const team: TeamMember[] = [
    {
      name: "Rudra Patel",
      role: "Founder & Chief Tinkerer",
      avatar: "https://avatars.githubusercontent.com/u/178592190?v=4",
      bio: "Builds things that slightly overcomplicate simple tasks. Drinks too much chai.",
      socials: { twitter: "https://x.com/RudraPatel5435", github: "https://github.com/RudraPatel5435" },
    }
  ];

  const faqs: FAQItem[] = [
    { q: "How often are new challenges added?", a: "Every single day — even on weekends. Even on pizza Fridays. Challenge goes live at 00:00 UTC." },
    { q: "Is there a free plan?", a: "Yes! Free plan includes daily challenges, community leaderboards, and most of the good vibes." },
    { q: "Can I compete with friends?", a: "Absolutely — create groups, challenge friends, and humble-brag on leaderboards." },
    { q: "What languages are supported?", a: "Popular languages: JS/TS, Python, C, C++, Java — and sneaky support for other JVM-based languages." },
    { q: "How does scoring work?", a: "Points depend on difficulty, speed, and style points (style points are made up but felt strongly)." },
  ];
  

  return (
    <div className="relative bg-neutral-950 text-white min-h-screen antialiased">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-20 py-24 text-center bg-gradient-to-b from-purple-900/90 to-neutral-950 relative overflow-hidden"
      >
        {/* floating playful bits using framer-motion for smooth animation */}
        <motion.div
          aria-hidden
          initial={{ x: -40, y: -10, opacity: 0 }}
          animate={{ x: -10, y: 0, opacity: 0.08 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
          className="absolute left-8 top-20 text-6xl pointer-events-none select-none"
        >
          💻
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ x: 40, y: 10, opacity: 0 }}
          animate={{ x: 10, y: 0, opacity: 0.08 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
          className="absolute right-16 top-36 text-5xl pointer-events-none select-none"
        >
          🚀
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight relative z-10"
        >
          Welcome to {" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Codemania
          </span>{" "}
          <span className="inline-block ml-2" aria-hidden>🎯</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 relative z-10"
        >
          Daily micro-challenges, silly badges, and a community that gets your debugging memes.
          Solve, learn, and flex — one tiny victory at a time.
        </motion.p>

        <div className="flex justify-center gap-6 relative z-10">
          <Link href="/problemset" className="relative">
            <motion.p
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              <span>🚀</span> Get Started
            </motion.p>
          </Link>

          <Link href="/pricing" className="relative">
            <motion.p whileHover={{ y: -3 }} className="border border-purple-500 hover:bg-purple-500 hover:text-white transition text-purple-300 font-semibold px-7 py-3 rounded-lg flex items-center gap-2">
              <span>💰</span> View Pricing
            </motion.p>
          </Link>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-8 relative z-10">
          <p className="text-sm text-gray-400">Tip: Streaks are addictive. Use them wisely.</p>
        </motion.div>
      </motion.section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-16 text-center">
        <SectionTitle>The Strange & Honest Origin Story</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          I built Codemania because coding felt lonely and boring sometimes. So I made a place where challenges are tiny enough to do daily, and the community is weirdly supportive. Expect puns, slightly questionable variable names, and lots of tiny wins.
        </motion.p>
      </section>

      {/* STATS */}
      <section className="py-12 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <motion.div className="p-6 rounded-xl bg-neutral-900 shadow-lg w-44">
                <p className="text-3xl font-extrabold text-purple-400">{statList[0].target.toLocaleString()}</p>
                <p className="uppercase text-xs tracking-widest text-gray-400">Challenges Solved</p>
              </motion.div>
              <motion.div className="p-6 rounded-xl bg-neutral-900 shadow-lg w-44">
                <p className="text-3xl font-extrabold text-purple-400">{statList[1].target.toLocaleString()}</p>
                <p className="uppercase text-xs tracking-widest text-gray-400">Active Codemasters</p>
              </motion.div>
              <motion.div className="p-6 rounded-xl bg-neutral-900 shadow-lg w-44">
                <p className="text-3xl font-extrabold text-purple-400">{statList[2].target.toLocaleString()}</p>
                <p className="uppercase text-xs tracking-widest text-gray-400">Problems in Vault</p>
              </motion.div>
              <motion.div className="p-6 rounded-xl bg-neutral-900 shadow-lg w-44">
                <p className="text-3xl font-extrabold text-purple-400">{statList[3].target.toLocaleString()}</p>
                <p className="uppercase text-xs tracking-widest text-gray-400">Badges Earned</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <Protect
          plan={"premium"}
          fallback={
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#2A1746] via-[#3B2070] to-[#2A1746] border border-[#C27BFF]/50 rounded-2xl p-10 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex flex-col items-center gap-5">
                <Lock size={48} className="text-[#C27BFF]" />
                <h3 className="text-3xl font-extrabold text-white">
                  🚪 VIP Lounge
                </h3>
                <p className="text-neutral-300 max-w-md leading-relaxed">
                  Spicy challenges, mentor sessions, and the <span className="text-[#C27BFF] font-semibold">secret stash</span> of very, very good problems.
                </p>
                <Link href="/pricing" className="mt-6 w-full sm:w-auto">
                  <motion.p
                    whileHover={{ scale: 1.04 }}
                    className="inline-block bg-[#C27BFF] hover:bg-[#d29cff] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#C27BFF]/30 transition-all"
                  >
                    Upgrade to Premium
                  </motion.p>
                </Link>
              </div>
            </motion.div>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2A1746] via-[#3B2070] to-[#2A1746] border border-[#C27BFF]/50 p-10 rounded-2xl shadow-2xl backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-5">
              <Crown size={48} className="text-yellow-400" />
              <h3 className="text-3xl font-extrabold text-white">
                🎉 Welcome, Premium Member!
              </h3>
              <p className="text-neutral-300 max-w-md leading-relaxed">
                Advanced problem sets, tailor-made tutorials, and mentors who explain things
                like you're <span className="italic">definitely not</span> secretly a spaceship.
              </p>
            </div>
          </motion.div>
        </Protect>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-neutral-900 py-20 px-6 md:px-20">
        <SectionTitle>The Game Plan</SectionTitle>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          {[
            { icon: <Code2 size={48} className="text-purple-400" />, title: "Solve Daily Quests", desc: "Short, fun puzzles for consistent progress." },
            { icon: <Users size={48} className="text-purple-400" />, title: "Compete & Team Up", desc: "Leaderboards, squads, and friendly trash talk." },
            { icon: <Star size={48} className="text-purple-400" />, title: "Collect Cool Badges", desc: "Bragging rights and tiny digital trophies." },
          ].map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }} className="flex flex-col items-center gap-4">
              <motion.div whileHover={{ y: -6 }} className="rounded-full p-3 bg-neutral-900/40">
                {it.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="text-gray-400 max-w-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <SectionTitle>What Our Codemasters Say</SectionTitle>
        <div className="grid md:grid-cols-3 gap-14 text-gray-300">
          {[
            { name: "Luna M.", avatar: "https://i.pravatar.cc/150?u=luna", quote: "Codemania turned my daily grind into a fun habit. I actually look forward to my challenges now!" },
            { name: "Jamal K.", avatar: "https://i.pravatar.cc/150?u=jamal", quote: "Leaderboards make me competitive, but in a good way. And the in-browser editor is smooth as butter." },
            { name: "Ana P.", avatar: "https://i.pravatar.cc/150?u=ana", quote: "Streak rewards are evil... in the best possible way. I can't skip a day!" },
          ].map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.14, duration: 0.5 }} className="bg-neutral-900 rounded-xl p-6 shadow-lg flex flex-col items-center">
              <img src={t.avatar} alt={`${t.name} avatar`} className="rounded-full w-20 h-20 mb-4 ring-2 ring-purple-500" loading="lazy" />
              <p className="italic text-center">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-purple-400">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-20 text-center">
        <SectionTitle>Meet the Guy</SectionTitle>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map(m => (
            <motion.div key={m.name} className="bg-neutral-900 rounded-2xl p-6 shadow-lg w-72">
              <img src={m.avatar} alt={`${m.name} avatar`} className="rounded-full w-24 h-24 mx-auto mb-3 ring-4 ring-purple-600" loading="lazy" />
              <h4 className="text-lg font-semibold text-purple-300">{m.name}</h4>
              <p className="text-xs uppercase tracking-wider text-gray-400">{m.role}</p>
              <p className="mt-3 text-gray-300 text-sm">{m.bio}</p>
              <div className="flex justify-center gap-4 mt-4">
                {m.socials?.twitter && <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Twitter /></a>}
                {m.socials?.github && <a href={m.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Github /></a>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-900 py-16 px-6 md:px-20 max-w-5xl mx-auto rounded-xl shadow-lg border border-neutral-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Frequently Asked <span className="text-[#C27BFF]">& Some Silly</span> Questions
        </h1>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <Accordion
              key={idx}
              type="single"
              collapsible
              className="bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger className="px-4 py-3 hover:bg-neutral-700/50 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <CircleQuestionMark className="text-[#C27BFF] shrink-0" />
                    <span className="font-medium">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-neutral-300 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 bg-neutral-900 py-8 text-center text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <p>© {new Date().getFullYear()} Codemania — Made with questionable optimism.</p>
          <p className="mt-2">P.S. Want a dark-mode toggle or confetti when you finish a challenge? Say the word.</p>
        </div>
      </footer>
    </div>
  );
}
