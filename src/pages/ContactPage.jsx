import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import myImg from '../assets/me.JPG';
const ContactPage = () => {
  return (
    <div  className="flex flex-col items-center py-10 mt-8">
      <h1 className='text-white text-3xl font-bold mb-10 text-center'>Contact Me</h1>
      <Card className="max-w-[340px] bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={myImg} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600" style={{ color: 'white' }}>Evan Li</h4>
            <h5 className="text-xs tracking-tight font-light opacity-85" style={{ color: 'white' }}>@OPG</h5>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/evan-li-873078256/" target="_blank" rel="noopener noreferrer">
        <Button
          className="flex items-center gap-1"
          color="primary"
          radius="full"
          size="sm"
          variant={"solid"}
        >
          Follow me on <i className="fa-brands fa-linkedin"></i>
        </Button>
      </a>

      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
        Aspiring Full-Stack Developer and AI Enthusiast 🚀
        </p>
        <span className="pt-2">
          #Computer Science Student 💻
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">121</p>
          <p className=" text-default-400 text-small">Connections</p>
        </div>
      </CardFooter>
    </Card>



    </div>
  )
}

export default ContactPage