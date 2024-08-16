import moment from 'moment'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PaymentsTable = ({data, loading}) => {
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg relative overflow-x-auto'>
        <table className='table-auto w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light'>Trans Id</th>
                    <th className='py-2 font-light'>Title</th>
                    <th className='py-2 font-light'>Date</th>
                    <th className='py-2 font-light'>Status</th>
                    <th className='py-2 font-light'>Amount</th>                    
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                {
                    data.map(({ trans_id, purpose, updated_at, status, amount }, index) => (
                        <tr className='' key={index}>
                            <td className='py-5 pr-4 whitespace-nowrap'>{trans_id}</td>
                            <td className='py-5 pr-4 whitespace-nowrap capitalize'>{purpose}</td>
                            <td className='py-5 pr-4 whitespace-nowrap'>{moment(updated_at).format(" Do MMMM, YYYY")}</td>
                            <td className='py-5 pr-4 whitespace-nowrap'>
                                {
                                    status === "success" && (
                                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                                            Paid
                                        </span>
                                    )
                                }
                                {
                                    status !== "success" && (
                                        <span className='bg-yellow-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                                            pending
                                        </span>
                                    )
                                }
                            </td>
                            <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N{amount}</td>
                        </tr>
                    ))
                }
                {
                    loading && (
                        Array(4).fill("").map((item, index) => (
                            <tr className='' key={index}>
                                <td className='py-5 pr-4 whitespace-nowrap'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap capitalize'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap'>
                                    <Skeleton/>
                                </td>
                                <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'><Skeleton/></td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export const AdminPaymentsTable = ({data, loading}) => {
    // console.log(data);
    return(
        <div className='bg-white p-4 rounded-lg shadow-xl relative overflow-x-auto'>
        <table className='table-responsive w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light'>Trans Id</th>
                    <th className='py-2 font-light'>Member Name</th>
                    <th className='py-2 font-light'>Purpose</th>
                    <th className='py-2 font-light'>Date</th>
                    <th className='py-2 font-light'>Status</th>
                    <th className='py-2 font-light'>Amount</th>                    
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                {
                    data.map(({trans_id, purpose, created_at, amount, status, member : { firstName, lastName }}) => (
                        <tr className='' key={trans_id}>
                        <td className='py-5 pr-4 whitespace-nowrap'>{trans_id}</td>
                        <td className='py-5 pr-4 whitespace-nowrap'>{firstName} {lastName}</td>
                        <td className='py-5 pr-4 whitespace-nowrap'>{purpose}</td>
                        <td className='py-5 pr-4 whitespace-nowrap'>{moment(created_at).format("Do MMM, YYYY")}</td>
                        <td className='py-5 pr-4 whitespace-nowrap'>
                            <span className={`bg-${status === "success" ? "green" : "yellow" }-300 capitalize text-green-800 px-5 py-0.5 text-xs rounded-lg`}>
                                {status}
                            </span>
                        </td>
                        <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N{amount}</td>
                    </tr>
                    ))
                }
                 {
                    loading && (
                        Array(4).fill("").map((item, index) => (
                            <tr className='' key={index}>
                                <td className='py-5 pr-4 whitespace-nowrap'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap capitalize'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap'><Skeleton/></td>
                                <td className='py-5 pr-4 whitespace-nowrap'>
                                    <Skeleton/>
                                </td>
                                <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'><Skeleton/></td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    </div>
    )
}

export default PaymentsTable