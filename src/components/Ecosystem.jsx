import { Combine, TrendingUp, Briefcase } from "lucide-react"
const Ecosystem = () => {
  return (
    <div className="text-gray-500 mt-14" >
        <h2 className="text-4xl text-blue-950 font-bold text-center my-6">Join Our Ecosystem</h2>
        <p className="text-xl text-center mt-10 mb-16">Good Tech HQ thrives on collaboration, bold thinking, and shared ambition. If you are an innovator, investor, or entrepreneur looking to shape the future, there’s a place for you here. Opportunities include:</p>
        <div className="flex flex-col gap-12 w-9/12 md:flex-row md:w-4/6 md:gap-6 mx-auto">
        <div className="flex flex-col relative items-center gap-2 border border-gray-200 rounded-md p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 absolute -top-0 -translate-y-1/2 bg-gray-200">
            <Combine size={48} stroke="#28395d"/>  
          </div>
          <div className="flex flex-col items-center mt-7">
            <h3 className="text-blue-950 font-bold" >Collaborate</h3>
            <p className="text-center" >Partner with us to develop groundbreaking solutions.</p>
          </div>
        </div>
        <div className="flex flex-col relative items-center gap-2 border border-gray-200 rounded-md p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 absolute -top-0 -translate-y-1/2 bg-gray-200">
            <TrendingUp size={48} stroke="#28395d"/>
          </div>
          <div className="flex flex-col items-center mt-7">
            <h3 className="text-blue-950 font-bold" >Invest</h3>
            <p className="text-center">Back high-impact ideas with significant growth potential.</p>
          </div>
        </div>

        <div className="flex flex-col relative items-center gap-2 border border-gray-200 rounded-md p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 absolute top-0 -translate-y-1/2 bg-gray-200">
             <Briefcase size={48} stroke="#28395d"/>
          </div>
          <div className="flex flex-col items-center mt-7">
            <h3 className="text-blue-950 font-bold">Careers</h3>
            <p className="text-center">Join a team where innovation, strategy, and execution converge.</p>
          </div>
            
        </div>
        </div>
        <p className="text-center my-5 text-blue-950 font-semibold">Let’s build the future together.</p>
        <div className="flex items-center my-5">
          <button className="bg-accent text-white p-3 rounded-md mx-auto border-2 border-accent hover:bg-white hover:text-accent">Let's connect</button>
        </div>
    </div>
  )
}
export default Ecosystem