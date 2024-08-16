import React from 'react'

const ImageContainer = ({src, caption}) => {
  return (
    <div>
      <img
      src={src}
      className="w-full md:h-80 object-cover"/>
      <p className='font-nunito capitalize'>
        {caption}
      </p>
    </div>
  )
}

export default ImageContainer
