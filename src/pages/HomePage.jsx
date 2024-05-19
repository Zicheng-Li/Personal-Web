import React from 'react';
import '../App.css';
import myImg from '../assets/me.JPG';
import myResume from '../assets/resume.pdf';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const HomePage = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="mt-16 text-white hover:text-blue-500 transition-colors duration-600 ease-in-out   merienda-try ">Hi. I'm Evan.</h1>
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="text-white hover:text-cyan-500 transition-colors duration-600 ease-in-out   merienda-try  ">A Developer</h1>
      <p className="mt-5 merienda-try text-orange-500 hover:text-emerald-600 transition-colors duration-600 ease-in-out">A passionate Full-Stack Developer and AI Enthusiast.</p>
      <a href={myResume} target="_blank" rel="noopener noreferrer" className=" merienda-try mt-16 bg-gradient-to-r from-stone-400 via-stone-500 to-stone-600 hover:from-sky-400 hover:via-sky-500 hover:to-sky-700 text-white  py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-none hover:shadow-xl active:scale-110 ">
      <span className="inline-block transform hover:scale-100">Check Out My Resume</span>  
    </a>
    </div>

    <Card style={{ marginTop: '50vh' }} className=" bg-transparent py-5 max-w-2xl mx-auto shadow-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="text-3xl font-bold  text-white">About me</h4>
        <small className="text-white mt-9">Me at Lake Louise, July 2021</small>

      </CardHeader>
      <CardBody style={{paddingLeft: '14px'}} className="pt-1.5 flex flex-row items-center gap-16 ">
        <Image
          alt="Evan"
          className="flex-shrink-0 w-56 h-56 object-cover rounded-3xl"
          src={myImg}
          width={270}
        />
        <p className="flex-1 text-sm text-default-500  opacity-85" style={{ color: 'white' }}>I am keen to leverage my full-stack development skills and passion for finance at Wealthsimple, where I can create impactful and innovative solutions. As a regular user of the Wealthsimple app, I am not only familiar with your products but also use them daily in trading stocks, improving my understanding of financial applications.
        </p>
      </CardBody>
    </Card>
    
    
    </>
  );
}

export default HomePage;
