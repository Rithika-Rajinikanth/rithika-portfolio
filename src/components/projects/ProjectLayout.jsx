// project/components/ProjectLayout.jsx
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, slug }) => { // Receive slug as a prop
  return (
    <ProjectLink
      variants={item}
      href={`/project/${slug}`} // Link to the dynamic project detail route
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-[0_0_20px_#38bdf8] transition-shadow duration-300 border-2 border-sky-500 !border-sky-500 cursor-pointer" // Added cursor-pointer
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-white font-semibold">{name}</h2>
        <p className="text-white hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b-2 border-dashed !border-sky-500" />
      <p className="text-white sm:text-white">{new Date(date).toDateString()}</p>
    </ProjectLink>
  );
};

export default ProjectLayout;

