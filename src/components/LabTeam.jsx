import scientist from '../assets/scientist.png'
import researchers from '../assets/researchers.png'
import engineer from '../assets/engineer.png'
import strategists from '../assets/strategists.png'

const LabTeam = () => {
  return (
    <div id="team" className='text-gray-600 my-8'>
        <h2 className='text-4xl font-semibold text-center font-orbitron text-accent'>Our Lab Team</h2>
        <p className='text-center my-3'>Diverse experts working together to push the boundaries of technology</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='border border-gray-200 hover:shadow-lg rounded-md p-4'>
                <div className="w-12">
                    <img src={scientist} alt="" />
                </div>
                <h4 className='text-accent font-semibold text-lg my-2'>Research Scientists</h4>
                <p className='my-2'>Leading edge research in AI, machine learning, and emerging technologies.</p>
                <div className='flex gap-2 text-sm w-full flex-wrap '>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Machine Learning</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Data Science</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Research Methodology</p>
                </div>
            </div>
            <div className='border border-gray-200 hover:shadow-lg rounded-md p-4'>
                <div className="w-12">
                    <img src={researchers} alt="" />
                </div>
                <h4 className='text-accent font-semibold text-lg my-2'>UX Researchers</h4>
                <p className='my-2'>Understanding user needs and behaviors to guide product development.</p>
                <div className='flex gap-2 text-sm w-full flex-wrap '>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>User Research</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Design Thinking</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Bahavioural Analysis</p>
                </div>
            </div>
            <div className='border border-gray-200 hover:shadow-lg rounded-md p-4'>
                <div className="w-12">
                    <img src={engineer} alt="" />
                </div>
                <h4 className='text-accent font-semibold text-lg my-2'>Prototype Engineers</h4>
                <p className='my-2'>Rapidly building and iterating on proof-of-concept implementations.</p>
                <div className='flex gap-2 text-sm w-full flex-wrap '>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Rapid Prototyping</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Full-Stack Development</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>DevOps</p>
                </div>
            </div>
            <div className='border border-gray-200 hover:shadow-lg rounded-md p-4'>
                <div className="w-12">
                    <img src={strategists} alt="" />
                </div>
                <h4 className='text-accent font-semibold text-lg my-2'>Innovation Strategists</h4>
                <p className='my-2'>Identifying market opportunities and guiding project direction.</p>
                <div className='flex gap-2 text-sm w-full flex-wrap '>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Market Analysis</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Strategy</p>
                    <p className='bg-purple-200/60 text-purple-600 rounded-full py-1 px-2 whitespace-nowrap'>Product Planning</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LabTeam