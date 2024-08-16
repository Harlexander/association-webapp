import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Admin from '@/Layouts/AdminLayout';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { AdminPaymentsTable } from '../../components/Tables/PaymentsTable';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { set } from '../../lib/set';
import { searchByName } from '../../lib/searchFunction';
import MyModal from '../../components/Modal/Modal';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { ScaleLoader } from 'react-spinners';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';
import { toast } from 'react-toastify';

const Index = ({ auth: { user }, data, activePayments }) => {
    const [current, setCurrent] = useState(1);
    const [filter, setFilter] = useState({ status: '', search: [] });
    const [isOpen, setIsOpen] = useState(false);

    // Initialize useForm
    const { data: formValues, setData, post, processing, reset, errors } = useForm({
        amount: '',
        title: '',
        description: '',
        set: 'all set',
        close_date: '',
    });

    const handleTextChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('ticket.create'), {
            onSuccess: () => {
                reset();
                closeModal();
                toast("Payment ticket created successfully!")
            },
            onError: () => {
                // Handle error if needed
                console.log('Submission error:', errors);
            }
        });
    };

    const handleChange = (e) => {
        setCurrent(1);
        setFilter(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSearch = (e) => {
        const result = searchByName(e.target.value, data.data.map(item => ({
            ...item,
            firstName: item.member.firstName,
            lastName: item.member.lastName
        })));
        setFilter(prev => ({ ...prev, search: result }));
    };

    const closeModal = () => setIsOpen(!isOpen);

    return (
        <Admin>
            <MyModal
                isOpen={isOpen}
                title={"Create Payment Ticket"}
                body={<TicketForm
                    handleChange={handleTextChange}
                    formValues={formValues}
                    isSuccess={formValues.success}
                    errors={errors}
                />}
                button={<TicketButton
                    handleSubmit={handleSubmit}
                    isLoading={processing}
                />}
                closeModal={closeModal}
            />
            <main className='p-5 sm:p-10 space-y-8'>
                <DashboardTitle
                    title={"Payments"}
                    subtitle={"Payment records and subscriptions."}
                    value={"Create Ticket"}
                    onClick={closeModal}
                />

                <ActivePaymentCard admin={true} data={activePayments || []} loading={processing} />

                <section className='bg-white shadow-lg p-2 grid grid-cols-3 gap-2 rounded'>
                    <div className='bg-gray-200 col-span-2'>
                        <input onChange={handleSearch} placeholder='Search By Name' name='search' className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1' />
                    </div>
                    <div className='bg-gray-200'>
                        <select name='status' onChange={handleChange} className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                            <option value="">Status</option>
                            <option value={"success"}>Success</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"failed"}>Failed</option>
                        </select>
                    </div>
                </section>

                {filter.search.length > 0 && (
                    <section className='space-y-1'>
                        <p className='font-figtree'>Search Result</p>
                        <AdminPaymentsTable data={filter.search || []} loading={processing} />
                    </section>
                )}

                <section>
                    <AdminPaymentsTable data={data.data || []} loading={processing} />

                    <div className='font-figtree flex justify-between py-5'>
                        <p className='bg-white px-4 py-2 rounded-lg'>Page {data.current_page} of {data.last_page}</p>

                        <div className='space-x-2'>
                            <button onClick={() => current > 1 && setCurrent(current - 1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                                <ArrowLeftIcon className='h-4' />
                            </button>
                            <button onClick={() => current < data.last_page && setCurrent(current + 1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                                <ArrowRightIcon className='h-4' />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </Admin>
    );
};

const TicketButton = ({ handleSubmit, isLoading }) => (
    <button
        onClick={handleSubmit}
        type="button"
        className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
        disabled={isLoading}
    >
        {isLoading ? (<ScaleLoader className='px-8' color='white' height={16} />) : ("Create Ticket")}
    </button>
);

const TicketForm = ({ handleChange, formValues, isSuccess, errors }) => (
    <div className='space-y-5 py-5'>
        {isSuccess && (
            <BadgeSuccess
                message={"Payment Ticket Created Successfully!"}
            />
        )}
        {errors && <div className='text-red-500'>{errors.message}</div>}

        <div className='font-figtree'>
            <input
                type="text"
                name="title"
                required
                value={formValues.title}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Title'
            />
        </div>
        <div className='font-figtree'>
            <input
                type="text"
                name="amount"
                required
                value={formValues.amount}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Amount'
            />
        </div>
        <div className='font-figtree'>
            <input
                type="date"
                name="close_date"
                required
                value={formValues.close_date}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Close Date'
            />
        </div>
        <div className='font-figtree'>
            <select
                name="set"
                required
                value={formValues.set}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
            >
                <option value={"all set"}>All Set</option>
                {set.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
        <div>
            <textarea
                id="content"
                name="description"
                required
                value={formValues.description}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Description'
                rows={5}
            ></textarea>
        </div>
    </div>
);

export default Index;
