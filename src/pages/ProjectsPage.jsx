import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const ProjectsPage = () => {
  return (
<div className="flex flex-col items-center py-10 mt-8">
  <h1 className='text-white text-3xl font-bold mb-10 text-center'>My Projects</h1>
  <div className='flex flex-row justify-center items-center gap-4 w-full max-w-5xl mx-auto'>

    <Card className="bg-transparent py-4 max-w-sm mx-auto shadow-lg">
      <CardHeader className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
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
      </CardBody>
    </Card>

    <Card className="bg-transparent py-4 max-w-sm mx-auto shadow-lg">
      <CardHeader className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
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
      </CardBody>
    </Card>

    <Card className="bg-transparent py-4 max-w-sm mx-auto shadow-lg">
      <CardHeader className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
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
      </CardBody>
    </Card>
  </div>
</div>


  )
}

export default ProjectsPage