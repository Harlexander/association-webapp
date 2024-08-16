import React from 'react'
import IndexNavbar from '../../../Components/Navbar/Navbar'
import PageHeader from '../../../components/Header/PageHeader'
import { useRouter } from 'next/router'
import { BuildingOfficeIcon, DocumentCheckIcon, UserIcon } from '@heroicons/react/24/outline';
import { useQuery } from 'react-query';
import { api } from '../../../lib/axios';
import { imgHost } from '../../../lib/imgHost';

const contestantBio = {
    id: 1, // Contestant ID
    name: "John Doe",
    age: 25,
    nationality: "United States",
    occupation: "Software Engineer",
    hobbies: ["Reading", "Gaming", "Traveling"],
    biography:
      "John Doe is a passionate software engineer with a love for technology and innovation...",
    why : "John Doe is a passionate software engineer with a love for technology and innovation.. .John Doe is a passionate software engineer with a love for technology and innovation...  John Doe is a passionate software engineer with a love for technology and innovation... John Doe is a passionate software engineer with a love for technology and innovation...",
    image: "john-doe-profile.jpg", // URL or file path to the contestant's profile image
    socialLinks: {
      website: "https://www.johndoe.com",
      twitter: "@johndoe",
      facebook: "JohnDoeOfficial",
      linkedin: "in/johndoe",
      instagram: "@johndoe_insta",
    },
  };

const Index = () => {
    const { query : { contestantId } } = useRouter();

    const { data = {} } = useQuery([contestantId], async () => {
      const { data } = await api.get(`/election/${contestantId}`);
      return data;
    });

    console.log(data)

  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={`${data?.firstName} ${data?.lastName}`}/>
          

        <div className='p-5 sm:p-20'>
            <div className='bg-white p-5 sm:p-10'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <img src={imgHost+data.image} className='sm:h-96' alt="" />
                    <div className='space-y-8 sm:space-y-5 font-figtree sm:p-8'>
                        <p className='capitalize text-2xl sm:text-4xl font-primary'>{data?.firstName} {data?.lastName}</p>

                        <div className='space-y-1'>
                            <p className='text-gray-500 text-sm flex gap-2 items-center'><BuildingOfficeIcon className='h-4'/> Occupation</p>
                            <p className='font-semibold text-xl'>{data?.occupation}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-500 text-sm flex gap-2 items-center'><UserIcon className='h-4'/> Biography</p>
                            <p className='font-semibold text-xl'>{data?.biography}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-500 text-sm flex gap-2 items-center'><DocumentCheckIcon className='h-4'/> Manifesto</p>
                            <p className='font-semibold text-xl'>{data?.manifesto}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index