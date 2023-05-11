import { Author, Layout } from '@/src/components';
import { request, gql } from 'graphql-request';
import Head from 'next/head';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useEffect, useState } from 'react';

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
        raw
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
  const [showRichText, setShowRichText] = useState(false);

  useEffect(() => {
    setShowRichText(true);
  }, []);

  console.log(post.content.raw);
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
      <article className='pt-20 pb-20 mx-auto max-w-3xl love inset-y-auto1xl dark:text-slate-200 flex flex-col  md:pt-40'>
        <h1 className='mt-10 text-center text-pink-600 font-bold text-4xl sm:text-6xl'>
          {post?.title}
        </h1>
        <blockquote className='text-center mt-4 text-xl sm:text-2xl font-medium max-w-2xl text-slate-900 mb-4 dark:text-slate-200'>
          {post?.excerpt}
        </blockquote>
        <div className='self-center'>
          <Author post={post} />
        </div>
        <Image
          src={post?.coverPhoto?.url}
          width={1200}
          height={600}
          alt='blog post image'
          priority
          className='my-10'
        />
        {showRichText && (
          <RichText
            content={post?.content?.raw.children}
            renderers={{
              p: ({ children }) => <p className='text-2xl mb-6'>{children}</p>,
              h2: ({ children }) => (
                <h2 className='text-pink-600 font-bold text-4xl mb-2'>
                  {children}
                </h2>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
            }}
          />
        )}
      </article>
    </Layout>
  );
};

export default Post;
