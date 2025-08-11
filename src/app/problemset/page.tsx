import DailyChallenges from '@/components/home/DailyChallenges'
import React from 'react'
import prisma from '../../../lib/prisma'
import { ProblemList } from './ProblemList'

const Page = async () => {
  const allProblems = await prisma.problem.findMany({});
  return (
    <div className='flex flex-col'>
      <DailyChallenges />
      <ProblemList problems={allProblems} />
    </div>
  )
}

export default Page
