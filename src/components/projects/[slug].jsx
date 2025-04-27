// pages/project/[slug].js
"use client";
import { useRouter } from 'next/router';
import { projectsData } from '../../data/projects';
import GLBViewer from '../../components/GLB';
import Link from 'next/link';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-sky-500 mb-4">{project.name}</h2>
      <p className="text-white text-lg mb-6">{project.details.explanation}</p>

      {project.details.glbObjectUrl && (
  <div className="mb-6">
    <h3 className="text-xl text-sky-500 mb-2">3D Model</h3>
    <GLBViewer modelPath={project.details.glbObjectUrl} /> {/* This line is crucial */}
  </div>
)}

      {project.details.liveLink && (
        <div className="mb-6">
          <h3 className="text-xl text-sky-500 mb-2">Live Project</h3>
          <Link href={project.details.liveLink} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline">
            Visit Project
          </Link>
        </div>
      )}

      <Link href="/#projects" className="text-gray-400 hover:text-gray-300">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetailPage;