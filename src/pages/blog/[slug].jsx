import { darkModeState } from '@/src/atoms/darkModeAtom';
import { Layout } from '@/src/components';
import { useRecoilValue } from 'recoil';
import { request, gql } from 'graphql-request';

const Post = ({ post }) => {
  console.log(post);

  const darkMode = useRecoilValue(darkModeState);

  return (
    <Layout>
      <div className='pt-40 dark:text-slate-200'>Blog post</div>
    </Layout>
  );
};

export default Post;

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      publishDate
      coverPhoto {
        id
        url
      }
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
    }
  }
`;

const slugQuery = gql`
  {
    posts {
      slug
    }
  }
`;

export const getStaticPaths = async () => {
  const { posts } = await request(process.env.HYGRAPH_API_ENDPOINT, slugQuery);

  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const { post } = await request(process.env.HYGRAPH_API_ENDPOINT, query, {
    slug,
  });
  return {
    props: { post },
    revalidate: 10,
  };
};
