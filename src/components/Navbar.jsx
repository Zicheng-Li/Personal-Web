import React from 'react'

const Navbar = () => {
  return (
    <div className="">
        <nav style={{maxWidth: '34rem', marginTop: '2rem'}} className=" flex justify-center items-center bg-opacity-90 backdrop-filter backdrop-blur-lg bg-gray-800 text-white shadow-lg rounded-full py-1 px-2  mx-auto ">
          <ul className="flex list-none p-0 space-x-4">
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <a href="">Me</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <a href="/experience">Experience</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <a href="/projects">Projects</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <a href="/notes">Notes</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
