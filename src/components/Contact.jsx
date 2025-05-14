import { Mail } from "lucide-react"
import git from '../assets/images/getintouch.jpg'
const GetInTouch = () => {
  return (
    <div id="git" className="h-screen text-gray-500 bg-cover py-10 relative md:h-[50vh] lg:h-screen" style={{backgroundImage: `url(${git})`}}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute top-0 left-0 right-0">
            <div>
                <h2 className='text-4xl font-bold text-white text-center my-8 font-orbitron'>Get in Touch</h2>
                <h3 className="text-xl text-center p-3 text-white" >Have questions or want to discuss a potential collaboration? We'd love to hear from you.</h3>
            </div>
            
            <div className="relative">
            <div className="relative z-10 flex flex-col mx-auto md:flex-row-reverse md:w-3/4 md:gap-10 md:items-center bg-white p-6">
            <form className="flex flex-col gap-2 basis-full" action="">
                <div className="flex gap-2">
                    <label htmlFor="name"></label>
                    <input className="w-full border-2 border-gray-200 p-1 rounded-md" placeholder="Name" type="text" required />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="email"></label>
                    <input className="w-full border-2 border-gray-200 p-1 rounded-md" placeholder="Email" type="text" required />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="message"></label>
                    <textarea placeholder="Message" rows="6" className="w-full border-2 border-gray-200 p-1 rounded-md" required/>
                </div>
                <div className="my-4">
                    <button className="bg-blue-950 text-white p-2 rounded-md mx-auto w-full border-2 border-blue-950 hover:bg-white hover:text-blue-950">Send Message</button>
                </div>
            </form>

            <div className="my-10 basis-full self-start md:my-0">
                <h3 className="text-lg font-bold text-blue-950 mb-5">Contact Information</h3>
                <div className="flex items-center gap-2 my-4">
                    <Mail size={48} stroke="rgba(51,51,153)"/>
                    <div>
                        <p className="text-bold">Email</p>
                        <p   className="text-blue-500">info@goodtechhq.com</p>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="font-bold text-blue-950 text-lg ">Location</p>
                    <p>123 Innovation Drive</p>
                    <p>Tech Valley, CA 94103</p>
                </div>
                <div>
                    <p className="font-bold text-lg text-blue-950" >Follow us</p>
                    <div className="flex gap-2">
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-10/12 h-[300px] -translate-y-1/2 bg-accentshade z-[1]"></div>
            </div>
            </div>
    </div>
  )
}

export default GetInTouch