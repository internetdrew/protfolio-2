import Image from 'next/image';

const Author = ({ post }) => {
  return (
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
  );
};

export default Author;
