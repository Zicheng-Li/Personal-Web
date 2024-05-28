import React from 'react'
import ELshop  from '../assets/ShopLogo.png';
const ProjectsPage = () => {
  return (
<div className="flex flex-col items-center py-10 mt-5">
  <h1 className='text-white text-3xl font-bold mb-10 text-center'>My Projects</h1>
  <div className='flex flex-row justify-center items-center gap-4 w-full max-w-6xl mx-auto'>

    <div className="flex flex-col items-center max-w-sm mx-auto shadow-lg bg-transparent py-4">
      <div className="overflow-visible py-2 relative">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={ELshop}
          width={270}
        />
        <a href="https://github.com/Zicheng-Li/Angular-ecommerce-frontend" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mt-2 mr-2 ">
          <i className="fa-brands fa-github fa-lg  hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90"></i>
        </a>
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large" style={{ color: 'white' }}>EL's Online Shop</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
        EL's Online Shop is a dynamic e-commerce platform I developed, utilizing Angular 16 for the front end and Spring Boot 3 for the back end. Key integrations include Okta's Auth0 for secure authentication and Stripe for payment processing. 
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-sky-500">#Angular</span>
          <span className="text-emerald-500">#SpringBoot</span>
          <span className="text-orange-500">#PrimeNG-UI</span>
          <span className="text-yellow-500">#Auth0</span>
          <span className="text-pink-500">#Stripe</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center max-w-sm mx-auto shadow-lg bg-transparent py-4">
      <div className="overflow-visible py-2 relative">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={ELshop}
          width={270}
        />
        <a href="https://github.com/Zicheng-Li/Math_helper" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mt-2 mr-2  ">
          <i className="fab fa-github fa-lg bg-transparent hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90"></i>
        </a>
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large" style={{ color: 'white' }}>Math Assistant</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
        This Hackathon project targets high school students struggling with graphs and Calculus. It features a calculator that graphs various functions tailored to user needs, with a clear and user-friendly GUI. The project is built using Java and the Swing framework to design both the interface and the algorithms.
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-sky-500 ">#Java</span>
          <span className="text-emerald-500 ">#Swing</span>
          <span className="text-orange-500 ">#Java Web Start</span>
         
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center max-w-sm mx-auto shadow-lg bg-transparent py-4">
      <div className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large" style={{ color: 'white' }}>Stealth Startup</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
          This repository contains the frontend code for EL's Online Shop, a dynamic e-commerce platform developed using Angular 16.
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-blue-500 ">#React</span>
          <span className="text-green-500 ">Medusajs</span>
          <span className="text-red-500 ">#Next.js</span>
          {/* <span className="text-yellow-500 ">#coingecko-api</span> */}
        </div>
      </div>
    </div>
  </div>
</div>





  )
}

export default ProjectsPage