import React from 'react'
import { SolidButton } from '../Button/Button'

const SetRepsSection = () => {
  return (
    <div className="bg-gray-300 py-32 text-center space-y-10">
       <p className='font-primary text-4xl text-center'>Set Representative</p>
    
        <SolidButton
        href='/excos/set-representative'
        title={'Meet Your Set Representative'}
        additionalClass="px-8 py-3 text-black shadow-xl font-primary"/>
    </div>
  )
}

export default SetRepsSection
