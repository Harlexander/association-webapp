import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import UnderConstruction from '../components/Header/UnderConstruction'
import IndexNavbar from '../Components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Contact"}/>
         
         
         <div className='w-full md:px-32 px-5 py-10 md:py-20'>
          <div className='md:grid p-5 md:p-10 grid-cols-2  bg-white'>
            <div className='col-1 font-nunito space-y-3'>
              <p className='text-2xl md:text-3xl font- font-montserrat'>Contact Information</p>
              <p className='font-nunito font-bold'>Reach out to anyone on the SJSSAA contact email with your questions. We are here to help.</p>

              <p className='py-4'>If you have any queries or questions about St. Joseph Secondary School Alumni Association, please email us or call the secretary at +234 810 3562 7282. We would get back to you as soon as possible. Issues are only addressed to on weekdays only.</p>
             
             <div>
              <p className='text-lg font-bold'>Monday Udo</p>
              <p> General Secretary</p>
              {/* <a href='mailto:israelolusegun.alika@sjssaa.com	' className='text-blue-700 underline'>israelolusegun.alika@sjssaa.com	</a> */}
             </div>
            
             <div>
              <p className='text-lg font-bold'>Fatiu Bello Olaitan</p>
              <p>Public Relations Officer</p>
              {/* <a href='mailto:nwankantta@sjssaa.com	' className='text-blue-700 underline'>nwankantta@sjssaa.com	</a> */}
             </div>
             <div>
              <p className='text-lg font-bold'>Prof. Godwin-Charles Ogbeide</p>
              <p>Director of Membership</p>
              {/* <a href='mailto:dom@sjssaa.com' className='text-blue-700 underline'>dom@sjssaa.com</a> */}
             </div>
            </div>
            <div className='col-1'>
              <img src='contact.jpeg' 
              className='w-full'/>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Index