import Link from 'next/link';

import { WEB_NAME } from 'utils/constants';

import ProjectList from 'components/project/ProjectList';
import IconDragRight from 'components/icons/IconDragRight';
import IconDragLeft from 'components/icons/IconDragRight';

const WorkSection = ({ projectsData }) => {
  return (
    <section className="relative min-h-screen lg:h-screen text-white border-t-2 border-accent-dark">
      <header className="lg:absolute lg:top-0 lg:left-0 lg:right-0 flex items-center h-12 px-3 bg-black text-white uppercase lg:text-2xl">
        {WEB_NAME} // Hacemos
      </header>

      <div className="flex lg:h-screen tw-container">
        <ProjectList projectsData={projectsData} />
      </div>
    </section>
  );
};

export default WorkSection;
