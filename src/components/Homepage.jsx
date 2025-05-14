import About from "./About"
import Process from "./Processes"
import Projects from "./Products"
import WhyChooseGt from "./WhyChooseGt"
import Ecosystem from "./Ecosystem"
import Faqs from "./Faqs"
import Contact from "./Contact"
import Footer from "./Footer"
import LandingPage from "./LandingPage"

const Homepage = () => {
  return (
    <div className="font-inter">
      <LandingPage/>
      <div className="w-11/12 mx-auto p-1">
      <About/>
      <Process/>
      <Projects/>
      </div>
      <WhyChooseGt/>
      <div className="w-11/12 mx-auto p-1">
      <Ecosystem/>
      <Faqs/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage