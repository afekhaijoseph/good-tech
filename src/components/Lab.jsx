import ideation from '../assets/idea.png'
import research from '../assets/search.png'
import prototype from '../assets/prototype.png'
import test from '../assets/blood-test.png'
import iteration from '../assets/agile.png'
import graduation from '../assets/graduation-cap.png'
const Process = () => {
  return (
    <div id="process" className="mx-auto">
        <h2 className="text-4xl text-blue-950 font-bold text-center my-3 font-orbitron">Our Lab Process</h2>
        <p className="text-gray-600 text-center">From initial spark to proven concept - how we transform ideas into viable products</p>
        <div className="my-10 text-blue-950 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="lab shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12">
                <img src={ideation} alt="" />
              </div>
              <h3 className="font-bold">Ideation</h3>
              <p>Brainstorming and conceptualizing innovative solutions to real-world problems.</p>
            </div>
         
        <div className="studio shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12">
              <img src={research} alt="" />
            </div>
            <h3 className="font-bold">Research</h3>
            <p>Deep diving into market analysis, user needs, and technical feasibility studies.</p>
        </div>

        <div className="launchpad shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12">
              <img src={prototype} alt="" />
            </div>
            <h3 className="font-bold">Prototyping</h3>
            <p>Building minimum viable prototypes to test core concepts and functionality.</p>
        </div>

        <div className="observatory shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12">
              <img src={test} alt="" />
            </div>
            <h3 className="font-bold">Testing</h3>
            <p>Rigorous testing with real users to validate assumptions and gather feedback. </p>
        </div>
        <div className="observatory shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12">
              <img src={iteration} alt="" />
            </div>
            <h3 className="font-bold">Iteration</h3>
            <p>Refining and improving based on test results and user insights. </p>
        </div>
        <div className="observatory shadow-md bg-[rgb(14,189,254,0.1)] rounded-md p-7 flex flex-col gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12">
              <img src={graduation} alt="" />
            </div>
            <h3 className="font-bold">Graduation</h3>
            <p>Moving successful projects to the Studio for full development and polish.</p>
        </div>
    </div>
    </div>
  )
}

export default Process