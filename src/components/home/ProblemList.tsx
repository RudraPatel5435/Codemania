'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Brain, CheckCircle2, Circle } from 'lucide-react'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'

export function ProblemList({ problems }: { problems: any[] }) {
  const [filter, setFilter] = useState("ALL");

  const filteredProblems = filter === "ALL"
    ? problems
    : problems.filter(p => p.difficulty === filter);

  // Gradient difficulty badge styles
  const difficultyColors: Record<string, string> = {
    EASY: 'bg-gradient-to-r from-green-500/30 to-green-400/20 text-green-300 border border-green-400/30',
    MEDIUM: 'bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 text-yellow-300 border border-yellow-400/30',
    HARD: 'bg-gradient-to-r from-red-500/30 to-red-400/20 text-red-300 border border-red-400/30'
  }

  return (
    <div className="py-14 px-4 md:px-20 bg-neutral-950">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
        <div className="flex items-center gap-4">
          <Brain size={38} className="text-[#C27BFF]" />
          <span className="text-3xl md:text-4xl font-extrabold text-[#C27BFF] tracking-tight">
            Problem Set
          </span>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className='w-44 bg-neutral-900 border-[#C27BFF]/40 text-white focus:ring-[#C27BFF]'>
            <SelectValue placeholder="All difficulties" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 text-white border-[#C27BFF]/40">
            <SelectItem value="ALL">All Difficulties</SelectItem>
            <SelectItem value="EASY">Easy</SelectItem>
            <SelectItem value="MEDIUM">Medium</SelectItem>
            <SelectItem value="HARD">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-lg shadow-black/50 bg-neutral-900/80 backdrop-blur-md">
        {/* Table header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border-b border-[#C27BFF]/40">
          <span className="uppercase text-sm font-bold text-[#C27BFF] tracking-wider">
            Title
          </span>
          <span className="uppercase text-sm font-bold text-[#C27BFF] tracking-wider">
            Difficulty
          </span>
        </div>
        {/* Problem rows */}
        {filteredProblems.length ? filteredProblems.map((problem, idx) => (
          <Link
            href={`/problemset/${problem.id}`}
            key={problem.id}
            className={`
              flex items-center justify-between px-6 py-4 text-base
              transition-all duration-200 group
              ${idx % 2 === 0 ? 'bg-neutral-900/50' : 'bg-neutral-950/50'}
              hover:bg-[#C27BFF]/10 hover:border-[#C27BFF]/40 hover:shadow-lg hover:shadow-[#C27BFF]/20 border-t border-neutral-800
            `}
          >
            {/* Left: Solved Icon + Title */}
            {/* <div className="flex items-center gap-3">
              {problem.id % 2 !== 0
                ? <CheckCircle2 className="text-green-400" size={22} />
                : <Circle className="text-[#C27BFF]/30" size={22} />
              } */}
              <span className="font-semibold text-white group-hover:text-[#C27BFF] transition-colors">
                {problem.id}. {problem.title}
              </span>
            {/* </div> */}
            {/* Difficulty tag */}
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
          </Link>
        ))
          : <div className="px-6 py-8 text-center text-gray-400">No problems found.</div>
        }
      </div>
    </div>
  );
}