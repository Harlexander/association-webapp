// import React, { useState } from 'react'
// import User from '../../layout/users'
// import DashboardTitle from '../../components/Header/DashboardTitle'
// import { ContestantCard, positions } from '../election'
// import { ArrowRightIcon } from '@heroicons/react/24/outline'
// import MyModal from '../../components/Modal/Modal'
// import { useUser } from '../../lib/user'
// import BadgeSuccess from '../../components/Badge/BadgeSuccess'
// import { handleChange } from '../../lib/handleInput'
// import { ScaleLoader } from 'react-spinners'
// import { isError, useMutation, useQuery } from 'react-query'
// import { api } from '../../lib/axios'
// import { handleUpload } from '../../lib/uploadImg'
// import BadgeError from '../../components/Badge/BadgeError'


// const Index = () => {
//     const { token, user} = useUser();
//     const [ isOpen, setIsOpen ] = useState(false);
  
//     const closeModal = () => setIsOpen(!isOpen);
//     const [formValues, setFormValues] = useState({
//         position: positions[0],
//       });

      
//       const candidates = useQuery(["elections"], async () => {
//         const { data } = await api.get("/election", { headers : { Authorization : `Bearer ${token} ` } });
  
//         return data;
//       }, {enabled : (token !== null)});
  

//       const { isLoading, mutate, isSuccess, isError } = useMutation(async (values) => {
//         const file_path = await handleUpload(values.image);
//         const value = {...values, image : file_path, email : user.email, firstName : user.firstName, lastName : user.lastName}
//         const { data } = await api.post("/election", value, { headers : { Authorization : `Bearer ${token}`}})

//         return data;
//       }, {
//         onSuccess : () => {
//             candidates.refetch();
//             closeModal()
//         }
//       });

//       async function imageChange(event)  {
//         const file = event.target.files[0];
    
//         setFormValues(prev => ({
//             ...prev, 
//             image : file
//         }))
//        }

    
//       const handleSubmit = async () => {
//         mutate({...formValues, firstName : user.firstName, lastName : user.lastName })
//       }


//       console.log(candidates.data)
  
    
//   return (
//     <User>
//         <main className='md:p-10 p-5 space-y-4'>
//         <MyModal
//             isOpen={isOpen}
//             title={"Apply for Electoral Position"}
//             body={<ApplyForm 
//                 handleChange={(e) =>  handleChange(e, setFormValues)} 
//                 handleImageChange={imageChange}
//                 formValues={formValues}
//                 isSuccess={isSuccess}
//                 isError={isError}
//             />}
//             button={<Button 
//                 handleSubmit={handleSubmit}
//                 isLoading={isLoading}
//             />}
//             closeModal={closeModal}
//             />

//           <DashboardTitle
//           title={"Executive Election"}
//           subtitle={"Register for upcoming election."}
//           value={"Register"}
//           onClick={closeModal}
//           />

//             <div className='py-10 space-y-5'>
//                 {
//                     positions.map((position) => (
//                     <div key={position} className='bg-white p-5 space-y-5 divide-y'>
//                         <div className='flex justify-between items-center'>
//                         <p className='font-primary text-lg capitalize'>{position.toLowerCase()}</p>
//                         <ArrowRightIcon className='h-4'/>
//                         </div>

//                         <div className='pt-5 gap-5 justify-between flex sm:flex-row overflow-x-auto relative'>
//                             {
//                                 candidates.data && candidates.data.map((candidate, index) => (
//                                     candidate.position === position && (
//                                         <ContestantCard contestant={candidate} key={index}/>
//                                     )
//                                 ))
//                             }
//                         </div>
//                     </div>
//                     ))
//                 }
//             </div>
//         </main>
//     </User>
//   )
// }

// export default Index;


// export const ApplyForm = ({handleChange, formValues, handleImageChange, isSuccess, isError}) => {
//     return(
//       <div className='space-y-5 py-5 font-figtree'>
//         {
//           isSuccess && (
//             <BadgeSuccess
//             message={"Application successful!"}/>
//           )
//         }
       
//         {
//           isError && (
//             <BadgeError
//             message={"You already applied for a position, contact administrator to change position!"}/>
//           )
//         }
  
//       <p className='text-sm'>Fill the form currectly.</p>
  
//       <div className='font-figtree'>
//         <label>Postion</label>
//         <select
//           type="text"
//           name="position"
//           required
//           value={formValues.title}
//           onChange={handleChange}
//           className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
//           placeholder='Job Title'
//         >
//         {
//             positions.map((position) => (
//                 <option key={position} value={position}>{position}</option>
//             ))
//         }
//         </select>
//       </div>
//       <div className='font-figtree'>
//         <input
//           type="text"
//           name="occupation"
//           required
//           value={formValues.org}
//           onChange={handleChange}
//           className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
//           placeholder='Occupation'
//         />
//       </div>
      
//       <div className='font-figtree'>
//         <label>Your Picture</label>
//         <input
//           type="file"
//           name="image"
//           required
//           value={formValues.org}
//           onChange={handleImageChange}
//           className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
//           placeholder='Occupation'
//         />
//         <small>Kindly upload a well lighted image of you.</small>
//       </div>

//       <div className='font-figtree'>
//         <textarea
//           type='text'
//           name="biography"
//           required
//           maxLength={400}
//           value={formValues.contact}
//           onChange={handleChange}
//           className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
//           placeholder='Biography'
//         />
//       </div>
//       <div>
//         <textarea
//           name="manifesto"
//           required
//           value={formValues.description}
//           onChange={handleChange}
//           className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
//           placeholder='Why should you be elected for the position above?'
//           rows={5}
//         ></textarea>
//       </div>
  
//     </div>
//     )
//   }
  

  
// export const Button = ({handleSubmit, isLoading}) => (
//     <button
//     onClick={handleSubmit}
//     disabled={isLoading}
//     type="button"
//     className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
//   >
//     {
//       isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Submit Application")
//     }
//   </button>
//   )
  