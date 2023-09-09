import '@/styles/globals.css';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id='
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3Q5Y9FR4KE')`}
      </Script>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
