import React from 'react'
import Skeleton from 'react-loading-skeleton'

const DashboardTitle = ({title, subtitle, value, icon, onClick}) => {
  return (
    <section className='space-y-1 flex gap-4 justify-between'>
        <div className='space-y-1'>
        <p className='text-lg sm:text-3xl font-manrope font-semibold'>{title}</p>
        <p className='font-figtree text-xs sm:text-md text-gray-500'>{subtitle || <Skeleton/>}</p>
        </div>
        {
          value && (
            <div className=''>
              <button onClick={onClick} className='flex items-center whitespace-nowrap text-sm sm:text-md gap-1.5 sm:gap-3 font-manrope bg-yellow-400 px-4 sm:px-8 py-2 sm:py-3 rounded shadow-xl text-white'>{value} {icon}</button>
            </div>
          )
        }
  </section>
  )
}

export default DashboardTitle