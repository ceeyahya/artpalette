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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#116f68" />
        <meta name="msapplication-TileColor" content="#fae4ca" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
