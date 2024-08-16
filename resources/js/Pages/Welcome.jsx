import AboutSection from "@/Components/About/AboutSection";
import HeroCarousel from "@/Components/Carousel/HeroCarousel";
import QuestionSection from "@/Components/Contact/QuestionSection";
import EventSection from "@/Components/Events/EventSection";
import ExcosSections from "@/Components/Excos/ExcosSections";
import FooterSection from "@/Components/Footer/FooterSection";
import GallerySection from "@/Components/Gallery/GallerySection";
import IndexNavbar from "@/Components/Navbar/Navbar";
import ResponsilbiltySection from "@/Components/Responsibility/ResponsilbiltySection";

export default function Index({ data }) {

  return (
    <>
      <IndexNavbar/>
      <HeroCarousel data={data}/>
      <AboutSection data={data}/>
      <GallerySection data={data}/>
      <ResponsilbiltySection data={data}/>
      <EventSection events={data.events}/>
      <ExcosSections data={data}/>
      <QuestionSection data={data}/>
      <FooterSection data={data}/>
    </>
  )
}
