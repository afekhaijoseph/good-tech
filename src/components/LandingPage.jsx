import goodtechhero from '../assets/images/goodtech-landing.jpg'
import NavBar from "./NavBar"
import Hero from "./Hero"
const LandingPage = () => {
  return (
    <div>
        <div className='h-[110vh] relative bg-cover bg-no-repeat bg-center text-gray-300 md:h-screen' style={{ backgroundImage:`url(${goodtechhero})`}}>
          <NavBar/>
          <Hero/>
        </div>
    </div>
  )
}

export default LandingPage