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
    <div className='bg-slate-100 pb-6 rounded-lg overflow-hidden border-2 hover:shadow-xl hover:shadow-pink-600/50'>
      <div className='w-full opacity-70 hover:opacity-100 transition-all duration-300'>
        <Image
          src={url}
          alt={`${project.name} screenshot`}
          className='w-full h-auto'
          height={500}
          width={500}
          loading='lazy'
        />
      </div>
      <div className='px-8 pt-6 bg-slate-100 h-full'>
        <h4 className='text-2xl font-semibold text-pink-600'>{title}</h4>
        <p className='text-lg text-gray-900'>{desc}</p>
        <div className='flex items-center justify-end mt-4'>
          {blogUrl ? (
            <Link
              href={blogUrl}
              className='px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-700 text-slate-200 font-semibold text-lg rounded-lg mr-auto'
            >
              Read about it
            </Link>
          ) : null}
          <ul className='flex justify-end gap-2 text-3xl text-gray-900'>
            <li>
              <a href={liveDemoUrl} target='_blank'>
                <AiOutlineLink />
              </a>
            </li>
            <li>
              <a href={githubUrl} target='_blank'>
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
