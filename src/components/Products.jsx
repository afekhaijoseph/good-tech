import efficoIcon from '../assets/effico-icon.png'
import efficobg from '../assets/images/effico-bg.png'
import fittokbg from '../assets/images/fittok-bg.jpg'
import couplesyncbg from '../assets/images/couplesync-bg.jpg'
const Projects = () => {
  return (
    <div id="products" className="my-20">
        <h2 className="text-4xl font-bold text-center text-blue-950 my-3">Our Products</h2>
        <h4 className="text-xl text-center my-5">Innovative solutions designed for real-world impact</h4>

        <div className="flex flex-col gap-6 md:w-8/12 md:mx-auto lg:flex-row lg:w-full">

        <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[450px]" style={{backgroundImage: `url(${efficobg})`}}>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className='flex items-center gap-2 text-gray-300'>
              <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-accentshade to-[rgb(48,204,247)]">Effico</h3>
            </div>
            <div>
              <p className="font-bold text-center my-3 text-xl text-gray-300">The Smarter Way to Study</p>
              <p className="text-lg text-center">Effico is an AI-powered study assistant designed for students who want to optimize learning, boost productivity, and stay ahead. With personalized recommendations and study tracking, Effico makes every session count.</p>
            </div>
            <div className="w-full flex">
              <button className="w-10/12 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-accentshade" >Discover Effico</button>
            </div>
          </div>
        </div>

          <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[450px]" style={{backgroundImage: `url(${fittokbg})`}}>
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className='flex items-center gap-2 text-gray-300'>
                <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-accentshade">FitTok </h3>
              </div>
              <div>
                <p className="text-xl font-bold text-center my-3 text-gray-300">Where Fitness Meets Community</p>
                <p className="text-lg text-center text-gray-300" >FitTok transforms workouts into dynamic challenges and competitions that keep users engaged, motivated, and accountable. Fitness should be fun, and with FitTok, every step, rep, and move counts.</p>
              </div>
              <div className="w-full flex">
                <button className="w-10/12 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-gradient-to-r from-[rgba(51,51,153,0.8)] to-[rgb(48,204,247,0.8)] hover:from-[rgba(51,51,153)] hover:to-[rgb(48,204,247)]" >Explore FitTok</button>
              </div>
            </div>
        </div>

        <div className="relative rounded-md shadow-lg basis-full gap-1 p-3 bg-cover bg-center text-gray-300 md:max-h-[500px] lg:max-h-[450px]" style={{backgroundImage: `url(${couplesyncbg})`}}>
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className='flex items-center gap-2 text-gray-300'>
                <img className="h-6 aspect-square" src={efficoIcon} alt=""/>
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-accentshade">CoupleSync</h3>
              </div>
              <div>
                <p className="text-xl font-bold text-center my-3 text-gray-300">Redefining relationships through technology</p>
                <p className="text-lg text-center text-gray-300">CoupleSync is an AI-powered relationship app that helps couples communicate better, resolve conflicts, and deepen their connection. It serves as a personal coach, mediator, and emotional translator</p>
              </div>
              <div className="w-full flex">
                <button className="w-10/12 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-accent" >Explore FitTok</button>
              </div>
            </div>
        </div>

        </div>
        <p className="text-center my-8 text-lg">More groundbreaking products are coming soon.</p>
    </div>
  )
}
 
export default Projects