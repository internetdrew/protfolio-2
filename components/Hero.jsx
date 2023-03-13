import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import me from '/public/me.png';
const Hero = () => {
  return (
    <section>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 font-bold text-pink-700'>Andrew Rowley</h2>
        <h3 className='text-3xl font-semibold py-4'>Software Engineer</h3>
        <p className='text-2xl text-gray-800'>
          I build user-friendly app experiences on the internet.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-10 mb-10 text-pink-700'>
        <a href='https://www.linkedin.com/in/internetdrew/' target='_blank'>
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/internetdrew' target='_blank'>
          <AiFillGithub />
        </a>
      </div>
      <div className='relative bg-gradient-to-b flex mx-auto justify-center from-pink-700 to-red-500 rounded-full w-60 h-60 sm:h-80 sm:w-80 overflow-hidden mt-2'>
        <Image
          src={me}
          className='object-cover'
          alt='photo of Andrew Rowley with gradient, fully rounded background'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
