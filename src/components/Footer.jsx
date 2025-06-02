import goodtech from '../assets/images/final-goodtech.png'

const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-300 mt-0">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className='flex flex-col items-center md:items-start'>
            <h2 className="text-xl font-semibold max-w-20 text-blue-950 mt-3">
                <a href="/"><img className= "" src={goodtech} alt="goodtech logo" /></a>
            </h2>
           <p className="my-3">Innovating for a smarter future</p>
        </div>

        <div className="flex gap-2 justify-evenly">
          <a onClick={() => scrollToSection("research")} className="hover:text-accentshade">
            Research
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-accentshade">
            Products
          </a>
          <a onClick={() => scrollToSection("process")} className="hover:text-accentshade">
            Process
          </a>
          <a onClick={() => scrollToSection("team")} className="hover:text-accentshade">
            Lab Team
          </a>
        </div>

        </div>
        <div className="py-5 px-3 text-gray-400 flex flex-col items-center md:flex-row md:w-full md:justify-between ">
            <p>© 2025 Good Tech HQ. All rights reserved.</p>
            <div className="flex gap-2" >
                <p>Privacy Policy.</p>
                <p>Terms of Service.</p>
            </div>
        </div>        
    </div>
  )
}

export default Footer