import React from 'react'
import { SolidButton } from '../../components/Button/Button'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../Components/Navbar/Navbar'
import { Link } from '@inertiajs/react'

const gallery = [

  {
      category : "SJSS-1986-set-socials-and-networking-reception",
      description : "SJSS 1986 Set June 2022 Socials and Networking reception. Thanks to Mr. Oladipo Otuyelu for hosting",
      images : [
          {
              image : "sjss1986 (1).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (2).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (3).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (4).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (5).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (6).jpg",
              caption : ""
          },
          {
              image : "sjss1986 (7).jpg",
              caption : ""
          }
      ]
  },
  {
      category : "2009-set-10th-anniversary",
      description : "2009 Set 10th-anniversary celebration with giveaways to their Set members.",
      images : [
          {
              image : "1992set1.jpeg",
              caption : ""
          },
          {
              image : "1992set2.jpeg",
              caption : ""
          },
          {
              image : "1992set3.jpeg",
              caption : ""
          },
          {
              image : "1992set4.jpeg",
              caption : ""
          },
          {
              image : "1992set5.jpeg",
              caption : ""
          },
          {
              image : "1992set6.jpeg",
              caption : ""
          },
          {
              image : "1992set7.jpeg",
              caption : ""
          },
          {
              image : "1992set8.jpeg",
              caption : ""
          },
          {
              image : "1992set9.jpeg",
              caption : ""
          },
      ]
  },
  {
      category : "1986-set-donation",
      description : "1986 Set donation of a projector and computer to St. Joseph Junior Secondary School (November 2021)",
      images : [
          {
              image : "1986donations (1).jpg",
              caption : ""
          },
          {
              image : "1986donations (2).jpg",
              caption : ""
          },
          {
              image : "1986donations (3).jpg",
              caption : ""
          },
          {
              image : "1986donations (4).jpg",
              caption : ""
          },
          {
              image : "1986donations (5).jpg",
              caption : ""
          },
          {
              image : "1986donations (6).jpg",
              caption : ""
          }
      ]
  },
  {
      category : "celebrating-the-2021-birthday-of-the-first-principal",
      description : "1986 Set celebrating the 2021 birthday of the first principal of St. Joseph Secondary School, Surulere Lagos",
      images : [
          {
              image : "principal (1).jpg",
              caption : ""
          },
          {
              image : "principal (2).jpg",
              caption : ""
          },
          {
              image : "principal (3).jpg",
              caption : ""
          },
          {
              image : "principal (4).jpg",
              caption : ""
          },
      ]
  },
  {
      category : "distribution-of-exercise-book-by-1992-set",
      description : "Distribution of exercise book to both Junior and Senior schools by 92 Set last month",
      images : [
          {
              image : "exercisebook.jpeg",
              caption : ""
          },
          {
              image : "exercisebook (2).jpeg",
              caption : ""
          }
      ]
  },
  {
      category : "chairs-for-library-and-generator-by-1995-set",
      description : "Chairs for the library and generator capable of pumping water for the school. Donated by SJSS class of 1995",
      images : [
          {
              image : "sjss1995.jpeg",
              caption : ""
          },
          {
              image : "sjss1995 (2).jpeg",
              caption : ""
          },
          {
              image : "sjss1995 (3).jpeg",
              caption : ""
          },
      ]
  },
  {
      category : "rural-mental-health-advocacy-2004-set",
      description : "Onyeche James 2004 Set. 2019 Rural mental health advocacy and motivational speech at St. Joseph Secondary School Suru Lere.",
      images : [
          {
              image : "mentalhealth (1).jpeg",
              caption : ""
          },
          {
              image : "mentalhealth (2).jpeg",
              caption : ""
          },
          {
              image : "mentalhealth (3).jpeg",
              caption : ""
          },
      ]
  },
  {
      category : "donation-of-exercise-book-by-1987-set",
      description : "June 2021, Mr. Tony Agbugba (right) and Mr. Akeem Ajayi (extreme left) Pose with the principal and some St. Joseph Junior Secondary School, Suru Lere,  after donating some exercise books by the 1987 Set.",
      images : [
          {
              image : "87set (1).jpeg",
              caption : ""
          },
          {
              image : "87set (2).jpeg",
              caption : ""
          },
          {
              image : "87set (3).jpeg",
              caption : ""
          },
      ]
  },
  {
      category : "august-2021-maiden-reunion",
      description : "August 2021, some members of the 1987 Set pose with our pioneer principal, Mrs. Olagbemi, during their maiden reunion.",
      images : [
          {
              image : "pioneer (1).jpeg",
              caption : ""
          },
          {
              image : "pioneer (2).jpeg",
              caption : ""
          },
          {
              image : "pioneer (3).jpeg",
              caption : ""
          },
          {
              image : "pioneer (4).jpeg",
              caption : ""
          },
          {
              image : "pioneer (5).jpeg",
              caption : ""
          }
      ]
  },
  {
      category : "covid-19-hand-wash-facility",
      description : "COVID-19 hand wash facility built and donated to St. Joseph Secondary School, Suru Lere, by the 1987 Set",
      images : [
          {
              image : "handwash (1).jpeg",
              caption : ""
          }
      ]
  },
  {
    category : "presentation-of-talking-drums",
    description : "The presentation of talking drums, Sekere and Agogo was done today 30th March 2022. Many thanks to Mr. Anthony Ashikodi (1986 set)",
    images : [
        {
            image : "/../gallery1.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        },
        {
            image : "/../placeholder.jpeg",
            caption : ""
        }
    ]
},
]

const Index = ({categories}) => {

    console.log(categories);

  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"Gallery And Photo News"}/>
         
        <div className='md:py-20 md:px-28 px-5 py-10'>
          <div className='grid md:grid-cols-3 gap-4'>
            {
            categories.map(({name, description, images, id}) => (
                <Link href={`gallery/${id}`} key={id}>
                  <CategoryCard 
                    category={name}
                    content={description}
                    img={images[0]?.image_path}/>
                </Link>
            ))
          }
          </div>
          
        </div>
    </div>
  )
}

export default Index

const CategoryCard = ({category, content, img}) => {
  return(
    <div class="flex justify-center col-1">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="rounded-t-lg h-64 w-full" style={{objectFit : "cover"}} src={img} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl capitalize font-medium mb-2 font-primary">{category.replace(/-/g, " ")}</h5>
          <p class="text-gray-700 text-base mb-4 font-nunito">
          {content}
          </p>
        </div>
      </div>
    </div>
  )
}