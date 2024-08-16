import React from 'react'
import { SolidButton } from '../Button/Button'
import { Slide } from 'react-awesome-reveal'
import { Link } from '@inertiajs/react'; 
const AboutSection = ({ data }) => {
  return (
    <div className="space-y-9 md:px-60 pt-20 px-5 pb-24 bg-yellow-100">
      <Slide bottom>
        <p className="text-4xl text-center font-primary">About  Us</p>

        <p className='text-center whitespace-pre-line'>{data.about_us}</p>
        <div className='flex justify-center gap-1 md:gap-5'>
        <Link download="SJSSAA Constitution" href={"./constitution.pdf" }>
          <SolidButton title={"Constitution"}  additionalClass={` font-primary md:text-2xl px-8 py-1`}/>
        </Link>
        <Link download="strategic-plan" href={"./strategic-plan.pdf" }>
            <SolidButton title={"Strategic Plan"}  additionalClass={` font-primary md:text-2xl px-8 py-1`}/>
        </Link>
        </div>        
      </Slide>

    </div>
  )
}

export default AboutSection
