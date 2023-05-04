import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const BlogCard = ({ post }) => {
  return (
    <div className='max-w-lg bg-slate-200 text-slate-900 rounded-lg py-6 px-4 flex justify-center duration-300 hover:shadow-xl hover:shadow-pink-600/50'>
      <Link href={`/blog/${post?.slug}`}>
        <Image
          src={post?.coverPhoto?.url}
          width={500}
          height={500}
          priority={true}
          alt=''
          // className='object-cover'
        />
        <div>
          <h2 className='text-3xl font-semibold my-4 text-pink-600'>
            {post.title}
          </h2>
          <div className='flex items-center'>
            <Image
              src={post.author.avatar.url}
              width={500}
              height={500}
              alt='author image'
              priority
              className='w-14 h-14 rounded-full border-solid border-2 p-1 border-pink-600 mr-2'
            />
            <div className='text-slate-900'>
              <h3 className='font-semibold text-lg -mb-1'>
                {post.author.name}
              </h3>
              <h3 className='text-sm font-normal'>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                  day: 'numeric',
                })}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
