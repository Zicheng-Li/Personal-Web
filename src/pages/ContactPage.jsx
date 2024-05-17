import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import myImg from '../assets/me.JPG';
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-8">
      <h1 className="text-white text-3xl font-bold mb-10 text-center">Contact Me</h1>
      <Card className="max-w-[340px] bg-transparent">
        <CardHeader className="justify-between">
          <div className="flex gap-5 items-center">
            <Avatar isBordered radius="full" size="xl" src={myImg} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-xl font-semibold leading-none text-white">Evan Li</h4>
              <h5 className="text-xs tracking-tight font-light opacity-85 text-gray-300">@OPG</h5>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/evan-li-873078256/" target="_blank" rel="noopener noreferrer">
            <Button
              className="flex items-center gap-1 mt-2"
              color="primary"
              radius="full"
              size="sm"
              variant="solid"
              css={{ backgroundColor: '#0077B5', borderColor: '#0077B5' }}
            >
              Follow me on <i className="fa-brands fa-linkedin"></i>
            </Button>
          </a>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="text-white">
            Aspiring Full-Stack Developer and AI Enthusiast 🚀
          </p>
          <span className="pt-2 text-white">
            Computer Science Student 💻
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-white text-small">121</p>
            <p className="text-white text-small">Connections</p>
          </div>
          
        </CardFooter>
      </Card>


      <Card className="mt-16 max-w-[340px] bg-transparent">
        <CardHeader className="justify-between">
          <div className="flex gap-5 items-center">
            <Avatar isBordered radius="full" size="xl" src={myImg} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-xl font-semibold leading-none text-white">Evan Li</h4>
              <h5 className="text-xs tracking-tight font-light opacity-85 text-gray-300">@Zicheng-Li </h5>
            </div>
          </div>
          <a href="https://github.com/Zicheng-Li" target="_blank" rel="noopener noreferrer">
            <Button
              className="flex items-center gap-1 mt-2"
              color="primary"
              radius="full"
              size="sm"
              variant="solid"
              css={{ backgroundColor: '#0077B5', borderColor: '#0077B5' }}
            >
              Follow me on <i className="fa-brands fa-github"></i>
            </Button>
          </a>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="text-white">
            Aspiring Full-Stack Developer and AI Enthusiast 🚀
          </p>
          <span className="pt-2 text-white">
            Computer Science Student 💻
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-white text-small">121</p>
            <p className="text-white text-small">Connections</p>
          </div>
          
        </CardFooter>
      </Card>
    </div>
  )
}

export default ContactPage