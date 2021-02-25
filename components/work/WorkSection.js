import { useRef } from 'react';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';

import ProjectCard from 'components/project/ProjectCard';
import SliderControl from 'components/work/SliderControl';
import IconDragRight from 'components/icons/IconDragRight';
import IconDragLeft from 'components/icons/IconDragLeft';
import SectionHeader from 'components/shared/SectionHeader';

const WorkSection = ({ projectsData, workData }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      id="work"
      className="relative w-screen flex min-h-screen lg:h-screen text-white overflow-x-hidden scroll-snap-start"
      ref={constraintsRef}
    >
      <SectionHeader bg="bg-accent-dark" text="text-white">
        {WEB_NAME} // {workData.heading}
      </SectionHeader>

      <div className="flex tw-py lg:h-screen">
        <motion.div
          className="relative flex items-center"
          drag={'x'}
          dragConstraints={constraintsRef}
          dragElastic={0.05}
        >
          <motion.div
            className="absolute top-0 right-0 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center text-accent-dark"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <div className="w-2 lg:w-4 2xl:w-5">
              <IconDragLeft />
            </div>

            <SliderControl />
          </motion.div>

          {projectsData &&
            projectsData.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}

          <motion.div
            className="absolute bottom-0 left-0 flex space-x-3 lg:space-x-5 2xl:space-x-6 text-sm lg:text-lg 2xl:text-xl items-center text-accent-dark"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
          >
            <SliderControl />
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
