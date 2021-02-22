import Head from 'next/head';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';
import { pageVariants } from 'utils/framer';
import {
  getHome,
  getAbout,
  getContact,
  getWork,
  getAllProjects
} from 'lib/graphcms';

import Layout from 'components/nav/Layout';
import HomeSection from 'components/home/HomeSection';
import AboutSection from 'components/about/AboutSection';
import WorkSection from 'components/work/WorkSection';
import ContactSection from 'components/contact/ContactSection';

export default function Index({
  preview,
  homeData,
  aboutData,
  contactData,
  workData,
  projectsData
}) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{WEB_NAME}</title>
          <meta name="description" content={homeData.seoMetadata.description} />
        </Head>

        <motion.div
          className="h-screen lg:scroll-snap-y overflow-y-scroll"
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          variants={pageVariants}
        >
          <HomeSection homeData={homeData} />

          <AboutSection aboutData={aboutData} contactData={contactData} />

          <WorkSection projectsData={projectsData} workData={workData} />

          <ContactSection contactData={contactData} />
        </motion.div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = (await getHome()) || [];
  const aboutData = (await getAbout()) || [];
  const contactData = (await getContact()) || [];
  const workData = (await getWork()) || [];
  const projectsData = (await getAllProjects(preview)) || [];

  return {
    props: {
      preview,
      homeData,
      aboutData,
      contactData,
      workData,
      projectsData
    }
  };
}
