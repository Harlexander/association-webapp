import React from 'react';
import PageHeader from "../components/Header/PageHeader";
import IndexNavbar from '../Components/Navbar/Navbar';

const Index = ({ membersData }) => {
    const profession = [
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
    ]
    const [members, setMembers] = React.useState(membersData)
    const [set, setSet] = React.useState([])
    React.useEffect(()=> {
        for(let x = 2021; x > 1985; x--){
            setSet(prev => ([...prev, x.toString()]))
        }
    }, []);

    console.log(membersData);
    
    const filter = (e) => {
        const { value, name } = e.target;
        let data;
        if(name == "set"){
            data = value !== "all" ? membersData.filter(({set}) => set == value ) : membersData;
        }else{
             data = membersData.filter(({firstname, lastname}) => (firstname+lastname).toLowerCase().includes(value.toLowerCase()) );
        }
        setMembers(data);
    }

  return (
    <div className="bg-yellow-200 min-h-screen">
        <IndexNavbar/>
        <PageHeader
        title={"Members Directory"}
        />
        <div className="mt-16">
            <p className="text-center  pb-4 md:pb-0 text-2xl md:text-3xl font-[montserrat]">Now we have <span className="text-pry font-bold">{members.length}</span> members</p>
        </div>

        <div className="md:flex justify-center gap-4 space-y-2 md:space-y-0">
            <div className="text-center font-nunito md:py-8">
                <input className="p-4 border-0 md:w-[25rem]" 
                placeholder="Search By Name" 
                type={'text'}
                onChange={filter}/>
                <button
                className="p-4 bg-pry text-[white]"
                >Search</button>
            </div>
            <div className="text-center hidden md:block text-[white] space-x-4 font-nunito md:py-8">
                <select onChange={filter} placeholder={'filter by set'} name="set" className="md:p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Set</option>
                    <option className="text-[white]" value={"all"}>All Set</option>
                    {
                        set.reverse().map((set, index) => (
                            <option key={index} value={set} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
                <select placeholder={'filter by profession'} className="md:p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Profession</option>
                    <option className="text-[white]">All Profession</option>
                    {
                        profession.map((set, index) => (
                            <option key={index} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
            </div>
        </div>

        <div className="overflow-x-auto font-nunito relative py-10 px-5 md:px-24">
    <table className="w-full text-lg text-center text-left ">
        <thead className="bg-pry text-[white]">
            <tr>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                   Member Name
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Set
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Email
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Profession
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 ">
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {
                members.map(({city, firstname, lastname, email, profession, set}, index) => (
                    <tr key={index} className="bg-white py- border-b dark:bg-gray-800 dark:border-gray-700 text-lg">
                    <th scope="row" className="py-1 md:py-6 px-6 font-medium bg-[#c5b2dd] whitespace-nowrap dark:text-white">
                        {firstname} {lastname}
                    </th>
                    <td className="py-1 md:py-6 px-6">
                       {set}
                    </td>
                    <td className="py-1 md:py-6 bg-[#c5b2dd] px-6">
                      <a href={`tel:${email}`} className="underline">
                         {email}
                      </a>
                    </td>
                    <td className="py-1 md:py-6 px-6">
                        N/A
                    </td>
                    <td className="py-1 md:py-6 bg-[#c5b2dd] px-6">
                        N/A
                    </td>
                </tr>
                ))
            }
        </tbody>
    </table>
    {
                members.length === 0 && (
                    <p className='text-xl font-montserrat text-center py-20'>No Members Found</p>
                )
            }
</div>
    </div>
  )
}

export default Index