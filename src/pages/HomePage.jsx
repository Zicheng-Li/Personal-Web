import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="mt-16 text-white hover:text-blue-500 transition-colors duration-600 ease-in-out   merienda-try ">Hi. I'm Evan.</h1>
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="text-white hover:text-cyan-500 transition-colors duration-600 ease-in-out   merienda-try  ">A Developer</h1>
      <p className="mt-5 merienda-try text-orange-500 hover:text-emerald-600 transition-colors duration-600 ease-in-out">A passionate Full-Stack Developer and AI Enthusiast.</p>
    </div>
  );
}

export default HomePage;
