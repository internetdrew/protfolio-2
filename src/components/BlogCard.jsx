import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const BlogCard = ({ post }) => {
  return (
    <div className='flex max-w-lg bg-slate-200 text-slate-900 rounded-lg py-6 px-4 justify-center duration-300 hover:shadow-xl hover:shadow-pink-600/50'>
      <Link href={`/blog/${post?.slug}`} className='flex flex-col'>
        <Image
          src={post?.coverPhoto?.url}
          width={500}
          height={500}
          priority={true}
          alt=''
          className='object-cover'
        />
        <div className='mt-4 mb-4'>
          <h2 className='text-3xl mb-1 font-semibold text-pink-600'>
            {post.title}
          </h2>
          <p className='text-lg font-medium'>{post.desc}</p>
        </div>
        <div className='flex items-center mt-auto'>
          <Image
            src={post.author.avatar.url}
            width={500}
            height={500}
            alt='author image'
            priority
            className='w-14 h-14 rounded-full border-solid border-2 p-1 border-pink-600 mr-2 object-cover'
          />
          <div className='text-slate-900'>
            <h3 className='font-semibold text-lg -mb-1'>{post.author.name}</h3>
            <h3 className='text-sm font-normal'>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              })}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
