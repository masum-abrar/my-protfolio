// src/components/Footer.js

import React from 'react';

import {  FaInstagram, FaGithub, FaFacebook } from  'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black-100 text-gray-400 py-8 mt-52 lg:mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Masum Abrar</h2>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
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
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Masum Abrar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


