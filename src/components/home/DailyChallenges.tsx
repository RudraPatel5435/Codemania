import Link from 'next/link'
import prisma from '../../../lib/prisma'
import React from 'react'

const DailyChallenges = async () => {

    const weeks = await prisma.week.findMany()
    const weekId = weeks.filter(problem => problem.createdAt.toDateString() === new Date().toDateString())
    const todayProblems = await prisma.problem.findMany({
        where: { weekId: weekId[0].id }
    })
    console.log(todayProblems)

    return (
        <div className="flex flex-col items-center justify-center px-30">
            <span className='text-2xl p-3 font-medium'>Today's Challenge</span>
            <div className='flex justify-between gap-5'>
                {
                    todayProblems.map((problem) => (
                        <Link href={`/${problem.id}`} key={problem.id} className={`w-1/3 border-4 p-4 rounded-xl flex flex-col justify-between ${problem.difficulty == 'EASY' ? 'border-green-500 bg-green-100' : problem.difficulty === 'MEDIUM' ? 'border-yellow-500 bg-yellow-100' : 'border-red-500 bg-red-100'}`}>
                            <h3 className="text-xl font-bold">{problem.title}</h3>
                            <p className="text-sm text-gray-500 flex-end">Difficulty: <b className={`${problem.difficulty == 'EASY' ? 'text-green-600' : problem.difficulty === 'MEDIUM' ? 'text-yellow-600' : 'text-red-600'}`}>{problem.difficulty}</b></p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default DailyChallenges