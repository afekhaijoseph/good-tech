import { Briefcase, Rocket, Search, TrendingUp } from "lucide-react"
const Process = () => {
  return (
    <div className="mx-auto">
        <h2 className="text-4xl text-blue-950 font-bold text-center my-3 font-orbitron">Our Process</h2>
        <div className="my-10 text-blue-950 grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="lab shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-2">
              <Search size={48} stroke="#28395d"/>
              <h3 className="font-bold">Lab</h3>
              <p>The birthplace of ideas. We explore, experiment, and refine groundbreaking concepts. </p>
            </div>
         
        <div className="studio shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <Briefcase size={48} stroke="#28395d"/>
            <h3 className="font-bold">Studio</h3>
            <p>Where ideas take shape. Through cutting-edge development and design, we bring concepts to life.</p>
        </div>

        <div className="launchpad shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <Rocket size={48} stroke="#28395d"/>
            <h3 className="font-bold">Launchpad</h3>
            <p>Where products meet the world. We drive market adoption and scale growth.</p>
        </div>

        <div className="observatory shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-3 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <TrendingUp size={48} stroke="#28395d"/>
            <h3 className="font-bold">Observatory</h3>
            <p>The birthplace of ideas. We explore, experiment, and refine groundbreaking concepts. </p>
        </div>
    </div>
    
    <p className=" text-center my-10 text-gray-600">From FitTok, a social fitness movement, to Effico AI, a smart study assistant, Good Tech HQ is committed to building solutions that redefine how people engage, learn, and thrive.</p>
    <p className="text-blue-950 font-bold text-lg text-center">Innovation isn't an event. It's a process. And we own every step.</p>
      
      <div className="flex items-center my-5">
      <button onClick={() => {
            const section = document.getElementById('git');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-950 text-white p-2 rounded-md mx-auto border-2 border-blue-950 hover:bg-white hover:text-blue-950">Get in Touch</button>
      </div>
    </div>
  )
}

export default Process