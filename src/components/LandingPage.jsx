import goodtechhero from '../assets/images/goodtech-landing.jpg'
import NavBar from "./NavBar"
import Hero from "./Hero"
const LandingPage = () => {
  return (
    <div>
        <div className='h-[90vh] relative bg-cover bg-no-repeat bg-center text-gray-300 md:h-scr' style={{ backgroundImage:`url(${goodtechhero})`}}>
          <NavBar/>
          <Hero/>
        </div>
    </div>
  )
}

export default LandingPage