import goodtech from '../assets/images/final-goodtech.png'
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-300 text-lg mt-52 md:mt-0">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4">
        <div>
            <h2 className="text-xl font-semibold max-w-20 text-blue-950 mt-3">
                <a href="/"><img className= "" src={goodtech} alt="goodtech logo" /></a>
            </h2>
           <p className="my-3">Powering Innovation, Elevating Possibilities</p>
        </div>
        <div>
           <h4 className="font-semibold text-white my-3">Company</h4>
           <p className="hover:text-white">About Us</p>
           <p className="hover:text-white">Products</p>
           <p className="hover:text-white">Join Our Ecosystem</p>
           <p className="hover:text-white">Careers</p>
        </div>

        <div>
            <h4  className="font-semibold text-white my-3">Resources</h4>
            <p className="hover:text-white">Blog</p>
            <p className="hover:text-white">FAQ</p>
            <p className="hover:text-white">Press</p>
            <p className="hover:text-white">Events</p>
        </div>

        <div>
            <h4  className="font-semibold text-white my-3">Connect</h4>
            <div className="flex gap-2">
                <a href=""><CiInstagram size={28} className='hover:text-white'/></a>
                <a href=""><RiTwitterXFill size={28} className='hover:text-white' /></a>
                <a href=""><CiLinkedin size={28} className='hover:text-white' /></a>
                <a href="mailto:goodtechhq@gmail.com"><CiMail size={28} className='hover:text-white'/></a>
            </div>
            
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