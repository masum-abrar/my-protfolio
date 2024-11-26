import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/MagicButton";


export const Hero = () => {
  return (
    <div>
      <h1>its hero section</h1>
      <div>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
       
           <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      
           <Spotlight
          className="-top-16 left-[1000px]  h-screen"
          fill="white"
        />
          <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
      
       
       
      </div>
      <div className="text-white mt-44 py-4 s">
        <TextGenerateEffect
          words=" I'm Masum ,
frontend developer based in Chittagong"
          className="text-center bg-clip-text text-transparent text-3xl bg-gradient-to-r from-blue-500 to-green-500 text-[40px] md:text-5xl lg:text-6xl"
        />
        <p className=" text-center mb-8 mt-4">I specialize in creating dynamic and beautiful web pages. <br /> I have been exploring in this field for nearly last 2 years, and have been loving every minute of it.

Contact Me
My Resume</p>
<MagicButton ></MagicButton>
      </div>
      
    </div>
  );
};
