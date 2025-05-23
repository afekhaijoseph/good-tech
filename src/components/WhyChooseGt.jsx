import {Rocket, Award, TrendingUp, PersonStanding} from 'lucide-react'

const WhyChooseGt = () => {
  return (
    <div id="whychoose" className='text-white bg-gray-500 py-4'>
        <h2 className='text-4xl font-bold text-white text-center my-10 font-orbitron' >Why Choose Good Tech HQ?</h2>  
        <div className='grid grid-cols-1 gap-5 w-10/12 mx-auto md:grid-cols-2 lg:grid-cols-4'>
        <div className='shadow-md border-2 rounded-md flex flex-col items-center border-gray-100 p-3'>
            <Rocket size={48} stroke="#ffffff"/>
            <div className='text-center'>
               <h3 className='text-lg font-bold text-white my-3'>End-to-End Innovation</h3>
               <p>We don’t just build products; we launch, scale, and optimize them for long-term success.</p>
            </div>
        </div>

        <div className='shadow-md border-2 rounded-md flex flex-col items-center border-gray-100 p-3'>
            <PersonStanding size={48} stroke="#ffffff"/>
            <div className='text-center'>
               <h3 className='text-lg font-bold text-white my-3'>Tech-Driven, Human-Centered</h3>
               <p>Every solution is designed with purpose, solving real problems for real people.</p>
            </div>
        </div>

        <div className='shadow-md border-2 rounded-md flex flex-col items-center border-gray-100 p-3'>
            <Award size={48} stroke="#ffffff"/>
            <div className='text-center'>
              <h3 className='text-lg font-bold text-white my-3'>Strategic Execution</h3>
              <p>From concept to commercialization, our approach is structured, data-driven, and results-oriented.</p>
            </div>
        </div>

        <div className='shadow-md border-2 rounded-md flex flex-col items-center border-gray-100 p-3'>
            <TrendingUp size={48} stroke="#ffffff"/>
            <div className='text-center'>
               <h3 className='text-lg font-bold text-white my-3'>Sustainable Growth</h3>
               <p>Beyond launch, we ensure continuous optimization, scalability, and long-term excellence.</p>
            </div>
        </div>
        </div>
        
        <p className='font-bold text-lg text-center px-3 text-white my-10'>Good Tech HQ is not just a company. It’s an ecosystem where vision meets execution.</p>
        <div className="flex items-center my-5">
        <a href="mailto:goodtechhq@gmail.com" className=" bg-accent text-white p-3 rounded-md mx-auto border-2 border-accent hover:bg-white hover:text-accent" >Partner With Us</a>
      </div>
    </div>
  )
}

export default WhyChooseGt