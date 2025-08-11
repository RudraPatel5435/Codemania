import Link from 'next/link'
import prisma from '../../../lib/prisma'
import React from 'react'
import { Swords } from 'lucide-react'

const DailyChallenges = async () => {
  const weeks = await prisma.week.findMany()
  const weekId = weeks
  const todayProblems = await prisma.problem.findMany({
    where: { weekId: weekId[0].id }
  })

  // Difficulty badge styles (dark translucent chips with subtle borders)
  const difficultyColors: Record<string, string> = {
    EASY: 'bg-green-500/20 text-green-400 border border-green-500/30',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    HARD: 'bg-red-500/20 text-red-400 border border-red-500/30'
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 bg-neutral-950">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 py-2 px-6 mb-10 rounded-full 
                      bg-neutral-900 border border-purple-400 shadow-lg">
        <Swords className="text-purple-400" size={26} />
        <span className="text-2xl font-bold text-purple-400 whitespace-nowrap">
          Today's Challenges
        </span>
        <Swords className="text-purple-400" size={26} />
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {todayProblems.map((problem) => (
          <Link
            href={`/problemset/${problem.id}`}
            key={problem.id}
            className={`
              group rounded-xl border border-neutral-800 bg-neutral-900 p-5 flex flex-col justify-between
              hover:border-purple-400 hover:shadow-purple-500/20 
              transition-all duration-200 hover:scale-[1.02]
            `}
          >
            {/* Problem Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
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
    </div>
  )
}

export default DailyChallenges
