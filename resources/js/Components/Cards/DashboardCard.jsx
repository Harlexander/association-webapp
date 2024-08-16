import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

const DashboardCard = ({title, icon, value}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg w-full p-3 sm:p-4 space-y-4'>
        <div className='flex items-center justify-between'>
            <p className='font-manrope text-sm sm:text-md'>{title}</p>
            <div className='rounded-full p-2 shadow bg-yellow-400'>
               {icon}
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <p className='font-figtree font-bold text-2xl'>{value}</p>
            {/* <a href="" className='font-figtree text-sm '>View Profile</a> */}
        </div>
    </div>
  )
}

export default DashboardCard