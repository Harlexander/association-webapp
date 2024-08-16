import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PageHeader from '../../components/Header/PageHeader'
import IndexNavbar from '../../Components/Navbar/Navbar'

const Index = () => {
  const members = [
    {
      img : "../bot3.jpeg",
      name : "Dr. Akinyele Akinlade",
      position : "Chairman",
      mail : "akin.akinlade@sjssaa.com"
    },
    {
      img : "../bot4.jpeg",
      name : "Mr. Tony Agbuagba",
      position : "secretary",
      mail : "tony.agbuagba@sjssaa.com"
    },
    {
      img : "../bot5.jpeg",
      name : "Mr. Kelechukwu Nwankwo",
      position : "Member",
      mail : ""
    },
    {
      img : "../martins.png",
      name : "Mr. Adewale Martins",
      position : "Member",
      mail : ""
    },
    {
      img : "../brayon.png",
      name : "Mr. Brayon Emeluwa",
      position : "Member",
      mail : ""
    },
    {
      img : "../shosanya.png",
      name : "Mr. Olayiwola Shosanya",
      position : "Member",
      mail : ""
    },
    {
      img : "../bot2.jpeg",
      name : "Mr. John Agwara Onyeukwu",
      position : "Member",
      mail : ""
    },
  ]
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Board Of Trustees"}/>
         

         <div className='w-full md:px-32 py-20'>
          <div className='md:flex space-y-5 md:space-y-0 flex-wrap md:gap-10 justify-between'>
            {
              members.map(({mail, position, name, img}, index) => (
                <TrusteeContainer
                key={index}
                  img={img}
                  mail={mail}
                  name={name}
                  position={position}/>
              ))
            }
          </div>
         </div>
    </div>
  )
}

export default Index


const TrusteeContainer = ({mail, img, name, position}) => {
  return(
    <div className=''>
      <img src={img} className='border-4 border-yellow-300 mx-auto h-64 w-56' style={{objectFit : "cover"}}/>
      <div className='text-center py-5'>
        <p className='capitalize font-montserrat text-2xl'>{name}</p>
        <p className='font-primary capitalize text-xl'>{position}</p>
      {mail &&         <a href={`mailto:${mail}`} className='underline justify-center font-nunito flex gap-2 items-center'><FontAwesomeIcon icon={faEnvelope} className="text-sm text-yellow-500" />{mail}</a>}
      </div>
    </div>
  )
}