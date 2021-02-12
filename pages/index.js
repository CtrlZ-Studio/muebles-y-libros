import Head from 'next/head';
import { motion } from 'framer-motion';

import { WEB_NAME } from 'utils/constants';
import { pageVariants } from 'utils/framer';
import { getHome, getAbout, getContact, getAllProjects } from 'lib/graphcms';

import HomeSection from 'components/home/HomeSection';
import AboutSection from 'components/about/AboutSection';
import WorkSection from 'components/work/WorkSection';

export default function Index({
  homeData,
  aboutData,
  contactData,
  projectsData,
  authorsData
}) {
  return (
    <>
      <Head>
        <title>{WEB_NAME}</title>
        <meta name="description" content={homeData.seoMetadata.description} />
      </Head>

      <motion.div
        className="h-screen scroll-snap-y overflow-y-scroll"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={pageVariants}
      >
        <HomeSection homeData={homeData} />

        <AboutSection
          aboutData={aboutData}
          contactData={contactData}
          authorsData={authorsData}
        />
        <div id="work">
          <WorkSection projectsData={projectsData} />
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const homeData = (await getHome()) || [];
  const aboutData = (await getAbout()) || [];
  const contactData = (await getContact()) || [];
  const projectsData = (await getAllProjects()) || [];

  return {
    props: {
      homeData,
      aboutData,
      contactData,
      projectsData
    }
  };
}
