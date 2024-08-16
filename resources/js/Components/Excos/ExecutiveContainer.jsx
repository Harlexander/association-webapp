import { faUserTie, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ExecutiveContainer = ({name, position, bio, mail, img}) => {
  return (
    <div className='md:grid grid-cols-12 gap-10 space-y-5 md:space-y-0'>
        <div className='col-span-3'>
            <img src={img} className='h-60 w-60 object-cover mx-auto rounded-lg md:rounded-full'/>
        </div>
        <div className='md:text-left text-center col-span-9 flex-col flex space-y-2 justify-center'>
            <p className='font-primary text-3xl capitalize'>{name}</p>
            <p className='flex gap-4 justify-center md:justify-start items-center font-nunito uppercase'>
                    <FontAwesomeIcon className='text-sm text-[#800000] hidden md:block' icon={faUserTie} /> <span>{position}</span>
            </p>
            <p className='font-nunito'>{bio}</p>
            {/* <p className='font-nunito flex items-center justify-center md:justify-start gap-3'><FontAwesomeIcon className='text-sm text-[#800000]' icon={faEnvelope}/> <a href={`mailto:${mail}`} className='underline'>{mail}</a></p> */}
        </div>
    </div>
  )
}

export default ExecutiveContainer