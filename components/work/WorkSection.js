import { useRef } from 'react';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';

import ProjectCard from 'components/project/ProjectCard';
import IconDragRight from 'components/icons/IconDragRight';
import IconDragLeft from 'components/icons/IconDragLeft';

const WorkSection = ({ projectsData, workData }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      id="work"
      className="relative w-screen flex min-h-screen lg:h-screen text-white overflow-x-hidden scroll-snap-start"
      ref={constraintsRef}
    >
      <header className="absolute top-0 left-0 right-0 tw-header bg-accent-dark border-2 border-accent-dark text-white">
        {WEB_NAME} // {workData.heading}
      </header>

      <div className="flex tw-pt lg:h-screen">
        <motion.div
          className="relative flex items-center"
          drag={'x'}
          dragConstraints={constraintsRef}
          dragElastic={0.05}
        >
          <motion.div
            className="absolute top-8 lg:top-12 2xl:top-24 right-3 lg:right-5 2xl:right-6 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center text-accent-dark"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <div className="w-2 lg:w-4 2xl:w-5">
              <IconDragLeft />
            </div>

            <p className="text-xs lg:text-base 2xl:text-lg">
              Arrastra para + proyectos
            </p>
          </motion.div>

          {projectsData &&
            projectsData.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}

          <motion.div
            className="absolute bottom-8 lg:bottom-12 2xl:bottom-24 left-3 lg:left-5 2xl:left-6 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center text-accent-dark"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <p className="text-xs lg:text-base 2xl:text-lg">
              Arrastra para + proyectos
            </p>
            <div className="w-2 lg:w-4 2xl:w-5">
              <IconDragRight />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
