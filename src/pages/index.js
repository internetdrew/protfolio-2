import Head from 'next/head';
import { Hero, About, Projects, Contact, Layout } from '@/src/components';

export default function Home() {
  return (
    <Layout title='Andrew Rowley — Software Engineer'>
      <Head>
        <title>Andrew Rowley — Software Engineer</title>
        <meta property='og:title' content='Andrew Rowley — Software Engineer' />
        <meta
          property='og:image'
          content='https://media.graphassets.com/lRDp723UQgq262BW8ryX'
        />
        <meta property='og:url' content='https://internetdrew.com' />
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          property='og:description'
          content='The portfolio of Software Engineer, Andrew Rowley'
        />
        <meta property='og:site_name' content='Internet Drew' />
        <meta name='twitter:image:alt' content='Alt text for image' />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
