import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { Wrapper, ScrollToTop } from '../exports/exports';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <ScrollToTop />
      <Component {...pageProps} />
    </Wrapper>
  );
}
