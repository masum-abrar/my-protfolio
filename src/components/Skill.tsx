'use client';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skill = () => {
  const skills = [
    {
      name: 'HTML5',
      level: '90%',
      color: 'text-orange-500',
      icon: <FaHtml5 size={50} className="text-orange-500" />,
    },
    {
      name: 'CSS3',
      level: '85%',
      color: 'text-blue-500',
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
    },
    {
      name: 'Tailwind CSS',
      level: '90%',
      color: 'text-teal-500',
      icon: <SiTailwindcss size={50} className="text-teal-500" />,
    },
    {
      name: 'ReactJS',
      level: '80%',
      color: 'text-blue-400',
      icon: <FaReact size={50} className="text-blue-400" />,
    },
    // {
    //   name: 'MongoDB',
    //   level: '60%',
    //   color: 'text-green-500',
    //   icon: <SiMongodb size={50} className="text-green-500" />,
    // },
    {
      name: 'ExpressJS',
      level: '65%',
      color: 'text-gray-400',
      icon: <SiExpress size={50} className="text-gray-400" />,
    },
    {
      name: 'NodeJS',
      level: '65%',
      color: 'text-green-500',
      icon: <FaNodeJs size={50} className="text-green-500" />,
    },
    // {
    //   name: 'Bootstrap',
    //   level: '70%',
    //   color: 'text-purple-600',
    //   icon: <FaBootstrap size={50} className="text-purple-600" />,
    // },
  ];

  return (
    <div>
      <h2 className="text-center text-6xl font-bold mb-6 text-white-100 mt-40">My Skill Set</h2>
      <HoverEffect
      className='text-white'
        items={skills.map(skill => ({
          title: skill.name,
          description: skill.level,
          icon: skill.icon, // Pass the React icon
          link: '/', // Add appropriate links if needed
        }))}
      />
    </div>
  );
};

export default Skill;
