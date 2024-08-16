import { Project } from '@/constants/projectsConstants';

const ProjectCard: React.FC<{
  project: Project;
  width: string;
  height: string;
}> = ({ project, width, height }) => {
  return (
    <div
      className={`${width} ${height} relative bg-white bg-opacity-10 rounded-lg overflow-hidden group`}
    >
      <div className="w-full h-full bg-gray-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 p-2 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        <h3 className="text-xs font-bold truncate text-white">
          {project.title}
        </h3>
        <p className="text-xs truncate text-gray-200">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
