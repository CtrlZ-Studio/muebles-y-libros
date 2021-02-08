import Link from 'next/link';

import { WEB_NAME } from 'utils/constants';

import ProjectList from 'components/project/ProjectList';
import IconDragRight from 'components/icons/IconDragRight';
import IconDragLeft from 'components/icons/IconDragRight';

const WorkSection = ({ projectsData }) => {
  return (
    <section className="relative min-h-screen lg:h-screen text-white border-t-2 border-accent-dark">
      <header className="absolute top-0 left-0 right-0 tw-header border-bottom border-black bg-black text-white">
        {WEB_NAME} // Hacemos
      </header>

      <div className="flex lg:h-screen tw-container">
        <ProjectList projectsData={projectsData} />
      </div>
    </section>
  );
};

export default WorkSection;
