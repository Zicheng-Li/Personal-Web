import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div >
        <nav style={{maxWidth: '34rem', marginTop: '2rem'}} className=" flex justify-center items-center bg-opacity-90 backdrop-filter backdrop-blur-lg bg-gray-800 text-white shadow-lg rounded-full py-1 px-2  mx-auto ">
          <ul className="flex list-none p-0 space-x-4">
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link to="/">Me</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link to="/notes">Notes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
