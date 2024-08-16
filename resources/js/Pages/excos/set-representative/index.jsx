import React from 'react'
import PageHeader from '../../../components/Header/PageHeader'
import IndexNavbar from '../../../Components/Navbar/Navbar'
import { Link } from '@inertiajs/react'; 
const setReps = [
  {
    set : '1986',
    reps : [
      {
        pos : "chairman",
        name : "Dr. Akinyele Akinlade"
      },
      {
        pos : "Vice Chairman, Nigeria",
        name : "Kolawole Banire"
      },
      {
        pos : "Vice Chairman, Europe/Asia",
        name : "Hakeem Kehinde"
      },
      {
        pos : "Vice Chairman, North/South America",
        name : "Prof Godwin Ogbeide"
      },
      {
        pos : "Secretary",
        name : "Patrick Iloba"
      },
      {
        pos : "Assistant Secretary",
        name : "Adewunmi Kuye"
      },
      {
        pos : "Treasurer",
        name : "Kelechukwu Nwankwo"
      },
      {
        pos : "Social Secretary",
        name : "Waheed Majolagbe"
      },
      {
        pos : "Publicity Secretary",
        name : "Victor Nwanze"
      }
    ]
  },
  {
    set : '1987',
    reps : [
      {
        pos : "chairman",
        name : "Tony Agbugba"
      },
      {
        pos : "Vice Chairman1",
        name : "Andrew Venn"
      },
      {
        pos : "Vice Chairman2",
        name : "Alika Isreal John"
      },
      {
        pos : "Secretary",
        name : "Akeem Ajayi"
      },
      {
        pos : "Assistant Secretary",
        name : "Felix Emueze"
      },
      {
        pos : "Treasurer",
        name : "KAduragbemi Olurunseun"
      },
      {
        pos : "Social Secretary",
        name : "Seye Ajayi"
      },
    ]
  },
  {
    set : '1990',
    reps : [
      {
        pos : "chairman",
        name : "Kelechukwu Onuobia"
      },
      {
        pos : "Vice Chairman, Nigeria",
        name : "Francis Amedrovi"
      },
      {
        pos : "Vice Chairman, Dispora",
        name : "Anthony Asekome"
      },
      {
        pos : "Secretary",
        name : "Sikiru Tiamiyu "
      },
      {
        pos : "Assistant Secretary",
        name : "Opeyemi Adefila"
      },
      {
        pos : "Treasurer",
        name : "Chidi Emmanuel"
      },
      {
        pos : "Financial Secretary",
        name : "Adetunji Adeniyi"
      },
      {
        pos : "Social Secretary",
        name : "Calis Albert"
      },
      {
        pos : "Asst. Social Secretary",
        name : "Tope Ogungbesan"
      },
      {
        pos : "Publicity Secretary",
        name : "Cyril Ibe"
      },
      {
        pos : "Asst. Publicity Secretary",
        name : "Josiah Anyanwu"
      },
      {
        pos : "Legal Adviser 1",
        name : "Barr. Bayo Akinlade"
      },
      {
        pos : "Legal Adviser 2",
        name : "Hakeem Lasisi"
      },
    ],
  },
  {
    set : "1992",
    reps : [
      {
       "pos": "Chairman ",
       "name": "Sunday Isola"
      },
      {
       "pos": "Vice Chairman Nigeria",
       "name": "Adenuga  Mike"
      },
      {
       "pos": "Secretary",
       "name": "Gbenga  Johnson"
      },
      {
       "pos": "Financial Secretary",
       "name": "Jolaosho Adewale"
      },
      {
       "pos": "Social Secretary",
       "name": "Olutade Olukunle"
      },
      {
       "pos": "Treasurer",
       "name": "Alhaji Aremu Lanre"
      }
     ]
  },
  {
    set : "2004",
    reps : [
      {
       "pos": "Chairman ",
       "name": "Onyeche James"
      },
      {
       "pos": "Vice Chairman Nigeria",
       "name": "Mba Ekpuagha"
      },
      {
       "pos": "Vice Chairman Europe\/Asia",
       "name": "Ipadeola Adewale"
      },
      {
       "pos": "Vice Chairman North\/South America",
       "name": "Salami  Babatunde"
      },
      {
       "pos": "Secretary",
       "name": "Chibueze Paul Dike"
      },
      {
       "pos": "Assistant Secretary",
       "name": "Eleshin Lateef"
      },
      {
       "pos": "Social Secretary",
       "name": "Stephen Venn"
      },
      {
       "pos": "Publicity Secretary",
       "name": "Brian Bassey"
      },
      {
       "pos": "Treasurer",
       "name": "Victor Nwachukwu"
      }
     ]
  },
    {
    set : "2009",
    reps : [
      {
       "rep": "Chairman ",
       "name": "Mr. Adekoya Kehinde"
      },
      {
       "rep": "Vice Chairman Nigeria",
       "name": "Ms. Elizabeth Iyang"
      },
      {
       "rep": "Secretary",
       "name": "Mr. Bello Fatiu"
      },
      {
       "rep": "Financial Secretary",
       "name": "EnweruzoEmmanuel"
      },
      {
       "rep": "Social Secretary",
       "name": "Mr. Adebiyi Sulaiman"
      },
      {
       "rep": "Treasurer",
       "name": "Mrs. AJeniya Zainab"
      },
      {
       "rep": "Publicity Secretary 1 ",
       "name": "Mrs. Bello Modina"
      },
      {
       "rep": "Publicity Secretary 2 ",
       "name": "Bailey Michael"
      },
      {
       "rep": "Publicity Secretary 3",
       "name": "Ms. Salako Lolade"
      }
     ]
  },
]

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Set Representatives"}/>
        
        <div className='p-20'>
        <div class="flex flex-wrap justify-center gap-5">
          {
            setReps.map(({set}, index) => (
              <div key={index} class="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
            <p class="text-gray-700 text-5xl font-primary mb-4">
              {set}
            </p>
            <Link href={`/excos/set-representative/${set}`}>
             <button type="button" class=" inline-block px-6 py-2.5 bg-[#800000] text-white font-nunito transition duration-150 ease-in-out">View Representative</button>            
            </Link>
          </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Index