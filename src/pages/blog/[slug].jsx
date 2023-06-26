import { Author, Layout } from '@/src/components';
import { request, gql } from 'graphql-request';
import Head from 'next/head';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

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
    fallback: 'blocking',
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

  useEffect(() => {
    Prism.highlightAll();
  }, [showRichText]);

  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
        <meta property='og:title' content={post?.title} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={post?.coverPhoto?.url} />
        <meta
          property='og:url'
          content={`https://internetdrew.com/blog/${post?.slug}`}
        />
        <meta name='twitter:card' content='summary_large_image' />

        <meta property='og:description' content={post?.excerpt} />
        <meta property='og:site_name' content='Internet Drew' />
        <meta name='twitter:image:alt' content='Alt text for image' />
      </Head>
      <article className='pt-20 pb-20 mx-auto max-w-3xl love inset-y-auto1xl language-javascript dark:text-slate-200 flex flex-col  md:pt-40'>
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
              p: ({ children }) => <p className='text-2xl my-3'>{children}</p>,
              h2: ({ children }) => (
                <h2 className='text-pink-600 font-bold text-4xl mt-10'>
                  {children}
                </h2>
              ),
              li: ({ children }) => (
                <li className='text-2xl items-center mb-1 pl-6 flex'>
                  <span className='mr-2 mb-auto'>•</span>
                  <div>{children}</div>
                </li>
              ),
              ol: ({ children }) => (
                <ol className='list-decimal mb-6'>{children}</ol>
              ),
              ul: ({ children }) => (
                <ul className='list-disc mb-6'>{children}</ul>
              ),
              h3: ({ children }) => (
                <h3 className='text-pink-600 font-semibold text-3xl'>
                  {children}
                </h3>
              ),
              bold: ({ children }) => (
                <strong className='font-bold'>{children}</strong>
              ),
              code_block: ({ children }) => (
                <pre>
                  <code>{children}</code>
                </pre>
              ),
              code: ({ children }) => (
                <span className='text-lg'>
                  <code>{children}</code>
                </span>
              ),
              a: ({ children, href }) => (
                <a href={href} target='_blank' className='text-pink-600'>
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className='max-w-xl mx-auto mb-6 text-pink-600 bg-slate-900 p-6 text-xl font-semibold italic rounded-md dark:bg-slate-700'>
                  {children}
                </blockquote>
              ),
              image: ({ src, altText, height, width }) => (
                <Image src={src} alt={altText} height={height} width={width} />
              ),
            }}
          />
        )}
      </article>
    </Layout>
  );
};

export default Post;
