import moment from 'moment'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ActivePaymentCard = ({data, loading, admin}) => {

  return (
    <div className='bg-white rounded-lg p-4 shadow-lg space-y-4'>
        <p className='font-manrope font-semibold'>Active Payments</p>

        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y table-auto'>
            <tbody className='divide-y'>
              <tr className='font-manrope text-xs uppercase'>
                <td className='py-2 px-3 whitespace-nowrap'>Title</td>
                <td className='py-2 px-3 whitespace-nowrap'>Trans. Description</td>
                <td className='py-2 px-3 whitespace-nowrap'>Amount</td>
                <td className='py-2 px-3 whitespace-nowrap'>Due Date</td>
                <td className='py-2 px-3 whitespace-nowrap'></td>
              </tr>
              {
                data.map(({title, description, amount, close_date, payment_id, set}) => (
                  <tr className='font-figtree text-sm' key={payment_id}>
                    <td className='py-2 px-3 whitespace-nowrap'>{title}</td>
                    <td className='py-2 px-3 '>{description}</td>
                    <td className='py-2 px-3 whitespace-nowrap'>N{amount}</td>
                    <td className='py-2 px-3 whitespace-nowrap'>{moment(close_date).format("Do MMM")}</td>
                    <td className='py-2 px-3 whitespace-nowrap'>
                      {
                        !admin && (
                        <button disabled={loading} onClick={() =>{ alert("Payment Disabled"); console.log({ 
                            amount : amount, 
                            purpose : title, 
                            callback_url : url,
                            payment_id : payment_id
                          })}} className='bg-blue-500 p-2 text-xs rounded text-white'>{false ? (<FontAwesomeIcon icon={faSpinner} spin/>) : ("Pay Now")}</button>
                        )
                      }
                      {
                        admin && <>{set}</>
                      }
                       </td>
                  </tr>  
                ))
              }      
              {
                loading && (
                  Array(3).fill("").map((item, index) => (
                    <tr className='font-figtree text-sm' key={index}>
                      <td className='py-2 px-3 whitespace-nowrap'><Skeleton/></td>
                      <td className='py-2 px-3 '><Skeleton/></td>
                      <td className='py-2 px-3 whitespace-nowrap'><Skeleton/></td>
                      <td className='py-2 px-3 whitespace-nowrap'><Skeleton/></td>
                      <td className='py-2 px-3 whitespace-nowrap'>
                        {
                          !admin && <button className='bg-blue-500 p-2 text-xs rounded text-white'>Pay Now</button>
                        }
                      </td>
                    </tr>  
                  ))
                )
              }            
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default ActivePaymentCard