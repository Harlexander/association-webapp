import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SolidButton } from '../Button/Button'
import ExecutiveContainer from './ExecutiveContainer'
import { executiveData } from '../../pages/excos/national-executives'

const Executive = () => {
  return (
    <div className="relative bg-yellow-50 px-5 py-20">
            <div className="md:text-left text-center py-20 font-primary">
                <p className="flex-1 h-full text-center text-3xl leading-10 text-3xl md:text-5xl">National Executives</p>
            </div>

        <div className='w-full md:px-32 space-y-12'>
            {
              executiveData.map((executive, index) => index <= 2 && (
                <>
                <ExecutiveContainer 
                    {...executive}
                    img={executive.img ? executive.img : '/user.webp'}
                   />

                  <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>
                </>
              ))
            }            
        </div>

        <div className='flex justify-center py-10'>
            <SolidButton
            href='/excos/national-executives'
            title={"Meet All Excos"}
            additionalClass="px-6 md:text-2xl shadow-xl text-black font-primary"/>
        </div>
    </div>
  )
}

export default Executive
