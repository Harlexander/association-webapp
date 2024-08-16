import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { imgHost } from '../../lib/imgHost'
import moment from 'moment/moment'

const NewsCard = ({admin, title, content, image, name, created_at, id, deleteNews}) => {
  return (
    <div className='bg-white rounded-lg shadow flex-col flex'>
        <img src={image} alt="" className='rounded-t-lg w-full h-64 object-cover' />

        <div className='p-4 rounded z-20 grow flex flex-col gap-5'>
            <p className='font-manrope font-semibold text-lg'>{title}</p>
           
           <div className="flex items-center gap-4">
                <div className='font-figtree text-xs flex items-center gap-2'>
                    <CalendarDaysIcon className='h-4 text-yellow-400'/>
                    {moment(created_at).format("DD MMMM, YYYY")}
                </div>
                <div className='font-figtree text-xs flex items-center gap-2'>
                    <UserIcon className='h-4 text-yellow-400'/>
                    {name}
                </div>
           </div>
           
            <p className='font-figtree whitespace-pre-line text-sm'>
                {content.slice(0, 250)}...
            </p>

            <div className='flex items-center gap-4 text-white'>
                <button className='font-figtree text-sm px-6 bg-yellow-500 py-1.5 rounded'>View All</button>

                {
                    admin && (<button onClick={deleteNews} className='font-figtree text-sm bg-red-500 px-6 py-1.5 rounded'>Delete</button>)
                }                
            </div>
        </div>
    </div>
  )
}

export default NewsCard