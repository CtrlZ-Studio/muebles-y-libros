import Head from 'next/head';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';
import { pageVariants } from 'utils/framer';
import { getHome, getAbout, getContact, getAllProjects } from 'lib/graphcms';

import Layout from 'components/nav/Layout';
import HomeHero from 'components/home/HomeHero';
import AboutSection from 'components/about/AboutSection';
import WorkSection from 'components/work/WorkSection';

export default function Index({
  homeData,
  aboutData,
  contactData,
  projectsData,
  authorsData,
  preview
}) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{WEB_NAME}</title>
          <meta name="description" content={homeData.seoMetadata.description} />
        </Head>

        <motion.div
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          variants={pageVariants}
        >
          <HomeHero homeData={homeData} />

          <AboutSection
            aboutData={aboutData}
            contactData={contactData}
            authorsData={authorsData}
          />

          <WorkSection projectsData={projectsData} />
        </motion.div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = (await getHome(preview)) || [];
  const aboutData = (await getAbout(preview)) || [];
  const contactData = (await getContact(preview)) || [];
  const projectsData = (await getAllProjects(preview)) || [];

  return {
    props: {
      homeData,
      aboutData,
      contactData,
      projectsData,
      preview
    }
  };
}
