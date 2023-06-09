import Head from 'next/head';
import { request, gql } from 'graphql-request';
import { Hero, About, Projects, Contact, Layout } from '@/src/components';

export default function Home({ projects }) {
  return (
    <Layout>
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
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='icon' sizes='192x192' href='/android-chrome-192x192.png' />
        <link rel='icon' sizes='512x512' href='/android-chrome-512x512.png' />
      </Head>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  );
}

const projectsQuery = gql`
  query GetProjects {
    projects(orderBy: createdAt_DESC) {
      id
      liveDemoUrl
      githubUrl
      desc
      blogUrl
      coverPhoto {
        url
      }
      title
    }
  }
`;

export const getStaticProps = async () => {
  const { projects } = await request(
    process.env.HYGRAPH_API_ENDPOINT,
    projectsQuery
  );

  return {
    props: { projects },
    revalidate: 10,
  };
};
