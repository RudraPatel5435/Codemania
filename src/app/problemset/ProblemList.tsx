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

  const difficultyColors: Record<string, string> = {
    EASY: 'bg-green-500/20 text-green-400 border border-green-500/30',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    HARD: 'bg-red-500/20 text-red-400 border border-red-500/30'
  }

  return (
    <div className="py-10 px-3 md:px-32 bg-neutral-950 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-7 gap-5">
        <span className="flex items-center gap-3 text-3xl font-extrabold text-purple-400 tracking-tight">
          <Brain size={34} className="text-purple-400" />
          Problem Set
        </span>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className='w-44 bg-neutral-900 border-purple-400/40 text-white focus:ring-purple-400'>
            <SelectValue placeholder="All difficulties" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 text-white border-purple-400/40">
            <SelectItem value="ALL">All Difficulties</SelectItem>
            <SelectItem value="EASY">Easy</SelectItem>
            <SelectItem value="MEDIUM">Medium</SelectItem>
            <SelectItem value="HARD">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-lg bg-neutral-900/80">
        {/* Table header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 border-b border-purple-400/40">
          <span className="uppercase text-xs md:text-sm font-bold text-purple-400 tracking-wider">Title</span>
          <span className="uppercase text-xs md:text-sm font-bold text-purple-400 tracking-wider">Difficulty</span>
        </div>
        {/* Problem rows */}
        {filteredProblems.length ? filteredProblems.map((problem, idx) => (
          <Link
            href={`/problemset/${problem.id}`}
            key={problem.id}
            className={`flex items-center justify-between px-6 py-4 text-base
              transition-all duration-150 group
              ${idx % 2 === 0 ? 'bg-neutral-900/40' : 'bg-neutral-950/40'}
              hover:bg-purple-900/40 hover:shadow-md border-t border-neutral-800
            `}
          >
            {/* Left: Solved Icon + Title */}
            <div className="flex items-center gap-3">
              {problem.id % 2 !== 0
                ? <CheckCircle2 className="text-green-400" size={22} />
                : <Circle className="text-purple-400/30" size={22} />
              }
              <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                {problem.id}. {problem.title}
              </span>
            </div>
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
