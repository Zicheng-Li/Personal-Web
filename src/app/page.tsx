'use client'
import { useEffect } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";




export default function Home() {

  useEffect(() => {
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  let gradientOffset = 0;

  function draw() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 创建渐变
    let gradient = ctx.createLinearGradient(gradientOffset, 0, 200 + gradientOffset, 0);
    gradient.addColorStop(0, '#FACEDD');
    gradient.addColorStop(0.3, '#F3BED1');
    gradient.addColorStop(0.7, '#F3BED1');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 移动渐变
    gradientOffset=gradientOffset+0.5;
    if (gradientOffset > canvas.width) gradientOffset = -200;

    requestAnimationFrame(draw);
  }

  draw();
}, []);
  return (
    <div>
      <canvas style={{position:"relative", width:"100%",height:"20vh"}} id="myCanvas" width="100" height="100"></canvas>
      <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex min-h-screen flex-col items-center justify-between p-24">

          {/* <Navbar  isBordered>
      <NavbarBrand>
        <p className=" text-inherit">Evan Li</p>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/notes">
            Notes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>


      </NavbarContent>
      </Navbar> */}
      <p>welcome to my website</p>

      
    </main>
    </div>
    
  );
}
