import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='bg-[#800000] text-white py-12 md:py-20 flex justify-center items-center'>
        <div>
            <p className='font-primary capitalize text-center text-3xl md:text-5xl'>{title}</p>
        </div>
    </div>
  )
}

export default PageHeader