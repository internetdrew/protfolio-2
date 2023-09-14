import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const Card = ({ project }) => {
  const {
    title,
    desc,
    githubUrl,
    liveDemoUrl,
    blogUrl,
    coverPhoto: { url },
  } = project;

  return (
    <div className='bg-slate-100 pb-6 duration-300 rounded-lg overflow-hidden border-2 hover:shadow-xl hover:shadow-slate-600/50 dark:hover:shadow-cyan-400/50'>
      <div className='w-full opacity-70 hover:opacity-100 transition-all duration-300'>
        <Image
          src={url}
          alt={`${project.name} screenshot`}
          className='w-full h-auto'
          height={500}
          width={500}
          loading='lazy'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='px-8 pt-6 bg-[#FBFCFD] h-full'>
        <h4 className='text-2xl font-semibold text-slate-900'>{title}</h4>
        <p className='text-lg text-gray-900'>{desc}</p>
        <div className='flex items-center justify-end mt-4'>
          {blogUrl ? (
            <Link
              href={blogUrl}
              className='px-4 py-2 bg-slate-900 text-slate-100 dark:bg-[#2FD5EE] dark:text-slate-900 font-semibold text-lg rounded-lg mr-auto hover:bg-cyan-500 duration-300'
              aria-label={`Link to project titled ${project.title}`}
            >
              Read about it
            </Link>
          ) : null}
          <ul className='flex justify-end gap-2 text-3xl text-gray-900'>
            <li>
              <a
                href={liveDemoUrl}
                target='_blank'
                aria-label='Link to live project'
                className='hover:text-cyan-500 duration-300'
              >
                <AiOutlineLink />
              </a>
            </li>
            <li>
              <a
                href={githubUrl}
                target='_blank'
                aria-label='Link to project github'
                className='hover:text-cyan-500 duration-300'
              >
                <AiFillGithub />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
