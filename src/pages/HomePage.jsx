import React from 'react';
import '../App.css';
import myImg from '../assets/me.JPG';

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="mt-16 text-white hover:text-blue-500 transition-colors duration-600 ease-in-out   merienda-try ">Hi. I'm Evan.</h1>
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="text-white hover:text-cyan-500 transition-colors duration-600 ease-in-out   merienda-try  ">A Developer</h1>
      <p className="mt-5 merienda-try text-orange-500 hover:text-emerald-600 transition-colors duration-600 ease-in-out">A passionate Full-Stack Developer and AI Enthusiast.</p>
      <a href="https://github.com/Zicheng-Li/resume/blob/master/resume.pdf" target="_blank" rel="noopener noreferrer" className=" merienda-try mt-16 bg-gradient-to-r from-stone-400 via-stone-500 to-stone-600 hover:from-sky-400 hover:via-sky-500 hover:to-sky-700 text-white  py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-none hover:shadow-xl active:scale-110 ">
      <span className="inline-block transform hover:scale-100">Check Out My Resume</span>  
    </a>
    </div>

    <div className="flex flex-col items-center justify-center  ">
    <div className=" p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
    <img src={myImg} alt="Evan" className="w-48 h-48 rounded-full mr-8"/>
    <div>
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="text-gray-700 text-lg">
        Seatearchitt.
      </p>
    </div>
  </div>

    </div>
    
    
    </>
  );
}

export default HomePage;
