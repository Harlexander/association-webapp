import React from 'react'

const ImageContainer = ({src, caption}) => {
  return (
    <div>
      <img
      src={src}
      style={{objectFit : "contain"}}
      className="w-full md:h-80"/>
      <p className='font-nunito'>
        {caption}
      </p>
    </div>
  )
}

export default ImageContainer
