import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

const UnderConstruction = () => {
  return (
    <div className='h-200 flex justify-center items-center'>
        <div className='py-20 space-y-7 flex-col justify-center flex'>
            <FontAwesomeIcon className='text-8xl' icon={faWarning} size={40} color={"black"}/>
            <p className='font-primary text-2xl'>This Page is under construction!</p>
        </div>
    </div>
  )
}

export default UnderConstruction