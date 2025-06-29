'use client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs ,} from 'react-icons/fa';
import { SiTailwindcss, SiExpress,SiJavascript,SiNextdotjs, SiRedux} from 'react-icons/si';
import { Button } from './ui/moving-border'; // Assuming this handles the moving border effect

const Skill = () => {
  const skills = [
    {
      name: 'HTML5',
     
      color: 'text-orange-500',
      icon: <FaHtml5 size={50} className="text-orange-500" />,
    },
    {
      name: 'CSS3',
     
      color: 'text-blue-500',
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
    },
    {
      name: 'Tailwind CSS',
     
      color: 'text-teal-500',
      icon: <SiTailwindcss size={50} className="text-teal-500" />,
    },
    {
  name: 'JavaScript',
 
  color: 'text-yellow-400',
  icon: <SiJavascript size={50} className="text-yellow-400" />,
},

    {
      name: 'ReactJS',
     
      color: 'text-blue-400',
      icon: <FaReact size={50} className="text-blue-400" />,
    },
    {
  name: 'Next.js',
 
  color: 'text-black',
  icon: <SiNextdotjs size={50} className="text-black" />,
},
{
  name: 'Redux',
 
  color: 'text-purple-500',
  icon: <SiRedux size={50} className="text-purple-500" />,
},


    {
      name: 'ExpressJS',
     
      color: 'text-gray-400',
      icon: <SiExpress size={50} className="text-gray-400" />,
    },
    {
      name: 'NodeJS',
     
      color: 'text-green-500',
      icon: <FaNodeJs size={50} className="text-green-500" />,
    },
  ];

  return (
    <div className="py-20 w-full mb-16" id="skills">
     <h2 className="relative text-center mb-20">
 <h2 className="text-center font-serif italic text-4xl md:text-5xl text-white mb-16">
  <span className="relative">
    My Skill Set
    {/* <span className="absolute bottom-0 left-0 right-0 h-px bg-white/50"></span> */}
  </span>
</h2>
  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></span>
  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50"></span>
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
            {/* <p className="text-gray-400 mt-2 font-medium">{skill.level}</p> */}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skill;
