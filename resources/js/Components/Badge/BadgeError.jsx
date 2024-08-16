import React from 'react'
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'

const BadgeError = ({message}) => {
  return (
    <div className='px-4 py-3 text-white font-figtree text-sm rounded-lg flex gap-3 items-center rounded bg-red-600'>
        <div className='p-2 bg-red-800 rounded-lg'>
            <ExclamationTriangleIcon className='h-5'/>
        </div>
        <span>
            {message}
        </span>
    </div>
  )
}

export default BadgeError