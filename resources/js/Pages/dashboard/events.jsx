import React, { useState } from 'react'
import { CalendarDaysIcon, CurrencyDollarIcon} from '@heroicons/react/24/outline';
import EventsTable from '../../components/Tables/EventsTable';
import DashboardTitle from '../../components/Header/DashboardTitle';
import moment from 'moment';
import { imgHost } from '../../lib/imgHost';
import { ScaleLoader } from 'react-spinners';
import Authenticated from '@/Layouts/AuthenticatedLayout';

const Index = ({ events, reg_events }) => {

  // const reg_events = useQuery(["req_events"], async () => {
  //   const { data } = await api.get("/event/register", { headers : { Authorization : `Bearer ${token} ` } });

  //   return data;
  // }, {enabled : (token !== null)});

  // const register = useMutation(async (event_id) => {
  //   const { data } = await api.post("/event/register", { id : event_id }, { headers : { Authorization : `Bearer ${token}`}})
  //   return data;
  // }, {
  //   onSuccess : () => {
  //     alert("Registration Successul!")
  //     reg_events.refetch();
  //     setClicked("")
  //   },

  //   onError : () => {
  //     alert("You already registered!");
  //     setClicked("");
  //   }
  // });

  return (
    <Authenticated>
        <main className='md:p-10 p-5 space-y-4'>

          <DashboardTitle
          title={"Events"}
          subtitle={"Register for upcoming events and view past events."}/>

          <section className='gap-3 flex overflow-x-auto py-6'>
            {
                events.map(({event_id, title, description, reg_fee, date, image}, index) => (
                  <UpcomingEvents
                    key={image}
                    title={title}
                    description={description}
                    date={date}
                    image={image}
                    register={() => {}}
                    clicked={() => {}}
                    reg_fee={reg_fee}/>
                ))
            }
          </section>

          <section>
                <EventsTable data={reg_events || []}/>
          </section>
        </main>
    </Authenticated>
  )
}

export default Index;


const UpcomingEvents = ({title, description, image, date, reg_fee, register, loading, clicked}) => (
  <div className='bg-white flex gap-4 justify-between flex-col flex-shrink-0 shadow-lg p-4 w-64 rounded-lg'>
      <div className='space-y-3 '>
        <img src={"/public/"+image} className='w-full sm:h-40 object-cover rounded'/>
        <p className='font-manrope font-bold'>{title}</p>
        <p className='font-figtree text-xs'>{description}</p>
    
        <div className='gap-5 flex font-figtree text-xs'>
            <div className='flex items-center gap-2'>
                <CalendarDaysIcon className='h-4 text-yellow-500'/>
                <span>{moment(date).format("Do MMMM, YYYY")}</span>
            </div>

            <div className='flex items-center gap-2'>
                <CurrencyDollarIcon className='h-4 text-yellow-500'/>
                <span className='capitalize'>{reg_fee}</span>
            </div>
        </div>        
      </div>
      <button onClick={register} disabled={loading} className='bg-yellow-500 shadow-xl rounded px-4 py-2 text-xs text-white font-figtree'>{
      (loading && (image === clicked))? (<ScaleLoader height={14} color='white'/>) : ("Register")
      }</button>
  </div>
)