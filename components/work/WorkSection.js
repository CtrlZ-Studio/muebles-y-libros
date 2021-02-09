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
      className="relative w-screen min-h-screen lg:h-screen text-white overflow-x-hidden lg:scroll-snap-start"
      ref={constraintsRef}
    >
      <header className="absolute top-0 left-0 right-0 tw-header border-bottom border-black bg-black text-white">
        {WEB_NAME} // Hacemos
      </header>

      <div className="flex lg:h-screen">
        <motion.div
          className="relative hidden lg:flex items-center text-black cursor-move lg:mt-20 2xl:mt-24"
          drag={'x'}
          dragConstraints={constraintsRef}
          dragElastic={0.05}
        >
          <div className="lg:absolute 2xl:top-20 2xl:right-12 flex space-x-3 w-48 text-sm items-center">
            <div className="lg:w-3 2xl:w-4">
              <IconDragLeft />
            </div>
            <p>Arrastra para + proyectos</p>
          </div>

          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}

          <div className="lg:absolute 2xl:bottom-20 2xl:left-12 flex space-x-3 w-48 text-sm items-center">
            <p>Arrastra para + proyectos</p>
            <div className="lg:w-3 2xl:w-4">
              <IconDragRight />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center w-full lg:hidden space-y-12 pt-24 pb-12">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
