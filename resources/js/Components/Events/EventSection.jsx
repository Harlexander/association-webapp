import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import moment from 'moment';
import { OutlineButton, SolidButton } from '../Button/Button';

const EventSection = ({ events = []}) => {
console.log({events})
  return (
    <div id='events' className="flex flex-col space-y-28 items-center py-16 justify-center  md:py-28 bg-white">
        <Fade>
          <p className="text-3xl md:text-5xl font-primary text-center px-10">SJSSAA Upcoming Events</p>
        </Fade>

        <Carousel className="w-full">
          <CarouselContent>
            {
              events.map((event, index) => (
                <CarouselItem key={index}>
                  <div
                  className='md:grid grid-cols-5 gap-10 sm:px-16 px-5'>
                    <div className="col-span-2 md:h-full md:w-full relative">
                            <div className='h-full md:flex items-center'>
                                <img className="shadow-lg"  src={`${event.image}`}/>  
                            </div>
                    </div>
        
                    <div className='col-span-3 space-y-5 pt-10 md:py-10 md:px-10'>
                        <p className='font-primary text-4xl'>
                            {event.title}
                        </p>
        
                        <p className='font-nunito'>
                        {event.description}
                        </p>
        
                        <div className="flex justify-between hidden">
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>00</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Days</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>00</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Hours</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>00</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Mins</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>00</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Secs</p>
                            </div>
                        </div>
        
                        <p className='font-primary text-2xl' >{moment(event.date).format("dd, Do MMM YYYY")}</p>
        
                        <div className='flex gap-3'>
                            <SolidButton
                            title={"Register"}
                            additionalClass={"font-primary w-full py-2 "}
                            />
                            <OutlineButton
                            title={"Join Event"}
                            additionalClass={"font-primary w-full py-2"}
                            />
                        </div>
                    </div>
                </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default EventSection
