import moment from 'moment'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PaymentCard = ({data, loading}) => {
    console.log(data)
  return (
    <div className='h-full w-full shadow-xl bg-white space-y-8 rounded-lg p-4'>
        <p className='font-manrope'>Latest Transactions</p>

        <div className='space-y-3'>
            {
                data.map(({purpose, updated_at, amount, status}, index) => (
                    <Transaction
                    title={purpose}
                    key={index}
                    status={status}
                    date={moment(updated_at).format("Do MMM, YYYY")}
                    amount={`N${amount}`}/>
                ))
            }
            {
                loading && (
                    Array(5).fill("").map((item, index) => (
                        <Transaction key={index}/>
                    ))
                )
            }
        </div>
    </div>
  )
}

const Transaction = ({title, date, amount, status}) => (
    <div className='flex justify-between'>
        <div className='flex gap-3'>
            <div className={`p-5 rounded ${status === "success" ? "bg-green-200" : "bg-yellow-200"}`}></div>

            <div className='space-y-1'>
                <p className='capitalize flex-1 font-manrope text-sm'>{title || <Skeleton/>}</p>
                <p className='font-figtree text-xs text-gray-500'>{date || <Skeleton/>}</p>
            </div>            
        </div>


        <div className='font-figtree'>
           <p className='font-semibold'>{amount || <Skeleton/>}</p> 
        </div>
    </div>
)

export default PaymentCard