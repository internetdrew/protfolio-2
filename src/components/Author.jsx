import Image from 'next/image';

const Author = ({ post, inCard }) => {
  return (
    <div className='flex items-center mt-auto'>
      <Image
        src={post?.author?.avatar?.url}
        width={500}
        height={500}
        alt='author image'
        priority
        className='w-14 h-14 rounded-full border-solid border-2 p-1 border-cyan-400 mr-2 object-cover'
      />
      <div className={`${!inCard ? 'dark:text-slate-200' : ''}`}>
        <h3 className='font-semibold text-lg -mb-1'>{post?.author?.name}</h3>
        <h3 className={`text-sm font-normal`}>
          {new Date(post?.publishDate).toLocaleDateString('en-US', {
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
