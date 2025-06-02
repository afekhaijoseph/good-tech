
const Hero = () => {
  return (
    <div className="py-10 absolute bottom-[20%] flex flex-col gap-4 text-center mx-auto px-3 md:text-left md:gap-0 lg:w-3/5 lg:mx-0 md:top-1/4 md:pl-10 text-gray-600">
     <h1 className="text-6xl md:text-7xl text-[#28395D] font-bold leading-tight font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">GoodTech Lab</h1>
     <p className="text-lg">Where groundbreaking ideas are born.</p>
     <p className="text-gray-600 leading-normal my-5 md:textl-2xl">Our innovation Laboratory is the birthplace of trnasformative technologies. Here, we experiment, prototype and refine the ideas that become tomorrow's essential products.</p>
     <div className="flex flex-col md:flex-row items-center gap-4">
        <button onClick={() => { 
          const section = document.getElementById('products');
            section?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-blue-950 text-lg font-semibold text-white py-2 px-4 rounded-md mx-auto border-2 border-blue-950 hover:text-blue-950 hover:bg-white md:mx-0 md:w-fit w-11/12">
              Explore Our Research
        </button>

        <button onClick={() => { 
          const section = document.getElementById('products');
            section?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-white text-lg font-semibold text-blue-950 py-2 px-4 rounded-md mx-auto border-2 border-blue-950 hover:bg-accent hover:text-white md:mx-0 md:w-fit w-11/12">
              View Active Projects
      </button>
      </div>
      
  
    </div>
  )
}

export default Hero