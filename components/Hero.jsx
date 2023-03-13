import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import me from '/public/me.png';
const Hero = () => {
  return (
    <>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 font-bold text-pink-600'>Andrew Rowley</h2>
        <h3 className='text-2xl font-semibold py-2'>Software Engineer</h3>
        <p className='text-md py-5 text-gray-800'>
          I build user-friendly app experiences on the internet.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-12 py-3 text-gray-700'>
        <a href='https://www.linkedin.com/in/internetdrew/' target='_blank'>
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/internetdrew' target='_blank'>
          <AiFillGithub />
        </a>
      </div>
      <div className='relative bg-gradient-to-b flex justify-center mx-auto from-pink-700  to-red-500 rounded-full w-80 h-80 overflow-hidden mt-2'>
        <Image
          src={me}
          className='object-cover'
          alt='photo of Andrew Rowley with gradient, fully rounded background'
          priority
        />
      </div>
    </>
  );
};

export default Hero;
