"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const MyProject = () => {
  const projects = [
    {
      id: 1,
      img: "https://i.ibb.co/31Hvfb1/449645146-992036889248867-4187670521969604688-n.jpg",
      title: "Blood Donation",
      des: "The Blood Donation Website facilitates blood donation by connecting donors with recipients in need of blood.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://blood-donation-57a50.web.app/",
    },
    {
      id: 2,
      img: "https://i.ibb.co/k83YWvR/ass1.jpg",
      title: "Travel Adventure",
      des: "The Travel Adventure Website inspires and facilitates travel experiences for adventure seekers.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://travel-adventure-4404b.web.app/",
    },
    {
      id: 3,
      img: "https://i.ibb.co/Ht3Ft7Z/449760246-807572398181526-6209414976664680863-n.jpg",
      title: "Bus Ticket",
      des: "This Bus Ticket Booking website offers a seamless platform for booking bus tickets with discounts.",
      iconLists: [
        "https://img.icons8.com/color/48/000000/html-5--v1.png",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/color/48/000000/react-native.png",
      ],
      href: "https://masum-abrar.github.io/Bus_Ticket/",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.href}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
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
