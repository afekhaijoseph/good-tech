import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="py-10 absolute top-14 flex flex-col gap-4 text-center mx-auto px-3 md:text-left md:gap-0 lg:w-3/5 lg:mx-0 md:top-1/4 lg:top-16 md:pl-10">
     <h1 className="text-5xl text-[#28395D] font-bold leading-tight font-orbitron">From Ideas to Impact - <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,153,255,0.8)] to-[rgb(40,57,93)]">Innovating for a Smarter Future</span></h1>
     <h2 className="text-xl text-gray-700 leading-normal my-5 md:textl-2xl">Good Tech HQ is more than a tech company. We are the driving force behind transformative products that reshape industries and improve lives. By merging innovation, strategy, and execution, we turn bold ideas into tangible, lasting solutions.</h2>
     <div className="flex items-center gap-2 bg-blue-950 text-lg font-semibold text-white py-2 px-4 rounded-md mx-auto my-5 border-2 border-blue-950 hover:text-blue-950 hover:bg-white md:mx-0 md:w-fit">
        <button onClick={() => { 
          const section = document.getElementById('products');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>Explore Our Solutions</button>
        <ArrowRight className=""/>
      </div>
    </div>
  )
}

export default Hero