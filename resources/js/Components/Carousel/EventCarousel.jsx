import Carousel from 'better-react-carousel'
import React from 'react'
import { useCountdown } from '../countdown/countdown'

const EventCarousel = ({events = []}) => {
    const { days, minutes, hours, seconds } = useCountdown("Dec 28, 2024")    
    return (
    <div className="w-full md:px-28">
    <Carousel cols={1} rows={1} loop autoplay={true} autoPlay={100}>
        {
            events.map((event, index) => {
            return(
                <Carousel.Item key={index}>

                </Carousel.Item>
            )})
        }
     </Carousel>
</div>
  )
}

export default EventCarousel
