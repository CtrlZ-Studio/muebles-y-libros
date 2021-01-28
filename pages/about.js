import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageWrapper from 'components/shared/PageWrapper';

export default function PageAbout() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | About</title>
        <meta name="description" content="About page description." />
      </Head>

      <PageWrapper>
        <h1>ABOUT PAGE</h1>
      </PageWrapper>
    </>
  );
}
