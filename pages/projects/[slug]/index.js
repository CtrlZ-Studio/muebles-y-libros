import { getAllProjectsWithSlug, getProject } from 'lib/graphcms';

import Slider from 'components/work/Slider';

export default function ProjectPage({ project }) {
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:space-x-12 space-y-24 lg:space-y-0 py-24 lg:pb-0 lg:pt-0 justify-center items-center min-h-screen lg:h-screen tw-container">
        <div className="flex flex-col justify-center space-y-6 lg:h-full w-full lg:w-1/2">
          <h1 className="font-heading text-6xl 2xl:text-8xl text-accent-dark">
            {project.title}
          </h1>
          <div
            className="text-lg 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: project.description.html }}
          />
        </div>

        <div className="h-48 lg:h-full w-full lg:w-1/2">
          <Slider gallery={project.gallery} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = (await getProject(params.slug)) || {};

  return {
    props: {
      project: data.project
    }
  };
};

export const getStaticPaths = async () => {
  const projects = await getAllProjectsWithSlug();

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: true
  };
};
