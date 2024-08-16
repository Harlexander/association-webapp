import React, { useEffect, useState } from 'react'
import PageHeader from '../../../components/Header/PageHeader'
import { useRouter } from 'next/router'
import IndexNavbar from '../../../Components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


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
         "pos": "Chairman ",
         "name": "Mr. Adekoya Kehinde"
        },
        {
         "pos": "Vice Chairman Nigeria",
         "name": "Ms. Elizabeth Iyang"
        },
        {
         "pos": "Secretary",
         "name": "Mr. Bello Fatiu"
        },
        {
         "pos": "Financial Secretary",
         "name": "EnweruzoEmmanuel"
        },
        {
         "pos": "Social Secretary",
         "name": "Mr. Adebiyi Sulaiman"
        },
        {
         "pos": "Treasurer",
         "name": "Mrs. AJeniya Zainab"
        },
        {
         "pos": "Publicity Secretary 1 ",
         "name": "Mrs. Bello Modina"
        },
        {
         "pos": "Publicity Secretary 2 ",
         "name": "Bailey Michael"
        },
        {
         "pos": "Publicity Secretary 3",
         "name": "Ms. Salako Lolade"
        }
       ]
    },
  ]

const Index = () => {
    const [ state, setState ] = useState(null)
    const { query : { set } } =  useRouter();

    useEffect(() => {
        const current = setReps.find((item) => item.set === set);
        setState(current);
        console.log(current)
    }, [set]);

console.log(set)
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={`${set} Set Representative`}/>
         
        <div className='md:py-20 md:px-28 px-5 py-8'>
            <div className='md:grid grid-cols-4 space-y-4 md:space-y-0 gap-3'>
                {
                  state &&  state.reps.map(({pos, name}, index) => (
                        <div key={index} className="col-1 rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg w-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""/>
                            </a>
                            <div className="p-6">
                            <h5 className="font-primary text-xl mb-2">{name}</h5>
                            <p className="text-gray-700 capitalize font-nunito text-base mb-4"><FontAwesomeIcon icon={faUser} className="text-sm"/> {pos}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Index
