import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import me from '/public/me.png';
const Hero = () => {
  return (
    <section className='pt-40'>
      <div className='text-center'>
        <h2 className='text-3xl pt-2 font-bold dark:text-slate-200'>
          <Link href='/'>Andrew Rowley</Link>
        </h2>
        <h3 className='text-4xl font-semibold py-4 text-pink-700 '>
          Software Engineer
        </h3>
        <p className='text-2xl text-gray-800 mb-6 dark:text-gray-400'>
          I build user-friendly app experiences on the internet.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-4 mb-10 text-pink-700'>
        <a href='https://www.linkedin.com/in/internetdrew/' target='_blank'>
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/internetdrew' target='_blank'>
          <AiFillGithub />
        </a>
      </div>
      <div className='relative bg-gradient-to-b flex mx-auto justify-center from-pink-700 to-red-500 rounded-full w-60 h-60  overflow-hidden mt-2 sm:h-80 sm:w-80'>
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
