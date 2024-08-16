import React from 'react'
import { SolidButton } from '../Button/Button'
import ImageContainer from './ImageContainer'
import { Fade } from 'react-awesome-reveal'

const GallerySection = ({ data: { gallery } }) => {
  return (
    <div className="flex flex-col space-y-14 items-center justify-center  pt-20 pb-24 bg-white">
        <Fade>
             <p className="text-3xl md:text-4xl font-primary px-10 mx-auto text-center">Gallery and Photo News</p>
        </Fade>

        <div className='md:grid grid-cols-3 gap-2 md:px-14 px-5'>
            {
                gallery.map((image) => (
                    <div className='col-1 md:pt-20'>
                        <ImageContainer
                        src={image.images[0]?.image_path}
                        caption={image.name}
                        />
                    </div>
                ))
            }
        </div>

        <SolidButton
        title={"View All"}
        href={"/gallery"}
        additionalClass="font-primary text-black text-2xl px-10"/>
    </div>
  )
}

export default GallerySection
