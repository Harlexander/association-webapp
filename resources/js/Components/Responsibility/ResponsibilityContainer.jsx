import React from 'react'

const ResponsibilityContainer = ({ src, title, content}) => {
  return (
    <div className='space-y-2 md:space-y-5'>
        <img src={src} className='w-full'/>

        <p className='font-primary text-2xl'>{title}</p>

        <p className='font-nunito'></p>
    </div>
  )
}

export default ResponsibilityContainer
