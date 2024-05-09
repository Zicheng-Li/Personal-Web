import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    // backdrop-hue-rotate-30 backdrop-brightness-200 
    <div >    
        <nav style={{maxWidth: '34rem', marginTop: '2rem'}} className=" flex justify-center items-center bg-transparent backdrop-filter backdrop-opacity-40   backdrop-blur-sm text-white shadow-lg rounded-full py-1 px-2 mx-auto ">
          <ul className="flex list-none p-0 space-x-4">
            <li className="px-4 py-2 hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90">
              <Link to="/">Me</Link>
            </li>
            <li className="px-4 py-2 hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90">
              <Link to="/experiences">Experiences</Link>
            </li>
            <li className="px-4 py-2 hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90">
              <Link to="/notes">Notes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
