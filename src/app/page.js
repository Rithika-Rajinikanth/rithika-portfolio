'use client';
import Image from "next/image";
import Link from 'next/link';
import Navigation from "@/components/navigation";
import ProjectList from "@/components/projects";
import { projectsData } from "./projectsData";
import AboutDetails from "@/components/about/AboutDetails";
import AboutSkills from "@/components/about/about";
import Form from "./../components/contact/Form";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@/app/page.css";
import Background from "./../../public/background/background.jpg"


//const AvatarModel = dynamic(() => import("@/components/models/AvatarModel"), {
  //ssr: false, // Ensures the model is only loaded on the client side
//});
const titles = [
  { text: "Web Developer", icon: "🌐" },
  { text: "Android Developer", icon: "📱" },
  { text: "Blockchain Developer", icon: "🔗" },
  { text: "Quantum Enthusiast", icon: "⚛️" },
  { text: "AI Agent Innovator", icon: "🤖" },
  { text: "Business & Marketing Enthusiast", icon: "📈" },
  { text: "Digital Marketer", icon: "💻" },
];


export default function SinglePage() {

  const titles = [
    { text: "Web Developer", icon: "🌐" },
    { text: "Android Developer", icon: "📱" },
    { text: "Blockchain Developer", icon: "🔗" },
    { text: "Quantum Enthusiast", icon: "⚛️" },
    { text: "AI Agent Innovator", icon: "🤖" },
    { text: "Business & Marketing Enthusiast", icon: "📈" },
    { text: "Digital Marketer", icon: "💻" },
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center relative">
      
      <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
      <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
          priority
      />
      </div>
        {/* Navigation */}
        <Navigation />

        <section id="home" className="relative w-full min-h-screen flex flex-row items-center justify-center">
          {/* Left Side: Text Content */}
          <div className="relative z-10 text-left text-white w-1/2 pl-16 drop-shadow-lg">
          <h1 className="neon-text">Hey, I'm Rithika</h1>
          <motion.p
          key={index}
          className="text-lg mt-4 text-gray-200 flex items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <span className="mr-2">{titles[index].icon}</span> {titles[index].text}
        </motion.p>
          </div>

        </section>
        
        {/* About Section (Centered) */}
        <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10">
      <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
          priority
      />
      </div>
          <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-sky-500" style={{ fontSize: '50px' }}>About Me</h1>
            <p className="text-lg mt-4 text-foreground">
              <AboutDetails/>
            </p>
            <AboutSkills />
          </div>
        </section>

        {/* Projects Section (Centered) */}
        <section id="projects" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10">
      <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
          priority
      />
      </div>
          <h1 className="text-4xl font-semibold text-sky-500" style={{ fontSize: '50px' }}>Projects</h1>
          <br />
          <ProjectList projects={projectsData} />
        </section>

        {/* Contact Section (Centered) */}
        <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-16">
        <div className="absolute inset-0 -z-10">
      <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
          priority
      />
      </div>
          <article className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold text-sky-500" style={{ fontSize: '50px' }}>Get in Touch</h1>
            <p className="text-lg text-foreground">
              Let's collaborate! Feel free to reach out for opportunities, discussions, or just to connect.
            </p>
            <br/>
            <Form />
          </article>
        </section>
      </div>
    </main>
  );
}
