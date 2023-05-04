import { Layout } from '@/src/components';
import { request, gql } from 'graphql-request';
import { BlogCard } from '@/src/components';

const query = gql`
  query MyQuery {
    posts {
      id
      publishDate
      slug
      title
      coverPhoto {
        url
      }
      content {
        html
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
  console.log(posts);
  return (
    <Layout title="Andrew Rowley's Blog">
      <div className='pt-40 grid grid-cols-1 sm:grid-cols-2 gap-16 dark:text-slate-200'>
        {posts.map(post => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
