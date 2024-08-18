import React, { useState } from 'react'
import Admin from '@/Layouts/AdminLayout';
import { MagnifyingGlassIcon, PrinterIcon } from '@heroicons/react/24/outline'
import MembersTable from '../../components/Tables/MembersTable'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { set } from '../../lib/set'
import { filterBySet, searchByName } from '../../lib/searchFunction'

const Index = ({ data }) => {
    const [ current, setCurrent ] = useState(1);
    const [ searchResult, setSearchResult ] = useState([]);

    console.log(data);

    const search = (e) => {
        if(e.target.value.length > 0 ){
            const result = searchByName(e.target.value, data);
            setSearchResult(result);
        }else{
            setSearchResult([]);
        }
    }

    const filter = (e) => {
        if(e.target.value.length > 0 ){
            console.log(e.target.value)
            const result = filterBySet(e.target.value, data);
            setSearchResult(result);
        }else{
            setSearchResult([]);
        }
    }

  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
          
          <DashboardTitle
            title={"Membership"}
            subtitle={"Manage and verify members."}
            value={"Download"}
            icon={<PrinterIcon className='h-5'/>}
            />

            <section className='bg-white p-2 grid grid-cols-4 gap-2 rounded'>
                <div className='bg-gray-200 col-span-2 flex px-2 gap-2 items-center'>
                    <MagnifyingGlassIcon className='h-4'/>
                    <input onChange={search}  className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
                </div>
                <div className='bg-gray-200'>
                    <select onChange={filter} className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Set</option>
                        {
                            set.map((set) => (
                                <option value={set} key={set}>{set}</option>
                            ))
                        }
                    </select>
                </div>
          </section>

          <section>
            {
                searchResult.length > 0 && (
                    <div className='mb-5 space-y-1'>
                        <p className='font-figtree font-semibold'>Search Result</p>
                        <MembersTable data={searchResult || []} isLoading={false} admin={true}/>
                    </div>
                )
            }

            <MembersTable data={data} isLoading={false} admin={true}/>

            <div className='font-figtree justify-between py-5 hidden'>
                <p className='bg-white px-4 py-2 rounded-lg'>Page {data.current_page} of {data.last_page}</p>

                <div className='space-x-2'>
                    <button  onClick={() => current > 1 && setCurrent(current-1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                        <ArrowLeftIcon className='h-4'/>
                    </button>
                    <button onClick={() => current < data.last_page && setCurrent(current+1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                        <ArrowRightIcon className='h-4'/>
                    </button>
                </div>
            </div>
          </section>
        </main>
    </Admin>
  )
}

export default Index