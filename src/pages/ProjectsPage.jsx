import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const ProjectsPage = () => {
  return (
<div className="flex flex-col items-center py-10 mt-8">
  <h1 className='text-white text-3xl font-bold mb-10 text-center'>My Projects</h1>
  <div className='flex flex-row justify-center items-center gap-4 w-full max-w-6xl mx-auto'>

    <div className="flex flex-col items-center max-w-sm mx-auto shadow-lg bg-transparent py-4">
      <div className="overflow-visible py-2 relative">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
        <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mt-2 mr-2 text-white">
          <i className="fab fa-github fa-lg bg-transparent hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90"></i>
        </a>
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large" style={{ color: 'white' }}>EL's Online Shop</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
          This repository contains the frontend code for EL's Online Shop, a dynamic e-commerce platform developed using Angular 16.
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-blue-500">#react</span>
          <span className="text-green-500">#react-router</span>
          <span className="text-red-500">#chakra-ui</span>
          <span className="text-yellow-500">#coingecko-api</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center max-w-sm mx-auto shadow-lg bg-transparent py-4">
      <div className="overflow-visible py-2 relative">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
        <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 mt-2 mr-2 text-white ">
          <i className="fab fa-github fa-lg bg-transparent hover:bg-sky-500 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-90"></i>
        </a>
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large" style={{ color: 'white' }}>EL's Online Shop</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
          This repository contains the frontend code for EL's Online Shop, a dynamic e-commerce platform developed using Angular 16.
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-blue-500 ">#react</span>
          <span className="text-green-500 ">#react-router</span>
          <span className="text-red-500 ">#chakra-ui</span>
          <span className="text-yellow-500 ">#coingecko-api</span>
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
        <h4 className="font-bold text-large" style={{ color: 'white' }}>EL's Online Shop</h4>
        <small className="flex-1 text-default-500 font-light opacity-85" style={{ color: 'white' }}>
          This repository contains the frontend code for EL's Online Shop, a dynamic e-commerce platform developed using Angular 16.
        </small>
        <div className="flex mt-4 space-x-2 text-sm">
          <span className="text-blue-500 ">#react</span>
          <span className="text-green-500 ">#react-router</span>
          <span className="text-red-500 ">#chakra-ui</span>
          <span className="text-yellow-500 ">#coingecko-api</span>
        </div>
      </div>
    </div>
  </div>
</div>





  )
}

export default ProjectsPage