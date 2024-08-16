import React from 'react';
import { PrinterIcon, TrashIcon } from '@heroicons/react/24/outline';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';

const ElectionTable = ({data = [], isLoading, mutate}) => {
    console.log(data)
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg overflow-x-auto'>
        <table className='table-responsive w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light pr-2'>S/N</th>
                    <th className='py-2 font-light pr-2'>Name</th>
                    <th className='py-2 font-light pr-2'>Email</th>
                    <th className='py-2 font-light pr-2'>Set</th>
                    <th className='py-2 font-light pr-2'>Added On</th>
                    <th className='py-2 font-light pr-2'>Action</th>
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                {
                    data.map((contestant, index) => (
                        <tr className='' key={index}>
                            <td className='py-5 whitespace-nowrap pr-4'>{index+1}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>{contestant.fistName} {contestant.lastName}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>{contestant.email}</td>
                            <td className='py-5 whitespace-nowrap pr-4 capitalize'>{contestant?.set}</td>
                            <td className='py-5 whitespace-nowrap pr-4'>
                                {moment(contestant.createdAt).format("Do MMM, YYYY")}
                            </td>
                            <td className='py-5 whitespace-nowrap pr-4'>
                                <button onClick={() =>{ let sure = confirm("Are you sure you want to remove this candidate"); sure && mutate(contestant.id)}} className='bg-red-500 py-3 rounded shadow text-white px-5'>Remove</button>
                            </td>
                        </tr>
                    ))
                }
                {
                    data.length === 0 && (
                        <tr>
                         <td colSpan={5} className='text-center py-16 text-lg'>No member has appplied for this position</td>
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

export default ElectionTable;

export const AdminEventsTable = ({data = []}) => {
    console.log(data);

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