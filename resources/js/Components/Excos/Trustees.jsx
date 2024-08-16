import React from 'react'
import { Link } from '@inertiajs/react'; 
const Trustees = () => {
  return (
    <div className='md:px-40 px-5 py-24 space-y-20 bg-yellow-400'> 
        <p className='font-primary text-4xl text-center'>Board Of Trustees</p>

        <div className='flex flex-col md:flex-row justify-between text-center'>
            <div>
                <img src='bot3.jpeg' style={{ objectFit : "contain"}} className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl'>Dr. Akinyele Akinlade</p>
                    <p className='text-xl font-nunito'>Chairman</p>
                </div>
            </div>
            <div>
                <img src='bot4.jpeg' style={{ objectFit : "contain"}} className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Mr Tony Agbugba</p>
                    <p className='text-xl font-nunito'>Secretary</p>
                </div>
            </div>
            <div>
                <img src='bot5.jpeg' style={{ objectFit : "contain"}} className='object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full'/>
                <div className='text-center py-7'>
                    <p className='font-primary text-3xl '>Mr. Kelechukwu Nwankwo</p>
                    <p className='text-xl font-nunito'>Member</p>
                </div>
            </div>
        </div>

        <div className='flex  justify-center'>
            <Link href="/excos/board-of-trustees">
            <button className='font-primary px-7 text-2xl py-3 bg-white text-black shadow-xl hover:bg-pry hover:text-white hover:border-2'>
                Meet All Trustees
            </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Trustees
