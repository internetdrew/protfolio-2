import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='pt-4 pb-2'>
      <h1 className='text-center text-xl dark:text-gray-400 mb-2'>
        Thank you for visiting. If we haven't already, lets connect!
      </h1>
      <div className='text-5xl flex justify-center gap-4 mb-10'>
        <a
          href='https://www.linkedin.com/in/internetdrew/'
          target='_blank'
          className='text-cyan-400 hover:text-cyan-500'
        >
          <AiFillLinkedin />
        </a>
        <a
          href='https://github.com/internetdrew'
          target='_blank'
          className='text-cyan-400 hover:text-cyan-500'
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
