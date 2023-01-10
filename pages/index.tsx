import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import { MainPage } from '../exports/exports';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KayDavidsAutos</title>
        <meta
          name="description"
          content="Providing luxury cars at an affordable price"
          key="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta name="robots" content="index, follow" />
        {/* <meta charset="UTF-8"/> */}
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="">
        <MainPage />
      </main>
    </>
  );
}
