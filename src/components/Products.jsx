import efficoIcon from '../assets/effico-icon.png'
import efficobg from '../assets/images/effico-bg.png'
import fittokbg from '../assets/images/fittok-bg.jpg'
import couplesyncbg from '../assets/images/couplesync-bg.jpg'
const Projects = () => {
  return (
    <div id="products" className="my-20">
        <h2 className="text-4xl font-bold text-center text-blue-950 my-3 font-orbitron">Active Projects</h2>
        <h4 className="text-center my-5 text-gray-600">Current innovations in development at our lab</h4>

        <div className="flex flex-col gap-6 lg:gap-8 md:w-1/2 md:mx-auto lg:flex-row lg:w-10/12">
        <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[450px]" style={{backgroundImage: `url(${efficobg})`}}>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className='flex items-center gap-2 text-gray-300'>
              <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-accentshade to-[rgb(48,204,247)]">Effico Ai</h3>
            </div>
            <div>
              <p className="text-center">AI-powered productivity suite that learns from user behavior to optimize workflows and boost efficiency.</p>
             <div className='my-3 flex flex-col gap-1'>
               <div className='w-full flex items-center justify-between text-sm'>
                <p>progress</p>
                <p>75%</p>
              </div>
              <div className='bg-gray-300 w-full h-3 rounded-md'>
                <div className='w-3/4 h-full bg-accentshade rounded-tl-md rounded-bl-md'></div>
              </div>

             </div>
              <div>
                <p className='font-semibold'>Key Features</p>
                <ul className='product-features text-base'>
                  <li>Smart Task Mangement</li>
                  <li>Workflow Automation</li>
                  <li>Performance Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

         <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[450px]" style={{backgroundImage: `url(${fittokbg})`}}>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className='flex items-center gap-2 text-gray-300'>
              <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-accentshade to-[rgb(48,204,247)]">Fittok</h3>
            </div>
            <div>
              <p className="text-center">Comprehensive health and wellness platform with personalized fitness recommendations and progress tracking.</p>
             <div className='my-3 flex flex-col gap-1'>
               <div className='w-full flex items-center justify-between text-sm'>
                <p>progress</p>
                <p>90%</p>
              </div>
              <div className='bg-gray-300 w-full h-3 rounded-md'>
                <div className='w-[90%] h-full bg-accentshade rounded-tl-md rounded-bl-md'></div>
              </div>

             </div>
              <div>
                <p className='font-semibold'>Key Features</p>
                <ul className='product-features text-base'>
                  <li>Personalized Workouts</li>
                  <li>Health Metrics</li>
                  <li>Social Challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

                 <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[450px]" style={{backgroundImage: `url(${couplesyncbg})`}}>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className='flex items-center gap-2 text-gray-300'>
              <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-accentshade to-[rgb(48,204,247)]">CoupleSync</h3>
            </div>
            <div>
              <p className="text-center">Relationship management application helping couples stay connected through shared goals and communication tools.</p>
             <div className='my-3 flex flex-col gap-1'>
               <div className='w-full flex items-center justify-between text-sm'>
                <p>progress</p>
                <p>60%</p>
              </div>
              <div className='bg-gray-300 w-full h-3 rounded-md'>
                <div className='w-[60%] h-full bg-accentshade rounded-tl-md rounded-bl-md'></div>
              </div>

             </div>
              <div>
                <p className='font-semibold'>Key Features</p>
                <ul className='product-features text-base'>
                  <li>Shared Calendars</li>
                  <li>Mood Tracking</li>
                  <li>Communication Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}
 
export default Projects