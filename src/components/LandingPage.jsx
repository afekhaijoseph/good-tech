import goodtechhero from '../assets/images/goodtech-landing.jpg'
import NavBar from "./NavBar"
import Hero from "./Hero"
const LandingPage = () => {
  return (
    <div>
        <div className='h-screen relative bg-cover bg-no-repeat bg-center text-gray-300' style={{ backgroundImage:`url(${goodtechhero})`}}>
          <NavBar/>
          <Hero/>
        </div>
    </div>
  )
}

export default LandingPage