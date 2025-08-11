import DailyChallenges from '@/components/home/DailyChallenges'
import React from 'react'
import prisma from '../../../lib/prisma'
import Link from 'next/link'
import { Brain } from 'lucide-react'

const page = async () => {
  const allProblems = await prisma.problem.findMany({})
  return (
    <div className='flex flex-col gap-20'>
      <DailyChallenges />
      <div className='rounded-xl px-40'>
        <span className='text-3xl mb-10 flex items-center gap-3 text-[lightblue]'><Brain size={30} color='lightblue' /> Problem Set</span>
        {
          allProblems.map(problem => (
            <Link href={`/problemset/${problem.id}`} key={problem.id} className={`p-4 flex items-center justify-between rounded-lg ${problem.id%2==0?'bg-neutral-700/40': ''}`}>
              <h2>{problem.id}. {problem.title}</h2>
              <p className={`lowercase font-medium ${problem.difficulty=="EASY"?'text-green-500':problem.difficulty=="MEDIUM"?'text-yellow-500': 'text-red-500'}`}>{problem.difficulty}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default page