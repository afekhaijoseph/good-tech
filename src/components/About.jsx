import about from '../assets/images/about.jpg'
const About = () => {
  return (
    <div id="about" className="text-gray-600 my-10 text-lg md:w-3/4 mx-auto">
      <h2 className="text-4xl text-blue-950 font-bold text-center my-3 font-orbitron">About Us</h2>
      <div className="flex flex-col gap-10 my-10 items-center md:flex-row">
         <div className="basis-full">
           <img className="w-full"src={about} alt="About us image" />
         </div>
      <div className="basis-full px-5">
        <p className="text-xl text-left mb-14">Good Tech HQ is built on a single, unwavering mission, to create technology that makes a difference.</p>
        <p className="text-left">We believe that innovation is not just about building products; it's about identifying problems, engineering solutions, and ensuring lasting impact. Our approach is structured into four core divisions, each essential to the product journey:</p>
      </div>
      </div>
    </div>
  )
}

export default About