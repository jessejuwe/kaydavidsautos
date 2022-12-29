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
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon1.ico" />
      </Head>

      <main className="">
        <MainPage />
      </main>
    </>
  );
}
