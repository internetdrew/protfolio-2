import { Hero, About, Projects, Contact, Layout } from '@/src/components';
import request, { gql } from 'graphql-request';

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

export default function Home({ projects }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  );
}
