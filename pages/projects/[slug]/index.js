import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { motion } from 'framer-motion';

import { getAllProjectsWithSlug, getProject } from 'lib/graphcms';
import { pageVariants } from 'utils/framer';
import { WEB_NAME } from 'utils/constants';

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
        className="flex flex-col lg:flex-row lg:h-screen lg:items-center lg:justify-evenly space-y-12 lg:space-y-0 tw-px pt-12 lg:pt-0"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={pageVariants}
      >
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
            <Head>
              <title>
                {WEB_NAME} || {project.seoMetadata.title}
              </title>
              <meta
                name="description"
                content={project.seoMetadata.description}
              />
            </Head>

            <div className="absolute top-6 lg:top-10 2xl:top-12 left-6 lg:left-10 2xl:left-12 w-6 lg:w-10 2xl:w-12 text-accent-dark tw-link">
              <Link href="/#work" scroll={false}>
                <a>
                  <IconBack />
                </a>
              </Link>
            </div>

            <div className="flex flex-col space-y-6 lg:space-y-10 2xl:space-y-12 w-full lg:w-1/3">
              <h1 className="font-heading text-5xl lg:text-7xl 2xl:text-8xl text-accent-dark">
                {project.title}
              </h1>

              <div
                className="text-base lg:text-xl 2xl:text-2xl"
                dangerouslySetInnerHTML={{ __html: project.description.html }}
              />
            </div>

            <Slider gallery={project.gallery} />
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
