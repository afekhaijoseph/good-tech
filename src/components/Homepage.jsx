import Research from "./Research"
import Process from "./Lab"
import Projects from "./Products"
import Ecosystem from "./Ecosystem"
import Footer from "./Footer"
import LandingPage from "./LandingPage"
import LabTeam from "./LabTeam"

const Homepage = () => {
  return (
    <div className="font-inter">
      <LandingPage/>
      <div className="w-11/12 mx-auto p-1">
      <Research/>
      <Projects/>
      <Process/>
      <LabTeam/>
      </div>
      <Ecosystem/>
      <Footer/>
    </div>
  )
}

export default Homepage