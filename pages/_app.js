import { useEffect } from 'react';
import Head from 'next/head';
import '@/styles/tailwind.css';
import Fonts from '@/components/Fonts';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  });

  return (
    <div className="antialiased">
      <Head>
        <title>Art Palette</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
