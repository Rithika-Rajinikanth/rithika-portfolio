'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BtnList } from "@/app/data";
import Link from "next/link";

const Navigation = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(`#${targetId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-auto p-6 z-50">
      <nav className="flex flex-col items-center space-y-16">
        {/* First Set of Icons (Home and About) */}
        {BtnList.slice(0, 2).map((btn) => (
          <motion.div key={btn.label} className="relative flex flex-col items-center">
            <div
              className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-700 hover:bg-sky-600 cursor-pointer"
              onClick={(e) => handleScroll(e, btn.link)}
            >
              {/* Dynamically render the icon */}
              <btn.icon className="w-6 h-6 text-white group-hover:text-sky-300" />
            </div>
            <p className="mt-2 text-gray-300 group-hover:text-sky-300">{btn.label}</p>
          </motion.div>
        ))}

        {/* Animated Neural Link (Line and Pulsating Node) */}
        <motion.div className="relative flex flex-col items-center">
          <div className="w-1 h-32 bg-gray-700 animate-pulse"></div> {/* Pulsating Line */}
          <motion.div
            className="absolute w-4 h-4 bg-sky-300 rounded-full animate-pulse"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "ease-in-out",
            }}
          ></motion.div> {/* Pulsating Node */}
        </motion.div>

        {/* Second Set of Icons (Projects and Contact) */}
        {BtnList.slice(2, 4).map((btn) => (
          <motion.div key={btn.label} className="relative flex flex-col items-center">
            <div
              className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-700 hover:bg-sky-600 cursor-pointer"
              onClick={(e) => handleScroll(e, btn.link)}
            >
              {/* Dynamically render the icon */}
              <btn.icon className="w-6 h-6 text-white group-hover:text-sky-300" />
            </div>
            <p className="mt-2 text-gray-300 group-hover:text-sky-300">{btn.label}</p>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
