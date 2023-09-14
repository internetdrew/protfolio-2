import { Layout } from '@/src/components';
import { request, gql } from 'graphql-request';
import { BlogCard } from '@/src/components';
import Head from 'next/head';

const query = gql`
  query MyQuery {
    posts(orderBy: publishedAt_DESC) {
      id
      publishDate
      slug
      title
      excerpt
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const { posts } = await request(process.env.HYGRAPH_API_ENDPOINT, query);
  return {
    props: { posts },
    revalidate: 10,
  };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Rowley's Blog</title>
      </Head>
      <div className='py-40 grid grid-flow-dense cols-1 xl:grid-cols-2 gap-16 max-w-5xl mx-auto dark:text-slate-200'>
        {posts.map(post => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
