import React from 'react'
import IndexNavbar from '@/Components/Navbar/Navbar'
import PageHeader from '@/Components/Header/PageHeader'
import ExecutiveContainer from '@/Components/Excos/ExecutiveContainer';

export const executiveData = [
  {
    name: 'Kolawole Banire',
    img: '/president.jpg',
    bio: 'I am interested in rendering service for our great school first or with the first; I believe my experience coupled with my interpersonal abilities would make me a strong fit for this position.',
    mail: 'kolawole.banire@sjssaa.com',
    position: 'President',
  },
  {
    name: 'Israel Olusegun Alika',
    img: '../general secretary.png',
    bio: 'A team work aim to design, build and develop the association for the progress, fairness, justice and benefits of all SJSSA members.',
    mail: 'lanreare@sjssaa.com',
    position: 'Vice President Nigeria',
  },
  {
    name: 'Jacob Babatunde Ajayi',
    img: '../vp.png',
    bio: 'I am an outstanding team player and possess good communication skills. I am hardworking, very well organized, and self-confident.',
    mail: 'jb.ajayi@sjssaa.com',
    position: 'Vice President Europe and Asia',
  },
  {
    name: 'Solomon Oyedeji',
    img: '/vp-america.jpg',
    bio: 'Passion to serve SJSSAA',
    mail: 'oorekoya@sjssaa.com',
    position: 'Vice President America',
  },
  {
    name: 'Monday Udo',
    img: '/general.sec.jpg',
    bio: '',
    mail: 'israelolusegun.alika@sjssaa.com',
    position: 'General Secretary',
  },
  {
    name: 'Dr. Emmanuel Ehiwe',
    img: '../asst.sec.europe & asia.png',
    bio: 'Passion to serve SJSSAA',
    mail: 'eehiwe@sjssaa.com',
    position: 'Asst. Sect Europe and Asia',
  },
  {
    name: 'Anthony Ebhojaye',
    img: '/asst.sec.north.jpg',
    bio: 'Passion to serve SJSSAA',
    mail: 'anthony.ebhojaye@sjssaa.com',
    position: 'Asst. Sect North and South America',
  },
  {
    name: 'Akeem Ajayi',
    img: '../financial secretary.png',
    bio: 'I am an Accountant by training and I have also worked in the banking sector for 19 years. I am honest, hardworking and trustworthy and can be relied upon to do what is expected of me every-time',
    mail: 'akeem.ajayi@sjssaa.com',
    position: 'Financial Secretary',
  },
  {
    name: 'Edward Dunkwu',
    img: '../treasurer.png',
    bio: 'Passion to serve SJSSAA',
    mail: 'edunkwu@sjssaa.com',
    position: 'Treasurer',
  },
  {
    name: 'Olanrewaju Dossouyovo',
    img: '/social.sect.jpg',
    bio: 'Passion to serve SJSSAA',
    mail: 'ola.dossouyovo@sjssaa.com',
    position: 'Social Secretary',
  },
  {
    name: 'Fatiu Bello Olaitan',
    img: '../assistant pro.png',
    bio: 'Passion to serve SJSSAA',
    mail: 'fatiu.bello@sjssaa.com',
    position: 'Public Relations Officer',
  },
  {
    name: 'Jolaosho Adewale',
    img: '/asst.fin.jpg',
    bio: 'Passion to serve SJSSAA',
    mail: 'jolaoshoadewale@sjssaa.com',
    position: 'Asst. Fin. Secretary',
  },
  {
    name: 'Samuel Afekhade',
    img: '/asst.social.jpg',
    bio: 'Passion to serve SJSSAA',
    mail: 'samuel.afe@sjssaa.com',
    position: 'Asst. Social Secretary',
  },
  {
    name: 'Aboyewa Okonedo',
    img: '',
    bio: 'Passion to serve SJSSAA',
    mail: 'aboyewa.okonedo@sjssaa.com',
    position: 'Asst. General Secretary',
  },
];


const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"National Executives"}/>
         
         
         <div className='w-full md:px-32 px-5 space-y-12 py-20'>
           {
              executiveData.map((executive, index) => (
                <>
                   <ExecutiveContainer
                      name={executive.name}
                      img={executive.img ? executive.img : "/user.webp"}
                      bio={executive.bio}
                      mail={executive.mail}
                      position={executive.position}/>
                      
                      <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>
                </>
              ))
           }
        </div>

    </div>
  )
}

export default Index