import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';
import { getHome, getAbout, getContact, getAllProjects } from 'lib/graphcms';

import HomeHero from 'components/home/HomeHero';
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

      <HomeHero homeData={homeData} />

      <AboutSection
        aboutData={aboutData}
        contactData={contactData}
        authorsData={authorsData}
      />

      <WorkSection projectsData={projectsData} />
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
