import { Roboto_Slab } from '@next/font/google';
import { RecoilRoot } from 'recoil';

import '@/assets/css/globals.css';

import type { AppProps } from 'next/app';

const roboto = Roboto_Slab({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
