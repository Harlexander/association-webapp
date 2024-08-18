import React from 'react'
import IndexNavbar from '../../Components/Navbar/Navbar'
import PageHeader from '../../components/Header/PageHeader'
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { imgHost } from '../../lib/imgHost';
import { useQuery } from 'react-query';
import { api } from '../../lib/axios';
import { Link } from '@inertiajs/react';

export const positions = [
  "PRESIDENT",
  "VICE PRESIDENT NIGERIA",
  "VICE PRESIDENT EUROPE AND ASIA",
  "VICE PRESIDENT AMERICA",
  "GENERAL SECRETARY",
  "ASST. SECT EUROPE AND ASIA",
  "FINANCIAL SECRETARY",
  "TREASURER",
  "SOCIAL SECRETARY",
  "PUBLIC RELATIONS OFFICER",
  "ASST. FIN. SECRETARY",
  "ASSISTANT PRO",
  "ASST. SOCIAL SECRETARY",
  "ASST. GENERAL SECRETARY"
];

const Index = () => {
  const {data = []} = useQuery(["elections"], async () => {
    const { data } = await api.get("/election");

    return data;
  });

  console.log(data);

  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Electoral Candidates"}/>
         
      
        <div className='sm:p-20 p-5 space-y-5'>
        {
                    positions.map((position) => (
                    <div key={position} className='bg-white p-5 space-y-5 divide-y'>
                        <div className='flex justify-between items-center'>
                        <p className='font-primary text-lg capitalize'>{position.toLowerCase()}</p>
                        <ArrowRightIcon className='h-4'/>
                        </div>

                        <div className='pt-5 gap-5 justify-between flex sm:flex-row overflow-x-auto relative'>
                            {
                                data.map((candidate, index) => (
                                    candidate.position === position && (
                                        <ContestantCard contestant={candidate} key={index}/>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Index


export const ContestantCard = ({contestant}) => {
  return(
    <div className='border p-2 divide-y shrink-0'>
      <img src={"/public/"+contestant?.image} alt="img" className='h-52 w-52 object-contain' />
      <p className='font-figtree font-semibold py-2'>{contestant?.firstName} {contestant?.lastName}</p>
      <Link href={`/election/${contestant?.id}`}>
        <button className='w-full bg-[#800000] font-figtree text-white text-xs py-2'>View Profile</button>
      </Link>
    </div>
  )
}