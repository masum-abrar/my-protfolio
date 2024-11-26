'use client';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skill = () => {
    const skills = [
        { name: 'HTML5', level: '90%', color: 'bg-orange-500',   },
        { name: 'CSS3', level: '85%', color: 'bg-blue-500',   },
        { name: 'Tailwind CSS', level: '90%', color: 'bg-teal-500', icon: <SiTailwindcss className="text-teal-500" size={50} /> },
        { name: 'ReactJS', level: '80%', color: 'bg-blue-400', icon: <FaReact className="text-blue-400" size={50} /> },
        { name: 'MongoDB', level: '60%', color: 'bg-green-500', icon: <SiMongodb className="text-green-500" size={50} /> },
        { name: 'ExpressJS', level: '65%', color: 'bg-gray-400', icon: <SiExpress className="text-gray-400" size={50} /> },
        { name: 'NodeJS', level: '65%', color: 'bg-green-500', icon: <FaNodeJs className="text-green-500" size={50} /> },
        { name: 'Bootstrap', level: '70%', color: 'bg-purple-600', icon: <FaBootstrap className="text-purple-600" size={50} /> },
      ];

  return (
    <div>
      <h2 className="text-center text-6xl font-bold mb-6 text-white-100 mt-40 mr-8 ">My Skill Set</h2>
      <HoverEffect
        items={skills.map(skill => ({
          title: skill.name,
          description: `${skill.level}%`, 
          image: skill.icon, 
          link: '/', 
        }))}
      />
    </div>
  );
};

export default Skill;
