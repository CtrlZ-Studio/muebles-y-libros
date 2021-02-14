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
      className="relative w-screen flex min-h-screen lg:h-screen text-white overflow-x-hidden lg:scroll-snap-start"
      ref={constraintsRef}
    >
      <header className="absolute top-0 left-0 right-0 tw-header bg-black text-white border-black">
        {WEB_NAME} // {workData.heading}
      </header>

      <div className="flex tw-pt lg:h-screen">
        <motion.div
          className="relative flex items-center text-black"
          drag={'x'}
          dragConstraints={constraintsRef}
          dragElastic={0.05}
        >
          <motion.div
            className="absolute top-3 lg:top-5 2xl:top-6 right-3 lg:right-5 2xl:right-6 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <div className="w-3 lg:w-5 2xl:w-6">
              <IconDragLeft />
            </div>

            <p>Arrastra para + proyectos</p>
          </motion.div>

          {projectsData &&
            projectsData.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}

          <motion.div
            className="absolute bottom-3 lg:bottom-5 2xl:bottom-6 left-3 lg:left-5 2xl:left-6 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <p>Arrastra para + proyectos</p>
            <div className="w-3 lg:w-5 2xl:w-6">
              <IconDragRight />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
