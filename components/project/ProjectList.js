import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ProjectCard from 'components/project/ProjectCard';

const ProjectList = ({ projectsData }) => {
  const projectsLength = projectsData.length;

  const leftConstraintLaptop = projectsLength * 384 * -1;
  const leftConstraintMobile = projectsLength * 208 * -1;

  return (
    <>
      <motion.div
        className="hidden lg:flex items-center space-x-12 lg:space-x-24 h-full text-black cursor-move"
        drag={'x'}
        dragConstraints={{ left: leftConstraintLaptop, right: 0 }}
        dragElastic={0.05}
      >
        {projectsData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </motion.div>

      <div className="flex flex-col items-center w-full lg:hidden space-y-12 py-12">
        {projectsData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
