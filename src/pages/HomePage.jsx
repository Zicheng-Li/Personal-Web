import React from 'react';
import { useRef, useEffect } from 'react';
import '../App.css';
import myImg from '../assets/me.JPG';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { motion,useAnimation, useInView } from 'framer-motion';
const HomePage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const viewcControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      viewcControl.start("show");
    }
  }
  , [isInView, viewcControl]);

  const topDown = {
    hidden: {
      scale: 0.8,  
      opacity: 0,
      y: -50,
    },
    show: {
      scale: 1,  
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5
      },
    },
  };

  const downUp={
    hidden: {
      x: "up" === "left" ? 100 : "up" === "right" ? -100 : 0,
      y: "up" === "up" ? 100 : "up" === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 2,
        duration: 5,
        ease: "easeOut",
      },
    },
  };
  

  return (
    <>
    <div className="flex flex-col items-center">
      
      <motion.div   
    initial="hidden" 
  animate="show"
  variants={topDown}>

      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="mt-16 text-white hover:text-blue-500 transition-colors duration-600 ease-in-out   merienda-try ">Hi. I'm Evan.</h1>
      <h1 style={{ fontSize: "clamp(3.2rem, 0.4rem + 5vw, 13.75rem)" }} className="text-white hover:text-cyan-500 transition-colors duration-600 ease-in-out   merienda-try  ">A Developer</h1>
      </motion.div>
      
      <p className="mt-5 merienda-try text-orange-500 hover:text-emerald-600 transition-colors duration-600 ease-in-out">A passionate Full-Stack Developer and AI Enthusiast.</p>
      <a href="https://docs.google.com/gview?url=https://github.com/Zicheng-Li/resume/raw/master/resume.pdf&embedded=true" target="_blank" rel="noopener noreferrer" className=" merienda-try mt-16 bg-gradient-to-r from-stone-400 via-stone-500 to-stone-600 hover:from-sky-400 hover:via-sky-500 hover:to-sky-700 text-white  py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-none hover:shadow-xl active:scale-110 ">
      <span className="inline-block transform hover:scale-100">Check Out My Resume</span>  
    </a>
    <i className="fa-solid fa-angles-down mt-20 animate-bounce text-white"></i>

    </div>

    <motion.div variants={downUp}
    ref={ref}
        initial="hidden" 
        animate={viewcControl}
    >
    <Card style={{ marginTop: '50vh' }} className=" bg-transparent py-5 max-w-2xl mx-auto shadow-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="text-3xl font-bold  text-white">About me</h4>
        <small className="text-white mt-9">Me at Lake Louise, July 2021</small>

      </CardHeader>
      <CardBody style={{paddingLeft: '14px'}} className="pt-1.5 flex flex-row items-start gap-14 ">
        <Image
          alt="Evan"
          className="flex-shrink-0 w-56 h-56 object-cover rounded-3xl"
          src={myImg}
          width={270}
        />
          <div className="flex-1   text-default-500  opacity-100" style={{ color: 'white',fontSize: '15px',lineHeight: '1.25rem' }}>
          <p className='mb-5'>
          My name is Evan Li, a third-year Computer Science student at McMaster University, where I've developed strong computer skills in areas like data structures, cryptography, and computer architecture.
          </p>
          <p className='mb-5'>
          As a Full-Stack Developer, I've built projects including EL's Online Shop, a dynamic e-commerce site featuring Angular, Spring Boot, Okta's Auth0, and Stripe. I've also worked at AXSource on AI development and hold Microsoft certifications in Azure AI and Dynamics 365.
      </p>
      <p className='mb-5'>
      I started an internship at Ontario Power Generation in January 2024, creating a dashboard that saved the company over $1 million. 
      </p>
      <p className='mb-5'>
      I'm passionate about AI, BCI, blockchain, and Web3 in my free time. Connect with me to discuss technology trends or collaborations!
      </p>
        </div>
      </CardBody>
    </Card>
    </motion.div>
    
    </>
  );
}

export default HomePage;
