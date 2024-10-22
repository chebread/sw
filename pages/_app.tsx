import '@/styles/global.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import layoutStyles from './layout.module.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${layoutStyles.layout} ${pretendard.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
