import moment from 'moment'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const JobsTable = ({data = [], isLoading}) => {
  return (
    <div className='bg-white p-4 min-h-[60vh] space-y-5 rounded-lg shadow-xl'>
        <p className='font-manrope'>Job Postings</p>

        <div className='relative overflow-x-auto'>
            <table className='w-full divide-y'>
                <thead className='font-manrope text-xs  text-left'>
                    <tr>
                        <th className='py-2 font-light'>Job Title</th>
                        <th className='py-2 font-light'>Company</th>
                        <th className='py-2 font-light'>Application Link</th>
                        <th className='py-2 font-light'>Date</th>                        
                    </tr>
                </thead>
                <tbody className='divide-y font-figtree text-sm'>
                    {
                        data.map(({title, org, link , contact, created_at}, index) => (
                            <tr key={index} className=''>
                                <td className='py-3 whitespace-nowrap pr-4'>{title}</td>
                                <td className='py-3 whitespace-nowrap pr-4'>{org}</td>
                                <td className='py-3 whitespace-nowrap pr-4 text-blue-500 text-xs underline'><a href={link || contact}> Apply here</a></td>
                                <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>{moment.duration(moment().diff(created_at)).humanize()}</td>
                            </tr>
                        ))
                    }
                    {
                        isLoading && Array(5).fill("").map((item, index) => (
                            <tr key={index} className=''>
                                <td className='py-3 whitespace-nowrap pr-4'><Skeleton/></td>
                                <td className='py-3 whitespace-nowrap pr-4'><Skeleton/></td>
                                <td className='py-3 whitespace-nowrap pr-4 text-blue-500 text-xs underline'><a> Apply here</a></td>
                                <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'><Skeleton/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default JobsTable