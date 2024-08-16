import { Link } from '@inertiajs/react'
import React from 'react'

const FooterSection = ({ data }) => {
  return (
    <>
    <div className='bg-yellow-500 px-5 md:px-32 py-24'>
        <div className="md:grid grid-cols-12">
            <div className='col-span-6'>
                <div className='flex gap-4'>
                    <img src='logo.png' className='h-24'/>
                    <img src='logo-1.png' className='h-24'/>
                </div>
                <p className='uppercase font-italic text-md text-white font-primary'>Motto : First or with the First</p>
                <div className='md:w-3/4 py-4 text-gray-900'>
                    <p className='font-primary text-2xl text-black mb-4'>St. Joseph Secondary School Alumni Association</p>
                    <p className='font-montserrat'>{data.footerText}</p>
                </div>
            </div>
            <div className='col-span-6 flex  md:flex-row flex-col gap-4 md:gap-0 justify-between mt-10 md:mt-24 py-4'>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Contact Us</p>
                    <ul className='text-gray-900 font-montserrat text-sm space-y-2'>
                        <li><a href={`tel:${data.mobile1}`} className='hover:text-yellow-900 hover:font-bold'>{ data.mobile1 }</a></li>
                        <li><a href={`tel:${data.mobile2}`} className='hover:text-yellow-900 hover:font-bold'>{ data.mobile2 }</a></li>
                        <li><a href={`mailto:${ data.email1 }`} className='hover:text-yellow-900 hover:font-bold'>{ data.email1 }</a></li>
                        <li><a href={`mailto:${ data.email2 }`} className='hover:text-yellow-900 hover:font-bold'>{ data.email2 }</a></li>
                        {/* <li><a href='mailto:nwankantta@sjssaa.com' className='hover:text-yellow-900 hover:font-bold'>nwankantta@sjssaa.com</a></li> */}
                    </ul>
                </div>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Quick Links</p>
                    <ul className='text-gray-800 font-montserrat text-sm space-y-2'>
                        <li><Link href='/'><a className='hover:text-yellow-900 hover:font-bold'>Home</a></Link></li>
                        <li><Link href='/about'><a className='hover:text-yellow-900 hover:font-bold'>About Sjsss</a></Link></li>
                        <li><Link href='/gallery'><a className='hover:text-yellow-900 hover:font-bold'>Gallery</a></Link></li>
                        <li><Link href='/excos/national-executives'><a className='hover:text-yellow-900 hover:font-bold'>Executives</a></Link></li>
                        <li><Link href='/members'><a className='hover:text-yellow-900 hover:font-bold'>Search Member</a></Link></li>
                    </ul>
                </div>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Follow Us</p>
                    <ul className='text-gray-800 font-montserrat text-sm space-y-2'>
                        {data.facebook && <li><a href={data.facebook} className='hover:text-yellow-900 hover:font-bold'>Facebook</a></li>}
                        {data.instagram && <li><a href={data.instagram} className='hover:text-yellow-900 hover:font-bold'>Instagram</a></li>}
                        {data.linkedin && <li><a href={data.linkedin} className='hover:text-yellow-900 hover:font-bold'>Linkedin</a></li>}
                        {data.youtube && <li><a href={data.youtube} className='hover:text-yellow-900 hover:font-bold'>Youtube</a></li>}
                    </ul>
                    <div className='flex gap-2 py-6'>
                        <div className='bg-white p-2'>
                           <img src='mobile.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                            <img src='whatsapp.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                             <img src='instagram.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                             <img src='facebook.svg' className='h-6'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center py-5 font-montserrat bg-yellow-500 bg-opacity-70'>
        <a href='https://www.peachy.com.ng'>Designed by Peachy &copy;</a>
    </div>
    </>
  )
}

export default FooterSection