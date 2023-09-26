import '@/styles/globals.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <title>Andrew Rowley — Software Engineer</title>
          <meta
            property='og:title'
            content='Andrew Rowley — Software Engineer'
          />
          <meta
            property='og:image'
            content='https://media.graphassets.com/lRDp723UQgq262BW8ryX'
          />
          <meta property='og:url' content='https://internetdrew.com' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='description'
            content="Andrew Rowley's Front-end Engineer Portfolio"
          />
          <meta
            property='og:description'
            content='The portfolio of Software Engineer, Andrew Rowley'
          />
          <meta property='og:site_name' content='Internet Drew' />
          <meta name='twitter:image:alt' content='Alt text for image' />
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link rel='icon' sizes='192x192' href='/android-chrome-192x192.png' />
          <link rel='icon' sizes='512x512' href='/android-chrome-512x512.png' />
        </Head>
        <Component {...pageProps} />
        <Toaster />
        <Analytics />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
