import React, { useState } from 'react';
import { JobButton, JobForm } from '../dashboard/job-board';
import Admin from '@/Layouts/AdminLayout';
import MyModal from '@/Components/Modal/Modal';
import { useForm } from '@inertiajs/react';
import DashboardTitle from '@/Components/Header/DashboardTitle';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import JobsCard from '@/Components/Cards/JobsCard';
import { toast } from 'react-toastify';

const Index = ({ jobs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data , setData, post, processing : isLoading, errors, reset} = useForm({
    title: '',
    org: '',
    exp_date: '',
    link: '',
    contact: '',
    description: '',
  });

  const closeModal = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('job.create'), {
      onSuccess: () => {
        closeModal();
        reset();
        toast("Job Update Added!")
      }
    });
  };

  return (
    <Admin>
      <MyModal
        isOpen={isOpen}
        title={"Add Job Opening"}
        body={
          <JobForm 
            data={data}
            setData={setData}
            errors={errors}
            isSuccess={false}
          />
        }
        button={<JobButton handleSubmit={handleSubmit} isLoading={isLoading} />}
        closeModal={closeModal}
      />

      
        <main className='md:p-10 p-5 space-y-8'>

        <DashboardTitle
          title={"Job Board"}
          subtitle={"Post job opportunies for members and also search for suitable opportunities."}
          value={"Post Job"}
          onClick={closeModal}
          />

        <section className='bg-white p-2 rounded'>
          <div className='bg-gray-200 w-3/5 flex px-2 gap-2 items-center'>
            <MagnifyingGlassIcon className='h-4'/>
          <input className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
          </div>
        </section>

        <section className='grid sm:grid-cols-3 gap-3'>
        {        
              jobs.map(({title, org, exp_date, created_at, description, contact, link}, index) => (
                <JobsCard
                  key={index}
                  title={title}
                  org={org}
                  exp_date={exp_date}
                  created_at={created_at}
                  contact={contact}
                  link={link}
                  admin={true}
                  description={description}/>
              ))
        }
        </section>
        </main>  


    </Admin>
  );
};

export default Index;
