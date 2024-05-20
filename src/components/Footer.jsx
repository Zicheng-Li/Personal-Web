import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-transparent text-white py-4">
  <div className="container mx-auto flex flex-row justify-evenly items-start px-4">
  <div className="flex flex-col space-y-4">
    <div style={{color: "rgb(7,142,83)"}} className=' font-medium text-base'>Go To</div>
    <Link to="/" className='text-sm text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out'>Me</Link>
    <Link to="/experiences" className='text-sm text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out' >Experiences</Link>
    <Link to="/projects" className='text-sm text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out'>Projects</Link>
    <Link to="/notes" className='text-sm text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out'>Notes</Link>
    <Link to="/contact" className='text-sm text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out'>Contact</Link>
    </div>
    
    <div className="flex flex-col space-y-4">
    <div style={{color: "rgb(7,142,83)"}} className=' font-medium text-base'>Elsewhere</div>
      <a href="https://github.com/Zicheng-Li" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out mr-4 text-sm">Github</a>
      <a href="https://www.linkedin.com/in/evan-li-873078256/" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out text-sm">LinkedIn</a>
      <a href="https://docs.google.com/gview?url=https://github.com/Zicheng-Li/resume/raw/master/resume.pdf&embedded=true" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-500 transition duration-300 ease-in-out mr-4 text-sm">Resume</a>

    </div>
    <div className="flex flex-col space-y-4">
        <div style={{color: "rgb(7,142,83)"}} className=' font-medium text-base '>Contact</div>
      <a href="mailto:li1276@mcmaster.ca" className="text-slate-200 text-sm hover:text-teal-500 transition duration-300 ease-in-out ">Email</a>
    </div>
  </div>
  <div className="text-center flex-grow">
      <p>© 2024 Evan Li</p>
    </div>
</footer>

  )
}

export default Footer