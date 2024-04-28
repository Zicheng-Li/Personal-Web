"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <header className="mt-3">
        <nav style={{maxWidth: '34rem'}} className="flex justify-center items-center bg-opacity-90 backdrop-filter backdrop-blur-lg bg-gray-800 text-white shadow-lg rounded-full py-1 px-2  mx-auto ">
          <ul className="flex list-none p-0 space-x-4">
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link href="">Me</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link href="/experience">Experience</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link href="/notes">Notes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className=" flex min-h-screen flex-col items-center justify-between p-24">
        <p>welcom to my site</p>
      </main>
    </div>
  );
}
