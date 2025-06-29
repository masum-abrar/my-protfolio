"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const MyProject = () => {
  const projects = [
    // {
    //   id: 1,
    //   img: "https://i.ibb.co/31Hvfb1/449645146-992036889248867-4187670521969604688-n.jpg",
    //   title: "Blood Donation",
    //   des: "The Blood Donation Website facilitates blood donation by connecting donors with recipients in need of blood.",
    //   iconLists: [
    //     "https://img.icons8.com/color/48/000000/html-5--v1.png",
    //     "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    //     "https://img.icons8.com/color/48/000000/react-native.png",
    //   ],
    //   href: "https://blood-donation-57a50.web.app/",
    // },
    {
      id: 2,
      img: "https://i.ibb.co/cKh7GKy6/Travel.png",
      title: "Travel Adventure",
      des: "The Travel Adventure Website inspires and facilitates travel experiences for adventure seekers.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://travel-adventure-ashen.vercel.app/",
    },
    {
      id: 3,
      img: "https://i.ibb.co/1JGGZnrY/job1.png",
      title: "Hire Hevan",
      des: "Welcome to Hire Hevan, your ultimate destination for finding the perfect job and connecting with top employers. Whether you're seeking a career change, exploring new opportunities, or starting your professional journey, we're here to support you every step of the way.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://job-website-ddf69.web.app/",
    },
     {
      id: 4,
      img: "https://i.ibb.co/nsQ3ngVN/parjatak.png",
      title: "parjatak",
      des: "Bangladesh’s First Social Network for Travel Enthusiasts - Empowering Local Tourism Across the Country.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://www.parjatak.com/",
    },
      {
      id: 5,
      img: "https://i.ibb.co/qL2KdkjR/bania.png",
      title: "bania",
     des: "This E-commerce website provides a smooth and user-friendly platform for browsing, purchasing, and managing products online with exclusive deals and secure checkout.",

      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
      ],
      href: "https://ranabi-web.vercel.app/",
    },
    
    {
      id: 6,
      img: "https://i.ibb.co/n84LfMbT/fortune.png",
     title: "Fortune Global Education",
des: "This educational platform offers expert guidance for students seeking to study abroad, providing end-to-end support for admissions, visas, and university selection.",

      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
      ],
      href: "https://www.fortuneglobaledu.com/",
    },
  ];

  return (
    <div className="mb-16" id ="projects">
        <h2 className="relative text-center ">
 <h2 className="text-center font-serif italic text-4xl md:text-5xl text-white mb-12">
  <span className="relative">
    My Projects
    {/* <span className="absolute bottom-0 left-0 right-0 h-px bg-white/50"></span> */}
  </span>
</h2>
  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></span>
  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50"></span>
</h2>
      <div className="flex flex-wrap items-center justify-center  gap-16 ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.href}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item?.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
