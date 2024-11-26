'use client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { Button } from './ui/moving-border'; // Assuming this handles the moving border effect

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
  ];

  return (
    <div className="py-20 w-full">
      <h2 className="text-center text-6xl font-bold mb-6 text-white-100 mt-40">
        My Skill Set
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
        {skills.map((skill, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000} // Random animation duration
            borderRadius="1.5rem" // Rounded corners for a softer look
            className="flex flex-col items-center justify-center p-6 bg-transparent border border-gray-700 rounded-md shadow-md min-h-[150px] lg:min-h-[200px] w-full"
          >
            {/* Icon */}
            <div className={`text-6xl mb-4 ${skill.color}`}>{skill.icon}</div>
            {/* Skill name */}
            <h1 className="text-lg md:text-xl font-bold text-white">
              {skill.name}
            </h1>
            {/* Skill level */}
            <p className="text-gray-400 mt-2 font-medium">{skill.level}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skill;
