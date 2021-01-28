import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageWrapper from 'components/shared/PageWrapper';

export default function PageContact() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Contact</title>{' '}
        <meta name="description" content="Contact page description." />
      </Head>

      <PageWrapper>
        <h1>CONTACT PAGE</h1>
      </PageWrapper>
    </>
  );
}
