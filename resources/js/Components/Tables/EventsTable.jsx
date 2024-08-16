import React from 'react';
import { PrinterIcon, TrashIcon } from '@heroicons/react/24/outline';
import Skeleton from 'react-loading-skeleton';

const EventsTable = ({data, isLoading}) => {
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg overflow-x-auto'>
        <table className='table-responsive w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light pr-2'>S/N</th>
                    <th className='py-2 font-light pr-2'>Event</th>
                    <th className='py-2 font-light pr-2'>Date</th>
                    <th className='py-2 font-light pr-2'>Fee</th>
                    <th className='py-2 font-light pr-2'>Status</th>
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                {
                    data.map(({ event : { event_id, title, date, reg_fee }}, index) => (
                        <tr className='' key={index}>
                            <td className='py-5 whitespace-nowrap pr-4'>{index+1}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>{title}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>{date}</td>
                            <td className='py-5 whitespace-nowrap pr-4 capitalize'>{reg_fee}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>
                                <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                                    Registered
                                </span>
                            </td>
                        </tr>
                    ))
                }
                {
                    data.length === 0 && (
                        <tr>
                         <td colSpan={5} className='text-center py-16 text-lg'>You&apos;ve not registered for an event</td>
                        </tr>
                    )
                }
                {
                    isLoading && Array(4).fill("").map((item, index) => (
                        <tr className='' key={index}>
                            <td className='py-5 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-5 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-5 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-5 whitespace-nowrap pr-4 capitalize'><Skeleton/></td>
                            <td className='py-5 whitespace-nowrap pr-4'><Skeleton/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default EventsTable;

export const AdminEventsTable = ({data = []}) => {
    return (
      <div className='bg-white p-4 shadow-xl rounded-lg overflow-x-auto'>
          <table className='table-responsive w-full divide-y'>
              <thead className='font-manrope text-xs capitalize text-left'>
                  <tr>
                      <th className='py-2 font-light pr-2'>S/N</th>
                      <th className='py-2 font-light pr-2'>Event</th>
                      <th className='py-2 font-light pr-2'>Set</th>
                      <th className='py-2 font-light pr-2'>Fee</th>
                      <th className='py-2 font-light pr-2'>Reg. Members</th>
                      <th className='py-2 font-light pr-2'>Date</th>
                      <th className='py-2 font-light pr-2'>Report</th>
                      <th className='py-2 font-light pr-2'>Delete</th>
                  </tr>
              </thead>
              <tbody className='divide-y font-figtree text-sm'>
                  {
                      data.map(({ event_id, title, date, reg_fee, set, registered_members }, index) => (
                          <tr className='' key={event_id}>
                              <td className='py-5 whitespace-nowrap pr-4'>{index+1}</td>
                              <td className='py-5 whitespace-nowrap pr-4'>{title}</td>
                              <td className='py-5 whitespace-nowrap pr-4 capitalize'>{set}</td>
                              <td className='py-5 whitespace-nowrap pr-4 capitalize'>{reg_fee}</td>
                              <td className='py-5 whitespace-nowrap pr-4 capitalize'>{registered_members.length}</td>
                              <td className='py-5 whitespace-nowrap pr-4 capitalize'>{date}</td>
                              <td className='py-5 whitespace-nowrap pr-4'>
                                  <button className='px-5 bg-green-500 rounded py-1'>
                                    <PrinterIcon className="h-4 text-white"/>
                                  </button>
                              </td>
                              <td className='py-5 whitespace-nowrap pr-4'>
                                  <button className='px-5 bg-red-500 rounded py-1'>
                                    <TrashIcon className="h-4 text-white"/>
                                  </button>
                              </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
      </div>
    )
  }