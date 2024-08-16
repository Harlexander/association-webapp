import Sidebar from "../components/Sidebar/Sidebar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCashRegister, faChartArea, faCog, faCube, faEnvelope, faHeadphones, faHeart, faHomeAlt, faImage, faMoneyCheckDollar, faNewspaper, faStar, faUpload, faUser, faUserAlt, faUserCheck, faUserDoctor, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { 
    name: 'Overview', 
    href: '/admin', 
    icon:  <FontAwesomeIcon icon={faHomeAlt}/>, current: true 
  },
  { 
    name: 'Members', 
    href: '/admin/members', 
    icon:  <FontAwesomeIcon icon={faUserGroup}/>, current: true 
  },
  { 
    name: 'Payments', 
    href: '/admin/payments', 
    icon:  <FontAwesomeIcon icon={faMoneyCheckDollar}/>, current: true 
  },
  { 
    name: 'Events', 
    href: '/admin/events', 
    icon:  <FontAwesomeIcon icon={faCalendarDays}/>, current: true 
  },
  { 
    name: 'News and Updates', 
    href: '/admin/news', 
    icon:  <FontAwesomeIcon icon={faNewspaper}/>, current: true 
  },
  { 
    name: 'Job Board', 
    href: '/admin/job-board', 
    icon:  <FontAwesomeIcon icon={faUserDoctor}/>, current: true 
  },
  { 
    name: 'Website Settings', 
    href: '/admin/settings', 
    icon:  <FontAwesomeIcon icon={faCog}/>, current: true 
  },
  { 
    name: 'Gallery', 
    href: '/admin/gallery', 
    icon:  <FontAwesomeIcon icon={faImage}/>, current: true 
  },
]

const userNavigation = [
]

export default function Admin({ children }) {
  return (
    <>
      <div className="relative grid sm:grid-cols-6 h-screen">
          <Sidebar 
          navigation={navigation}
          userNavigation={userNavigation}
          logo={"/logo.png"}
          />
          <div className="sm:col-span-5 bg-gray-100 overflow-y-auto min-h-screen  bg-blueGray-100">
            <DashboardHeader userNavigation={userNavigation} navigation={navigation}/>
              {children}
          </div>
      </div>    
      <ToastContainer/>
    </>  
  )
}
