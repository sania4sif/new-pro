import FeaturedCourses from "@/components/FeaturedCourses"
import FeaturedWebinars from "@/components/FeaturedWebinars"
import HeroSection from "@/components/Herosection"
import Navbar from "@/components/Navbar"
import TestiMonialCard from "@/components/TestiMonialCard"
import WhyChooseUs from "@/components/WhyChooseUs"

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
      <TestiMonialCard/>
    </div>
  )
}

export default page
