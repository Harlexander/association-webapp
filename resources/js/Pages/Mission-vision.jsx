import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import IndexNavbar from '../Components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
        title={"Our Mission and Vision"}/>
         
         
         <div className='w-full md:px-32 px-5 space-y-12 py-20'>
            <div className='grid grid-cols-2'>
                <div className='col-1 space-y-10'>
                    <div className=''>
                        <p className='font-primary text-xl md:text-3xl '>Our Vision</p>
                        <p className='font-nunito py-2'>The vision statement of SJSSAA is to support, connect, and celebrate SJSS and its alumni.</p>                        
                    </div>

                    <div className=''>
                        <p className='font-primary text-xl md:text-3xl '>Our Mission</p>
                        <p className='font-nunito py-2'>The mission statement of SJSSAA is to advance SJSS and its alumni in the pursuit of excellence in education, goodwill in the community, and well-being of its members.</p>
                    </div>
                </div>
                <div className='col-1 md:p-5 p-10'>
                    <img className='w-full' src='https://t4.ftcdn.net/jpg/03/55/77/83/360_F_355778316_mliYw0x3dSmsL93gvabMeEdsIv89010d.jpg'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Index