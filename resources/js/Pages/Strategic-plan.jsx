import React from 'react'
import PageHeader from '../components/Header/PageHeader'
import UnderConstruction from '../components/Header/UnderConstruction'
import IndexNavbar from '../Components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"SJSSAA Strategic Plan 2022-2025"}/>
         
         <div className='py-10 px-2 md:p-24'>

          <div className='md:grid mb-10 grid-cols-2'>
            <div className='col-1'>
              <div className='space-y-5 pb-5'>
                <p className='font-nunito'><span className='block font-montserrat text-xl md:text-3xl pb-4'>Mission</span> The mission statement of SJSSAA is to advance SJSS and its alumni in the pursuit of excellence in education, goodwill in the community, and well-being of its members.</p>     

                <p className='font-nunito'><span className='block font-montserrat text-xl md:text-3xl pb-4'>Vision:</span> The vision statement of SJSSAA is to support, connect, and celebrate SJSS and its alumni.</p>
              </div>
              <p className='font-montserrat text-xl md:text-3xl'>Core Values</p>
              <ul className='font-nunito py-5 space-y-1 pl-6'>
                  <p>
                      Respect
                  </p>
                  <p>
                      Integrity
                  </p>
                  <p>
                      Transparency
                  </p>
                  <p>
                      Dedication to continuous success, and
                  </p>
                  <p>
                    Commitment to professionalism
                  </p>
              </ul>


              <div className='py-5'>
                  <p className='font-montserrat text-xl md:text-3xl'>SJSSAA Goals</p>
              
                    <ol className='font-nunito space-y-1 pl-6 py-5'>
                      <li>1.	Promote and facilitate social interaction between its members and the school</li>
                      <li>2.	Facilitate and maintain interest in the well-being of st. Joseph secondary school of surulere, lagos, among the alumni.</li>
                      <li>3.	Support the internal stakeholders of the school as needed.</li>
                      <li>4.	To do all other things as may be considered necessary, particularly in the interest of the association, the school, and humanity</li>
                    </ol>
              </div>
            </div>
            <div className='col-1'>
              <img src='strategy.png' className='w-full'/>
            </div>
          </div>

           <div className='space-y-5'>
              <p className='font-montserrat md:text-xl'><span className='font-bold'>Goal 1 :</span>  Promote and facilitate social interaction between its members and the school</p>
           
              <div className='md:overflow-hidden overflow-scroll'>
               <table className='font-nunito table-fixed'>
                        <thead className='border border-white md:border-2 border-black p-4'>
                          <tr>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Measureable<span className='invisible'>.</span>Objectives
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Action<span className='invisible'>.</span>Steps<span className='invisible'>...............</span>
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Target<span className='invisible'>.</span>Dates of Completion
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Primary Person or Unit Responsible
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective A :</span> To ensure all sets of alumni are duly represented
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To actively communicate and advocate for new alumni sets via Newsletters, utilizing the award and recognition day to advocate for new alumni Sets
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            At least monthly, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO, President, General Secretary, or PRO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          <tr>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To actively communicate and advocate for new alumni sets via Newsletters, utilizing the award and recognition day to advocate for new alumni Sets
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            At least monthly, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO, President, General Secretary, or PRO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                              
                            </td>
                          </tr>

                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective B :</span>To ensure all sets of alumni are actively represented
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Ensure that new Sets are active after ten (10) years of graduation from SJSS (by helping in the creation of Sets, etc.)                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO, President, PRO, or Membership Committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          
                          <tr>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Create a Set Representative Committee (Each Set must have at least two or more members as members of the Set Representative Committee)                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To be initiated in the year 2022                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                              
                            </td>
                          </tr>


                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective C :</span>To ensure effective communication between the Association and the school management
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            The EXCO should ensure adequate communication between the Association and school management
                           </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To be initiated in the year 2022                           
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                        </tbody>
               </table>
              </div>
           </div>

           <div className='space-y-5 py-16'>
              <p className='font-montserrat md:text-xl'><span className='font-bold'>Goal 2:</span>  Facilitate and maintain interest in the well-being of st. Joseph secondary school of surulere, lagos, among the alumni.</p>
              <div className='md:overflow-hidden overflow-scroll'>
              <table className='font-nunito'>
                        <thead className='border border-white md:border-2 border-black p-4'>
                          <tr>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Measureable<span className='invisible'>.</span>Objectives
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Action<span className='invisible'>.</span>Steps<span className='invisible'>...............</span>
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Target<span className='invisible'>.</span>Dates of Completion
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Primary Person or Unit Responsible
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective A :</span>  To give constant and updated information on the status of the school, it&apos;s infrastructure, and students
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Physical visits to the schools
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          <tr>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Check with SJSS/PTA on Medium-Term Sector Strategies (MTSS) implementation and need assessment status. If necessary, Contact the Ministry of Education (District 6) about the status of SJSS infrastructure
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Welfare Committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                              
                            </td>
                          </tr>

                          <tr>
                            <td className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective B :</span>To have a standing Committee on welfare, handling the welfares of the association members
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Create the Welfare Committee and incorporate it into the bylaws
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To be initiated in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            </td>
                        
                          </tr>
                        </tbody>
                      </table>
              </div>
           </div>

           <div className='space-y-5'>
              <p className='font-montserrat md:text-xl'><span className='font-bold'>Goal 3 :</span>  Support the internal stakeholders of the school as needed. </p>
              <div className='md:overflow-hidden overflow-scroll'>
              <table className='font-nunito'>
                        <thead className='border border-white md:border-2 border-black p-4'>
                          <tr>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Measureable<span className='invisible'>.</span>Objectives
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Action<span className='invisible'>.</span>Steps<span className='invisible'>...............</span>
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Target<span className='invisible'>.</span>Dates of Completion
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Primary Person or Unit Responsible
                            </th>
                            <th className='border border-white md:border-2 w-1/4 text-left border-black p-4' scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={3} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective A :</span> School supplies and other needs (i.e., computer, books, printer, lab resources, tutors, etc.)
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Check with SJSS/PTA on MTSS implementation and need assessment status
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Welfare Committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          <tr>
                          <td className='border border-white md:border-2 border-black p-4'>
                          Delegate it to Welfare Committee                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Welfare Committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          <tr>
                          <td className='border border-white md:border-2 border-black p-4'>
                          Providing tutoring opportunities as needed                           </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Welfare Committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>

                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective B :</span>Award/Recognition day (i.e., academic, sports, extra-curricular activities, students, faculty and staff)
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Work with SJSS/PTA management to support them on this objective
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Annually, beginning in the year 2022                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO (may create an Award/Recognition Committee)
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                          
                          <tr>
                            <td className='border border-white md:border-2 border-black p-4'>
                            Work with SJSS/PTA to support annual Inter-house sports (with special activities for parents)
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To be initiated in the year 2023                            
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO/Welfare committee
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                              
                            </td>
                          </tr>


                          <tr>
                            <td rowSpan={2} className='border border-white md:border-2 border-black p-4'>
                              <span className='font-bold'>Objective C :</span>Organize student leadership development Forum
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                              Facilitate future leaders forum for incoming prefects and final year students
                             </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            To be initiated in the year 2023                           
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>
                            SJSSAA EXCO/nominate/hire the appropriate prson
                            </td>
                            <td className='border border-white md:border-2 border-black p-4'>

                            </td>
                          </tr>
                        </tbody>
                      </table>
              </div>
           </div>
         </div>
    </div>
  )
}

export default Index