import moment from 'moment'
import React from 'react'

const LatestMembers = ({data}) => {
  return (
    <div  className='bg-white md:min-h-[70vh] shadow-xl p-4 space-y-5 rounded-lg'>
        <p className='font-manrope'>New Members</p>

        <div className='relative overflow-x-auto'>
            <table className='w-full divide-y'>
                <thead className='font-manrope text-xs  text-left'>
                    <tr>
                        <th className='py-2 font-light'>Name</th>
                        <th className='py-2 font-light'>Set</th>
                        <th className='py-2 font-light'>City</th>
                        <th className='py-2 font-light'>Reg. Date</th>                        
                    </tr>
                </thead>
                <tbody className='divide-y font-figtree text-sm'>
                    {
                        data.map(({firstName, lastName, set, created_at, city}, index) => (
                            <tr key={index} className=''>
                                <td className='py-3 pr-4 whitespace-nowrap'>{firstName} {lastName}</td>
                                <td className='py-3 pr-4 whitespace-nowrap'>{set}</td>
                                <td className='py-3 pr-4 whitespace-nowrap'>{city}</td>
                                <td className='py-3 pr-4 whitespace-nowrap text-xs text-gray-600'>{moment(created_at).format("Do MMM, YYYY")}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LatestMembers