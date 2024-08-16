import { Link } from '@inertiajs/react'; import React from 'react'

export const OutlineButton = ({title,href="",  additionalClass}) => {
  return (
    <Link href={href}>
      <button className={`border-2 border-[#800000] hover:bg-[#800000] hover:text-white px-8 py-1 text-[#800000] ${additionalClass}`}>
        {title}
      </button>   
    </Link>

  )
}
export const SolidButton = ({href = "", onClick, title, additionalClass}) => {
  return (
  <Link href={href}>
      <button onClick={onClick} className={`bg-[#800000]  px-8 py-1 text-white ${additionalClass}`}>
        {title}
      </button>
  </Link>
  )
}
