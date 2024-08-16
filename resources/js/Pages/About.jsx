import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import IndexNavbar from '../Components/Navbar/Navbar'

const Index = ({about}) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"About SJSSAA"}/>
         
         <div className='px-32 py-20'>
          <p className="md:text-xl whitespace-pre-line font-montserrat leading-relaxed text-center">
          {about}
          </p>
         </div>
    </div>
  )
}

export default Index