import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialLinks = () => {
  return (
    <div className='text-5xl flex justify-center gap-4 mb-10 text-slate-900 dark:text-cyan-400'>
      <a
        href='https://www.linkedin.com/in/internetdrew/'
        target='_blank'
        aria-label='Link to LinkedIn profile'
        className='hover:text-cyan-500 duration-300'
      >
        <AiFillLinkedin />
      </a>
      <a
        href='https://github.com/internetdrew'
        target='_blank'
        aria-label='Link to GitHub'
        className='hover:text-cyan-500 duration-300'
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
