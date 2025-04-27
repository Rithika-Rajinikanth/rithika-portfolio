"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 w-full max-w-6xl border border-sky-400 shadow-[0_0_20px_#38bdf8]",
        className
      )}
      style={{ marginTop: "20px", marginBottom: "40px" }}
    >
      {children}
    </motion.div>
  );
};

const AboutSkills = () => (
    <ItemLayout className="w-full bg-black/50 backdrop-blur-md border border-sky-500 rounded-xl shadow-[0_0_20px_#0ea5e9] p-6 flex flex-col items-start">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4 text-left w-full">Programming & Technical Skills</h2>

        <p className="mb-2 text-white text-left w-full">
            <span className="font-semibold text-sky-300">Frontend Development:</span> Proficient in modern UI frameworks such as
            <strong className="text-sky-300"> React, Next.js, HTML5, CSS3, Streamlit</strong>, and
            <strong className="text-sky-300"> Tailwind CSS</strong> for responsive, component-driven design.
        </p>

        <p className="mb-2 text-white text-left w-full">
            <span className="font-semibold text-sky-300">Backend Development:</span> Experienced in building scalable REST APIs and server-side logic using
            <strong className="text-sky-300"> Node.js, Express.js</strong>, and
            <strong className="text-sky-300"> Flask</strong>.
        </p>

        <p className="mb-2 text-white text-left w-full">
            <span className="font-semibold text-sky-300">Database Management:</span> Skilled in both NoSQL and relational databases including
            <strong className="text-sky-300"> MongoDB, PostgreSQL</strong>, and
            <strong className="text-sky-300"> MySQL</strong>.
        </p>

        <p className="mb-2 text-white text-left w-full">
            <span className="font-semibold text-sky-300">Version Control:</span> Proficient in
            <strong className="text-sky-300"> Git</strong> and
            <strong className="text-sky-300"> GitHub</strong> for collaborative development and codebase management.
        </p>

        <p className="mb-4 text-white text-left w-full">
            <span className="font-semibold text-sky-300">Problem Solving:</span> Demonstrated ability to solve complex algorithmic challenges with a strong grasp of
            <strong className="text-sky-300"> data structures, dynamic programming</strong>, and
            <strong className="text-sky-300"> optimization algorithms</strong>.
        </p>

        <div className="mb-4 w-full text-left">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Competitive Programming</h3>
            <p className="text-white">
                LeetCode Problems Solved:
                <strong className="text-sky-300">
                    <a href="https://leetcode.com/u/rithika19/" target="_blank" rel="noopener noreferrer" className="ml-2 underline">Visit Profile</a>
                </strong>
            </p>
            <p className="text-white">
                HackerRank Problems Solved:
                <strong className="text-sky-300">
                    <a href="https://www.hackerrank.com/profile/rithika19_03_201" target="_blank" rel="noopener noreferrer" className="ml-2 underline">Visit Profile</a>
                </strong>
            </p>
        </div>

        <p className="text-white text-left w-full">
            I actively contribute to multiple domains in software development and artificial intelligence. I am deeply passionate about
            <strong className="text-sky-300"> AI agentic systems</strong>,
            <strong className="text-sky-300"> GenAI technologies</strong>, and their applications in real-world decision-making.
            Additionally, I explore
            <strong className="text-sky-300"> blockchain technology</strong> with a strong understanding of its
            <strong className="text-sky-300"> underlying mathematics, cryptography, and consensus algorithms</strong>.
        </p>

        <p className="text-white text-left w-full mt-4">
            My interests also span across
            <strong className="text-sky-300"> finance-based technologies</strong>,
            where I enjoy building data-driven intelligent systems. I work on projects in:
            <ul className="list-disc list-inside mt-2 space-y-1 text-white">
                <li><strong className="text-sky-300">Data Analytics</strong> and <strong className="text-sky-300">Machine Learning</strong></li>
                <li><strong className="text-sky-300">Web & App Development</strong> using the <strong className="text-sky-300">MERN stack</strong></li>
                <li><strong className="text-sky-300">Game Development</strong> with <strong className="text-sky-300">Unreal Engine</strong> and <strong className="text-sky-300">Unity</strong></li>
                <li><strong className="text-sky-300">Architectural Modeling</strong> using <strong className="text-sky-300">Blender</strong> and <strong className="text-sky-300">Autodesk</strong></li>
            </ul>
        </p>

        <p className="text-white text-left w-full mt-4">
            <span className="font-semibold text-sky-300">Programming & Software Tools Used:</span>
            Visual Studio Code, PyCharm, Jupyter Notebook, Postman, MongoDB Compass, GitHub Desktop, Unity Editor, Unreal Editor, Blender, Autodesk Revit, Firebase Console, Figma.
        </p>
    </ItemLayout>

);

export default AboutSkills;