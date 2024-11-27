'use client';
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import BorderMagic from "./ui/BorderMagic";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex gap-6 flex-col items-center justify-center antialiased" id="contact">
      <div className=" mx-auto p-6 ">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent text-white mt-36 mb-24 bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8">
          Contact Me
        </h1>
        {/* Flex container for the two sections */}
        <div className="flex flex-col md:flex-row gap-20 lg:gap-56">
          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="mb-4 text-lg text-gray-800">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-teal-500 text-2xl mr-2" />
                <a href="mailto:masum.abrar02@gmail.com" className="text-white">masum.abrar02@gmail.com</a>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-teal-500 text-2xl mr-2" />
                <span className="text-white">+8801814122502</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-teal-500 text-2xl mr-2" />
                <span className="text-white">Chittagong, Bangladesh</span>
              </div>
            </div>
            <div className="flex justify-start space-x-4">
              <a href="https://www.instagram.com/masum._.abrar/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://github.com/masum-abrar" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/million.dolar.man/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Me Form */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Me</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-lg p-3 w-96 border border-neutral-800 focus:ring-2 focus:ring-teal-500  bg-neutral-950 placeholder:text-neutral-700 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-lg p-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
              />
              <textarea
                placeholder="Your Message"
                className="rounded-lg p-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white  resize-none"
              ></textarea>
            
            </form>
          </div>
        </div>
      </div>
      <BackgroundBeams />
      <BorderMagic />
    </div>
  );
}
