import Link from 'next/link';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { motion } from 'framer-motion';

import { getAllProjectsWithSlug, getProject } from 'lib/graphcms';
import { pageVariants } from 'utils/framer';

import Layout from 'components/nav/Layout';
import Slider from 'components/work/Slider';
import IconBack from 'components/icons/IconBack';

export default function ProjectPage({ preview, project }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <motion.section
        className="relative flex flex-col lg:flex-row lg:space-x-12 space-y-24 lg:space-y-0 py-24 lg:pb-0 lg:pt-0 justify-center items-center min-h-screen lg:h-screen tw-px"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={pageVariants}
      >
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
            <div className="absolute top-12 left-12 w-6">
              <Link href="/#work" scroll={false}>
                <a>
                  <IconBack />
                </a>
              </Link>
            </div>

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
          </>
        )}
      </motion.section>
    </Layout>
  );
}

export const getStaticProps = async ({ params, preview = false }) => {
  const data = await getProject(params.slug, preview);

  return {
    props: {
      preview,
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
