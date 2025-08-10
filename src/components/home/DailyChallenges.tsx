import prisma from '../../../lib/prisma'
import React from 'react'

const DailyChallenges = async () => {

    const weeks = await prisma.week.findMany()
    // const today = week.filter(problem=> problems.createdAt.toDateString() === new Date().toDateString())
    console.log(weeks)

    return (
        <div className='flex items-center justify-around'>
            <div className="flex flex-col items-center justify-center">
                <span>Previous Week</span>
                <div className=''>

                </div>
                <div className=''>

                </div>
                <div className=''>

                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default DailyChallenges