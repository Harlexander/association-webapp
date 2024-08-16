import React from 'react'
import { SolidButton } from '../Button/Button'
import ImageContainer from './ImageContainer'
import { Fade } from 'react-awesome-reveal'

const GallerySection = () => {
  return (
    <div className="flex flex-col space-y-14 items-center justify-center  pt-20 pb-24 bg-white">
        <Fade>
             <p className="text-3xl md:text-4xl font-primary px-10 mx-auto text-center">Gallery and Photo News</p>
        </Fade>

        <div className='md:grid grid-cols-3 gap-2 md:px-14 px-5'>
            <div className='col-1 md:pt-20'>
                <ImageContainer
                src={"gallery1.jpeg"}
                caption={"The presentation of talking drums"}
                />
            </div>
            <div className='col-1'>
                <ImageContainer
                src={"1986donations (4).jpg"}
                caption={"1986 set donations"}
                />
                <ImageContainer
                src={"principal (3).jpg"}
                caption={"1986 Set Celebrating the first principal birthday"}
                />
            </div>
            <div className='col-1 md:pt-28'>
                <ImageContainer
                src={"sjss1986 (2).jpg"}
                caption={"Socials and networking reception"}
                />
            </div>
        </div>

        <SolidButton
        title={"View All"}
        href={"/gallery"}
        additionalClass="font-primary text-black text-2xl px-10"/>
    </div>
  )
}

export default GallerySection
