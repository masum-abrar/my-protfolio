
import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";

import { Education } from "@/components/Education";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import MyProject from "@/components/MyProject";
import Skill from "@/components/Skill";

import { FaHome} from "react-icons/fa"



export default function Home() {
  return (
   
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full ">
        {/* <FloatingNav
         navItems ={[
          {name: "Home", link: "/", icon: <FaHome/>},
          {name: "Skill", link: "/", icon: <FaHome/>},
          {name: "Education", link: "/", icon: <FaHome/>},
          {name: "Protfoio", link: "/", icon: <FaHome/>}
         ]}	
        ></FloatingNav> */}
        <FloatingDockDemo></FloatingDockDemo>
        <Hero></Hero>
        <Skill></Skill>
        <Education></Education>
        <MyProject></MyProject>
        <BackgroundBeamsDemo></BackgroundBeamsDemo>
        <Footer></Footer>
      
        
        </div>
      </main>
    </div>
  );
}
