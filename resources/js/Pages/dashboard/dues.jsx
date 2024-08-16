import React from 'react'
import PaymentsTable from '../../components/Tables/PaymentsTable';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import Authenticated from '@/Layouts/AuthenticatedLayout';

const Index = ({ data, activePayments }) => {

  console.log(activePayments, data);

  return (
    <Authenticated>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
            title={"Subscriptions"}
            subtitle={"Manage your subscription,dues and payments. Initiate payments conveniently."}/>

          <section>
            <ActivePaymentCard data={[]} loading={false}/>
          </section>

          <section>
            <PaymentsTable data={data} loading={false}/>
          </section>
        </main>
    </Authenticated>
  )
}

export default Index;


