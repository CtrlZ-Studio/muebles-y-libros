import { useRef } from 'react';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';

import ProjectCard from 'components/project/ProjectCard';
import IconDragRight from 'components/icons/IconDragRight';
import IconDragLeft from 'components/icons/IconDragLeft';

const WorkSection = ({ projectsData }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      className="relative w-screen flex min-h-screen lg:h-screen text-white overflow-x-hidden lg:scroll-snap-start"
      ref={constraintsRef}
    >
      <header className="absolute top-0 left-0 right-0 tw-header border-bottom border-black bg-black text-white">
        {WEB_NAME} // Hacemos
      </header>

      <div className="flex tw-pt lg:h-screen">
        <motion.div
          className="relative flex items-center text-black"
          drag={'x'}
          dragConstraints={constraintsRef}
          dragElastic={0.05}
        >
          <motion.div
            className="absolute top-6 right-6 flex space-x-3 text-sm items-center"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <div className="w-4">
              <IconDragLeft />
            </div>

            <p>Arrastra para + proyectos</p>
          </motion.div>

          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}

          <motion.div
            className="absolute bottom-6 left-6 flex space-x-3 text-sm items-center"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <p>Arrastra para + proyectos</p>
            <div className="w-4">
              <IconDragRight />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
