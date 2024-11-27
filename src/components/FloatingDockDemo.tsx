"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconTerminal2,
  IconBook,
  IconBriefcase,
  IconMail,
  IconFileDownload,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Skills",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Education",
      icon: (
        <IconBook className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact Us",
      icon: (
        <IconMail className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Download Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "/Resume.pdf", // Replace with your actual resume file path
      download: "Masum_Resume.pdf",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://github.com/masum-abrar",
    },
  ];

  // Smooth scroll handler
  const handleLinkClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-[90%] translate-x-[90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock
       // only for demo, remove for production
        items={links.map((link) => ({
          ...link,
          onClick: link.href.startsWith("#") ? handleLinkClick(link.href) : undefined,
        }))}
      />
    </div>
  );
}
