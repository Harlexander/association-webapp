import React, { useState } from 'react'
import { CameraIcon } from '@heroicons/react/24/outline';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { handleUpload } from '../../lib/uploadImg';
import { api } from '../../lib/axios';
import { imgHost } from '../../lib/imgHost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MyModal from '../../components/Modal/Modal';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { handleChange } from '../../lib/handleInput';
import { ScaleLoader } from 'react-spinners';
import { countries } from '../../lib/countries';
import Authenticated from '@/Layouts/AuthenticatedLayout';

const Index = ({ auth: { user} }) => {
  const [ppUload, setPpUload] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);


  async function imageChange(event)  {
    const file = event.target.files[0];

    console.log(file);
   }

   const updateProfilePicture = async (file)  => {
    const file_path = await handleUpload(file);

    const data = await api.put("/user/update", { img : file_path }, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    });

    return data;
   }

   const closeModal = () => setIsOpen(!isOpen);

   const [formValues, setFormValues] = useState({
    
   });

    const handleSubmit = () => {
      console.log(formValues);
    }

  return (
    <Authenticated>
          <MyModal
            isOpen={isOpen}
            title={"Edit Your Profile"}
            body={<EditForm 
                handleChange={(e) =>  handleChange(e, setFormValues)} 
                user={user}
                formValues={formValues}
                isSuccess={false}
            />}
            button={<EditButton 
                handleSubmit={handleSubmit}
                isLoading={false}
            />}
            closeModal={closeModal}
            />
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
          title={"My Profile"}
          subtitle={`Hello ${user.lastName},`}
          value={"Edit Profile"}
          onClick={closeModal}/>

          <section className='sm:grid sm:grid-cols-3 gap-4 space-y-4 sm:space-y-0 py-5'>
            <div className='col-1 p-4 rounded w-full'>
              <div className='relative mx-auto w-full'>

                {
                  false && (<FontAwesomeIcon icon={faSpinner} spin className='text-5xl absolute w-full top-[40%] text-pry'/>)
                }
              
              <form className='bg-pry shadow rounded-full w-14 h-14 absolute flex items-center justify-center bottom-0 right-0'>
                <input type="file" accept='.jpg,.png,.jpeg,.svg' onChange={imageChange} className='opacity-0 absolute h-full w-full' />
                <CameraIcon className='h-7 text-white'/>
              </form>                

                <img src={user.img ? (imgHost+user.img) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className='rounded-full border-4 shadow-xl border-pry object-cover mx-auto h-72 w-72'/>
              </div>
            </div>
            <div className='col-span-2 space-y-5'>
              <div className='bg-white rounded-lg p-4 space-y-5 shadow-xl'>
                <p className='font-manrope'>Personal Information</p>
              
                <div className='font-figtree divide-y text-sm'>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      FirstName
                    </p>
                    <p className='text-right font-semibold'>
                      {user.firstName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Last Name
                    </p>
                    <p className='text-right font-semibold'>
                      {user.lastName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Email
                    </p>
                    <p className='text-right font-semibold'>
                      {user.email}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Mobile Number
                    </p>
                    <p className='text-right font-semibold'>
                     {user.mobile}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Set
                    </p>
                    <p className='text-right font-semibold'>
                      {user.set}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Profession
                    </p>
                    <p className='text-right font-semibold'>
                      {user.profession}
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-lg p-4 space-y-5 shadow-xl'>
                <p className='font-manrope'>Residential Information</p>
              
                <div className='font-figtree divide-y text-sm'>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      City
                    </p>
                    <p className='text-right font-semibold'>
                      {user.city}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      State
                    </p>
                    <p className='text-right font-semibold'>
                      {user.state}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Country
                    </p>
                    <p className='text-right font-semibold'>
                      {user.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
    </Authenticated>
  )
}


export const EditButton = ({handleSubmit, isLoading}) => (
  <button
  onClick={handleSubmit}
  type="button"
  className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
>
  {
    isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Edit Profile")
  }
</button>
)


export const EditForm = ({handleChange, formValues, user, isSuccess}) => {
  return(
    <div className='space-y-5 py-5 font-figtree'>
      {
        isSuccess && (
          <BadgeSuccess
          message={"Profile Updated!"}/>
        )
      }

    <p className='text-sm'>Edit your personal information here.</p>

    <div className='font-figtree'>
      <input
        type="text"
        name="firstName"
        required
        value={formValues.firstName}
        defaultValue={user.firstName}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='First Name'
      />
    </div>
    <div className='font-figtree'>
      <input
        type="text"
        name="lastName"
        required
        value={formValues.lastName}
        defaultValue={user.lastName}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Last Name'
      />
    </div>
    <div className='font-figtree'>
      <input
        type="text"
        name="mobile"
        required
        value={formValues.mobile}
        defaultValue={user.mobile}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Mobile'
      />
    </div>
    <div className='font-figtree'>
      <input
        type="text"
        name="profession"
        required
        value={formValues.profession}
        defaultValue={user.profession}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Profession'
      />
    </div>
    <div className='font-figtree'>
      <input
        type='text'
        name="city"
        required
        value={formValues.city}
        defaultValue={user.city}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='City'
      />
    </div>
    <div className='font-figtree'>
      <input
        type='text'
        name="state"
        required
        value={formValues.state}
        defaultValue={user.state}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='State'
      />
    </div>
    <div className='font-figtree'>
      <select
        type='text'
        name="country"
        required
        value={formValues.country}
        defaultValue={user.country}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Country'
      >
        {countries.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
    </div>

  </div>
  )
}


export default Index;


