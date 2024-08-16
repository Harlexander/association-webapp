import React, { Fragment, useState } from 'react'
import Admin from '@/Layouts/AdminLayout';
import { CheckIcon, ChevronUpDownIcon, PhotoIcon } from '@heroicons/react/24/outline'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { useMutation, useQuery } from 'react-query'
import { api } from '../../lib/axios'
import { set } from '../../lib/set'
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import ElectionTable from '../../components/Tables/ElectionTable'
import { positions } from '../election'
import { Listbox, Transition } from '@headlessui/react'
import { ScaleLoader } from 'react-spinners'

const Index = () => {
    const [selected, setSelected] = useState(positions[0])
  
    const { isLoading, mutate, isSuccess } = useMutation(async (values) => {
        const { data } = await api.delete(`/election/${values}`)
        return data;
      }, {
        onSuccess : () => {
          election.refetch();
        }
      });
    
    const election = useQuery(["election"], async () => {
        const { data } = await api.get("/election");
    
        return data;
    });

  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
            <DashboardTitle
            title={"ELection"}
            subtitle={"Manage candidates for the executive election."}/>

            <List selected={selected} setSelected={setSelected}/>
            
            <ElectionTable isLoading={election.isLoading} mutate={mutate} data={election.data && election.data.filter((contestant) => contestant.position === selected)}/>
        </main>
        
    </Admin>
  )
}

export default Index


function List({selected, setSelected}) {  
    return (
      <div className="w-72">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {positions.map((position, positionIdx) => (
                  <Listbox.Option
                    key={positionIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={position}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {position}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
  }

const Button = ({handleSubmit, isLoading}) => (
    <button
    onClick={handleSubmit}
    type="button"
    className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
  >
    {
      isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Create Event")
    }
  </button>
  )

  
const Form = ({handleChange, formValues, handleImageChange, isSuccess}) => {
    return(
      <div className='space-y-5 py-5 font-figtree'>
        {
          isSuccess && (
            <BadgeSuccess
            message={"Event created. Members can now register!"}/>
          )
        }

      <p className='text-sm'>election created will enable members register for this event.</p>

      <div className='font-figtree'>
        <input
          type="text"
          name="title"
          required
          value={formValues.title}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        />
      </div>
      <div className='font-figtree'>
        <select
          type="text"
          name="set"
          required
          value={formValues.set}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        >
            <option>Select Set</option>
            <option value={'all set'}>All Set</option>
            { set.map(item => (
                <option key={item} value={item}>{item}</option>
            )) }
        </select>
      </div>
      <div className='font-figtree'>
        <select
          type="text"
          name="type"
          required
          value={formValues.type}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Type'
        >
            <option>Type</option>
            <option value={'free'}>Free</option>
            <option value={'paid'}>Paid</option>
        </select>
      </div>
      {
        formValues.type === "paid" && (
            <div className='font-figtree'>
                <input
                type="text"
                name="reg_fee"
                required
                value={formValues.reg_fee}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Amount'
                />
            </div>            
        )
      }

      <div className='font-figtree'>
        <input
          type="date"
          name="date"
          required
          value={formValues.date}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        />
      </div>
      <div>
        <textarea
          name="description"
          required
          value={formValues.description}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event descriptionription'
          rows={5}
        ></textarea>
      </div>
  
      <div className='space-y-3 text-center border items-center border-pry rounded-xl flex flex-col justify-center p-5'>
  
        <PhotoIcon className='h-10 text-pry'/>
  
        <div>
          <p>Upload Image</p>
        </div>
  
        {
          formValues.image && (
            <div className='flex flex-wrap gap-1'>
                  <img src={URL.createObjectURL(formValues.image)} alt="img" className='w-full object-cover' />
            </div>                  
          )
        }
  
  
        <div className='relative'>
          <input required type="file" name="image" onChange={handleImageChange} className='h-full w-full opacity-0 absolute' />
          <button className='bg-pry py-2 font-figtree px-6 rounded-xl text-white'>Select Image</button>
        </div>
        </div>
    </div>
    )
  }