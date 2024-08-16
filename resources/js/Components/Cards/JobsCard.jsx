import { BuildingOfficeIcon, CalendarDaysIcon, UserIcon, LinkIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import moment from 'moment'
import React from 'react'
import ReadMore from '../Text/ReadMore'

const JobsCard = ({admin, title, org, exp_date, created_at, description, contact, link}) => {
  return (
    <div className='bg-white rounded flex flex-col justify-between p-4 gap-4 shadow'>
      <div className='space-y-4'>
          <p className='font-manrope font-semibold capitalize'>{title}</p>

          <div className='font-figtree'>
              <p className='text-xs flex items-center gap-2'><BuildingOfficeIcon className='h-4 text-yellow-500'/> {org}</p>
          </div>

          {
            admin && (
              <div className='font-figtree'>
                  <p className='text-xs flex items-center gap-2'><UserIcon className='h-4 text-yellow-500'/>Dunkwu Alexander</p>
              </div>            
            )
          }

          <div className='font-figtree space-y-1'>
              <p className='text-xs'>Posted: <span className='font-semibold'>{moment.duration(moment().diff(created_at)).humanize()} ago</span></p>
          </div>

          <div className='font-figtree space-y-1'>
              <p className='text-xs font-semibold'>Job Description: </p>
              <p className='text-sm text-gray-800'>
                <ReadMore
                text={description}
                maxLength={150}/>
              </p>
          </div>        
      </div>

      <div className='space-y-4'>
      <div className='font-figtree space-y-1 flex items-center justify-between '>
            <small className='text-xs font-semibold flex items-center gap-1'><CalendarDaysIcon className='h-4 text-yellow-500'/>  Closing Date</small>
            <p className='text-xs flex items-center gap-2'>{exp_date ? exp_date : "No date given"}</p>
        </div>
        
        <div className='flex gap-4 items-center'>
          {
            contact && (
              <a href={link} className='font-figtree text-xs flex items-center justify-center gap-3 text-center bg-pry text-white w-full py-1.5 rounded-lg'>Apply <LinkIcon className="h-4"/></a>
            )
          }

          {
            contact && (
              <a href={`mailto:${contact}`} className='font-figtree text-xs flex items-center justify-center gap-3 text-center border-2 border-pry text-pry w-full py-1 rounded-lg'>Contact <EnvelopeIcon className='h-4'/></a>
            )
          }

          {
            admin && (
              <a className='font-figtree text-xs flex items-center justify-center gap-3text-center bg-red-500 text-white w-full py-1 rounded-lg'>Delete</a>
            )
          }
        </div>   
      </div>   
    </div>
  )
}

export default JobsCard