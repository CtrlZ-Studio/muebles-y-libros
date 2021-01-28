import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageWrapper from 'components/shared/PageWrapper';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Home</title>
        <meta name="description" content="Home page description." />
      </Head>

      <PageWrapper>
        <h1 className="font-heading">HOME PAGE</h1>
      </PageWrapper>
    </>
  );
}
