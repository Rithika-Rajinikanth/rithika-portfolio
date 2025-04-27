// app/project/[slug]/page.js
"use client";
import { useParams } from 'next/navigation';
import { projectsData } from "@/app/projectsData";
// Import your 3D model viewer component (e.g., <GLBViewer />)
import GLBViewer from './../../../components/GLB';
import Link from 'next/link';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-sky-500 mb-4">{project.name}</h2>
      <br/>
      {project.details.glbObjectUrl && (
        <div className="mb-6">
          <h3 className="text-xl text-sky-500 mb-2">3D Model</h3>
          {<GLBViewer modelPath={project.details.glbObjectUrl} />}
        </div>
      )}
      <br />
      <div
        className="text-white text-lg mb-6"
        style={{ maxWidth: '1000px', width: '90%' }} // Added maxWidth and width
        dangerouslySetInnerHTML={{ __html: project.details.explanation }}
      />

      {project.details.liveLink && (
        <div className="mb-6">
          <h3 className="text-xl text-sky-500 mb-2">Live Project</h3>
          <Link href={project.details.liveLink} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline">
            Visit Project
          </Link>
        </div>
      )}

      <Link href="/#projects" className="text-gray-300 hover:text-gray-300">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetailPage;