import Link from 'next/link'
import prisma from '../../../lib/prisma'
import React from 'react'
import { Swords } from 'lucide-react'

const DailyChallenges = async () => {
  const weeks = await prisma.week.findMany()
  const todayProblems = await prisma.problem.findMany({
    where: { weekId: weeks[0].id }
  })

  // Gradient difficulty badge styles
  const difficultyColors: Record<string, string> = {
    EASY: 'bg-gradient-to-r from-green-500/30 to-green-400/20 text-green-300 border border-green-400/30',
    MEDIUM: 'bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 text-yellow-300 border border-yellow-400/30',
    HARD: 'bg-gradient-to-r from-red-500/30 to-red-400/20 text-red-300 border border-red-400/30'
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-neutral-950">
      {/* Section Header */}
      <div className="flex items-center gap-4 py-3 px-8 mb-12 rounded-full 
                      bg-neutral-900 border border-[#C27BFF]/50 shadow-lg shadow-[#C27BFF]/20">
        <Swords className="text-[#C27BFF]" size={28} />
        <span className="text-2xl md:text-3xl font-extrabold text-[#C27BFF] whitespace-nowrap tracking-wide">
          Today's Challenges
        </span>
        <Swords className="text-[#C27BFF]" size={28} />
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {todayProblems.map((problem) => (
          <Link
            href={`/problemset/${problem.id}`}
            key={problem.id}
            className={`
              group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 flex flex-col justify-between
              hover:border-[#C27BFF] hover:shadow-lg hover:shadow-[#C27BFF]/30 
              transition-all duration-300 hover:scale-[1.03] backdrop-blur-sm
            `}
          >
            {/* Problem Title */}
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#C27BFF] transition-colors">
              {problem.id}. {problem.title}
            </h3>

            {/* Footer with Difficulty Badge */}
            <div className="flex items-center justify-between mt-auto">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${difficultyColors[problem.difficulty]}`}
              >
                {problem.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default DailyChallenges