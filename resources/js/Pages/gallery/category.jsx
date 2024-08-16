import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/Header/PageHeader'
import IndexNavbar from '../../Components/Navbar/Navbar'

const Index = ({ name, images }) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={name}/>
         
        <div className='md:py-20 md:px-28 px-5 py-8'>
            <div className='grid md:grid-cols-3 gap-1 '>
                {
                images.map((image, index) => (
                        <img
                        key={index}
                        className='col-1 w-full md:max-h-[24rem]'
                        style={{objectFit : "cover"}}
                        src={image.image_path}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Index
