import Sidebar from "../components/Sidebar/Sidebar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import { ArrowRightCircleIcon, CheckBadgeIcon, CreditCardIcon, CurrencyDollarIcon, DocumentDuplicateIcon, ExclamationCircleIcon, HomeIcon, UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCashRegister, faChartArea, faCube, faEnvelope, faHeadphones, faHeart, faHome, faHomeAlt, faMoneyCheckDollar, faNewspaper, faSpinner, faStar, faUpload, faUser, faUserAlt, faUserCheck, faUserDoctor, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { UserProvider, useUser } from "../lib/user";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useMutation, useQuery } from "react-query";
import { api } from "../lib/axios";
import { initiatePayment, verifyPayment } from "../lib/payment";


const navigation = [
    { 
      name: 'Overview', 
      href: '/dashboard', 
      icon:  <FontAwesomeIcon icon={faHomeAlt}/>, current: true 
    },
    { 
      name: 'Members', 
      href: '/dashboard/members', 
      icon:  <FontAwesomeIcon icon={faUserGroup}/>, current: true 
    },
    { 
      name: 'Payments', 
      href: '/dashboard/dues', 
      icon:  <FontAwesomeIcon icon={faMoneyCheckDollar}/>, current: true 
    },
    // { 
    //   name: 'Election', 
    //   href: '/dashboard/election', 
    //   icon:  <FontAwesomeIcon icon={faUserCheck}/>, current: true 
    // },
    { 
      name: 'Events', 
      href: '/dashboard/events', 
      icon:  <FontAwesomeIcon icon={faCalendarDays}/>, current: true 
    },
    { 
      name: 'News and Updates', 
      href: '/dashboard/news', 
      icon:  <FontAwesomeIcon icon={faNewspaper}/>, current: true 
    },
    { 
      name: 'Job Board', 
      href: '/dashboard/job-board', 
      icon:  <FontAwesomeIcon icon={faUserDoctor}/>, current: true 
    },
  ]
  
  const userNavigation = [
    { 
      name: 'Profile', 
      icon:  <FontAwesomeIcon icon={faUserAlt}/>,
      href: '/dashboard/profile' 
    },
    { 
      name: 'Back Home', 
      icon:  <FontAwesomeIcon icon={faHome}/>,
      href: '/' 
    },
  ]
  
//   function MyModal() {
//     const { token } = useUser();
//     const url = typeof window !== 'undefined' && window.location.href;
  
//     const { query : { reference } } = useRouter();
  
//     const initiate = useMutation(async (data) => await initiatePayment(data, token), { onSuccess : ({authorization_url}) => window.location.href = authorization_url });
  
//     const verify = useQuery(['verify_due'], async () => await verifyPayment(token, reference), { enabled : ( token !== null && reference !== undefined )});
   
//     let [isOpen, setIsOpen] = useState(false);
  
//     const body = {
//       amount : 1500,
//       purpose : "registration fee",
//       callback_url : url,
//       payment_id : "sjssaa"
//     }
    
//     const status = useQuery(['due_status'], async () => {
//       const {data} = await api.get("/due-status" , { headers : { Authorization : `Bearer ${token}`} } )
    
//       return data;
//     }, { enabled : (token !== null), onSuccess : (data) => !data && setIsOpen(false), retry : 0 });
  
//     function closeModal() {
//       setIsOpen(true)
//     }
  
//     return (
//       <>
//         <Transition appear show={isOpen} as={Fragment}>
//           <Dialog as="div" className="relative z-10" onClose={closeModal}>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-25" />
//             </Transition.Child>
  
//             <div className="fixed inset-0 overflow-y-auto">
//               <div className="flex min-h-full items-center justify-center p-4 text-center">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-out duration-300"
//                   enterFrom="opacity-0 scale-95"
//                   enterTo="opacity-100 scale-100"
//                   leave="ease-in duration-200"
//                   leaveFrom="opacity-100 scale-100"
//                   leaveTo="opacity-0 scale-95"
//                 >
//                   <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                     <Dialog.Title
//                       as="h3"
//                       className="text-lg font-medium leading-6 text-gray-900 font-figtree"
//                     >
//                       {
//                         verify.isIdle && 'Registration Fee'
//                       }
//                       { verify.isSuccess && "Payment Sucessful!"}
//                       { verify.isLoading && "Please Wait!"}
//                     </Dialog.Title>
//                     <div className="mt-2">
//                       {
//                         verify.isIdle && (
//                             <p className="text-sm font-figtree text-gray-500">
//                               Registration fee of N1,500.00 is neccessary for continuation of usage of this platform. 
  
//                               Click the button and you will be redirected to a secured payment page.
//                             </p>                        
//                         )
//                       }
  
//                       {
//                         verify.isSuccess && (
//                           <p className="text-sm text-center font-figtree text-gray-500">
//                             <CheckBadgeIcon className="h-28 mx-auto text-green-500"/>
//                           </p>
//                         )
//                       }
  
//                       {
//                         verify.isLoading && (
//                           <div className="flex">
//                             <FontAwesomeIcon icon={faSpinner} spin className="text-pry text-5xl mx-auto"/>
//                           </div>
//                         )
//                       }
  
//                     </div>
  
//                     <div className="mt-4">
//                       {
//                         verify.isIdle && (
//                           <button
//                             type="button"
//                             className="inline-flex justify-center font-figtree rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                             onClick={() => initiate.mutate(body)}
//                           >
//                             { initiate.isLoading ? <FontAwesomeIcon icon={faSpinner} spin/> : "Pay Now"}
//                           </button>
//                             )
//                       }
//                       {
//                         verify.isSuccess && (
//                           <button
//                         type="button"
//                         className="inline-flex justify-center font-figtree rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         Close
//                       </button>
//                         )
//                       }
//                     </div>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </div>
//           </Dialog>
//         </Transition>
//       </>
//     )
//   }

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="relative grid sm:grid-cols-6 h">
            <Sidebar 
              navigation={navigation}
              userNavigation={userNavigation}
              logo={"/logo.png"}
            />
            {/* <MyModal/> */}
            <div className="col-span-5 h-screen overflow-y-auto bg-gray-100 min-h-screen bg-blueGray-100">
                  <DashboardHeader userNavigation={userNavigation} navigation={navigation}/>
                {children}
            </div>
        </div>    
    );
}
