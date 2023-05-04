import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Author } from '@/src/components';

const BlogCard = ({ post }) => {
  return (
    <div className='flex mx-auto max-w-lg bg-slate-100 border-2 text-slate-900 rounded-lg py-6 px-4 justify-center duration-300 hover:shadow-xl hover:shadow-pink-600/50'>
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
          <p className='text-lg font-medium'>{post?.excerpt}</p>
        </div>
        <Author post={post} />
      </Link>
    </div>
  );
};

export default BlogCard;
