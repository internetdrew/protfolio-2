import { Author, Layout } from '@/src/components';
import { request, gql } from 'graphql-request';
import Head from 'next/head';
import Image from 'next/image';

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      publishDate
      excerpt
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

const Post = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{`${post?.title} by ${post?.author?.name}`}</title>
        <meta
          property='og:title'
          content={`${post?.title} by ${post?.author?.name}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={post?.coverPhoto?.url} />
        <meta
          property='og:url'
          content={`https://internetdrew.com/blog/${post?.slug}`}
        />
        <meta name='twitter:card' content='summary_large_image' />

        <meta
          property='og:description'
          content={`A blog post written by ${post?.author?.name}.`}
        />
        <meta property='og:site_name' content='Internet Drew' />
        <meta name='twitter:image:alt' content='Alt text for image' />
      </Head>
      <article className='pt-40 pb-20 mx-auto max-w-3xl dark:text-slate-200 flex flex-col items-center'>
        <h1 className='mt-10 text-center text-pink-600 font-bold text-4xl sm:text-6xl'>
          {post?.title}
        </h1>
        <blockquote className='text-center mt-4 text-xl sm:text-2xl font-medium max-w-2xl text-slate-900 mb-4 dark:text-slate-200'>
          {post?.excerpt}
        </blockquote>
        <Author post={post} />
        <Image
          src={post?.coverPhoto?.url}
          width={1200}
          height={600}
          alt='blog post image'
          priority
          className='mt-10'
        />
        <div
          className='w-full mt-10 text-xl leading-10 sm:text-2xl'
          dangerouslySetInnerHTML={{ __html: post?.content?.html }}
        ></div>
      </article>
    </Layout>
  );
};

export default Post;
