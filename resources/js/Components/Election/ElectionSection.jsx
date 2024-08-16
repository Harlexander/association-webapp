import { Link } from '@inertiajs/react'; import React from 'react'

const ElectionSection = () => {
  return (
    <div className='py-10 py-20 flex justify-center items-center bg-yellow-500'>
        <div className='text-center space-y-10'>
            <p className='font-primary text-white text-4xl'>Executive Election</p>
            <p className='px-5 sm:w-3/5 font-figtree text-gray-100 sm:text-lg mx-auto'>Our success story is shaped by the vision and leadership of our dedicated executive leaders. Together, they bring a wealth of experience, innovation, and strategic thinking that drives our association forward. Get to know the individuals who are showing interest in steering the ship and leading us to new horizons:</p>

            <Link href={"/election"}>
                <button className='px-10 py-2 bg-[#800000] text-xl text-white font-primary'>Meet The Candidates</button>        
            </Link>
        </div>
    </div>
  )
}

export default ElectionSection