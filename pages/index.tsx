import Head from 'next/head';
import localFont from 'next/font/local';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${pretendard.variable}`}>
        <div>
          <Map
            center={{ lat: 33.450701, lng: 126.570667 }}
            style={{ width: '100vw', height: '100vh' }}
            level={3}
          />
        </div>
      </div>
    </>
  );
}
