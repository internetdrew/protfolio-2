import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import me from '/public/me.png';
import { SocialLinks } from '.';

const Hero = () => {
  return (
    <section className='pt-40' id='home'>
      <div className='text-center'>
        <h2 className='text-3xl pt-2 font-bold dark:text-slate-300'>
          <Link href='/' aria-label='Link to home page'>
            Andrew Rowley
          </Link>
        </h2>
        <h3 className='text-4xl font-semibold py-4 dark:text-cyan-400 '>
          Software Engineer
        </h3>
        <p className='text-2xl mb-6 text-slate-900 dark:text-slate-300'>
          I build user-friendly app experiences on the internet.
        </p>
      </div>
      <SocialLinks />
      <div className='relative bg-gradient-to-b flex mx-auto justify-center from-cyan-900 to-cyan-400 rounded-full w-60 h-60  overflow-hidden mt-2 sm:h-80 sm:w-80'>
        <Image
          src={me}
          className='object-cover'
          alt='Photo of Andrew Rowley with gradient, fully rounded background'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
