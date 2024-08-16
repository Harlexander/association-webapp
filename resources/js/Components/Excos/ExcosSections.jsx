import React from 'react'
import { SolidButton } from '../Button/Button'
import Executive from './Executive'
import SetRepsSection from './SetRepsSection'
import Trustees from './Trustees'

const ExcosSections = () => {
  return (
    <div>
        <Executive/>
        <Trustees/>
        <SetRepsSection/>
    </div>
  )
}

export default ExcosSections
