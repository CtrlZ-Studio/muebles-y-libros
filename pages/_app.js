import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Layout from 'components/nav/Layout';

import 'styles/index.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
