import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../Components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader title={"Director of Membership"}/>

        <div className='md:px-28 p-5 md:py-20'>
          <div className='md:grid grid-cols-3 gap-10'>
            <div className='col-1'>
              <img src='../webmaster.jpeg' className='rounded-full '/>
            </div>
            <div className='col-span-2 flex-col flex justify-center'>
              <p className='text-2xl font-montserrat'>Prof. Godwin-Charles Ogbeide</p>
              <div className='font-nunito flex gap-3 items-center py-2'>
                <FontAwesomeIcon icon={faEnvelope} className="text-sm"/> 
                <a href='mailto:webmaster.sjssaa.com' className='underline'>dom@sjssaa.com</a>
              </div>
              <p className='font-nunito py-10'>Director of Membership: Managing membership data, promoting membership benefits and developments, and maintaining and updating this website. If you have any questions or suggestions, contact him via email, and he will attend to you as soon as possible.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index