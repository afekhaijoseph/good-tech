import { FaRobot, FaHeartPulse, FaPeopleGroup, FaUserCheck } from "react-icons/fa6"
import ai from "../assets/ai.png"
import health from "../assets/healthcare.png"
import social from "../assets/network.png"
import ux from "../assets/ux.png"
const Research = () => {
  return (
    <div id="research" className="text-gray-600 my-10 md:w-3/4 lg:w-full mx-auto">
      <div>
        <h2 className="text-4xl text-blue-950 font-bold text-center my-3 font-orbitron">Research Areas</h2>
        <p className='text-center'>Our lab focuses on cutting-edge research across multiple domains to create impactful solutions</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-3'>
        <div className="flex flex-col gap-2 border border-gray-200 hover:shadow-lg p-4 rounded-md">
        <div className="w-12">
            <img src={ai} alt="" />
        </div>
        <h3 className='text-xl text-accent font-semibold'>Artificial Intelligence</h3>
        <p>Developing AI solutions that enhance productivity and decision-making across various domains.</p>
        <div className='flex flex-wrap gap-2 text-sm'>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>Effico Ai</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>Smart Assistants</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>TeachMeAi</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>Elandee</p>
        </div>
      </div>
         <div className="flex flex-col gap-2 border border-gray-200 hover:shadow-lg p-4 rounded-md">
         <div className="w-12">
                             <img src={health} alt="" />
                         </div>
        <h3 className='text-xl text-accent font-semibold'>Health & Wellness Tech</h3>
        <p>Creating technology that promotes personal health and fitness optimization.</p>
        <div className='flex gap-2 text-sm'>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>Fittok</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'> Wellness Analytics</p>
        </div>
      </div>
         <div className="flex flex-col gap-2 border border-gray-200 hover:shadow-lg p-4 rounded-md">
         <div className="w-12">
                             <img src={social} alt="" />
                         </div>
        <h3 className='text-xl text-accent font-semibold'>Social Connection</h3>
        <p>Building platforms that strengthen human relationships and communication.</p>
        <div className='flex gap-2 text-sm'>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>CoupleSync</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'> Community Tools</p>
        </div>
      </div>
         <div className="flex flex-col gap-2 border border-gray-200 hover:shadow-lg p-4 rounded-md">
        <div className="w-12">
            <img src={ux} alt="" />
        </div>
        <h3 className='text-xl text-accent font-semibold'>User Experience</h3>
        <p>Researching intuitive interfaces and seamless user interactions.</p>
        <div className='flex gap-2 text-sm'>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>Design Systems</p>
          <p className='bg-accentshade/20 text-accent rounded-full py-1 px-2'>UX Research</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Research