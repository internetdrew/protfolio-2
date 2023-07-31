import { AiOutlineDownload } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about' className='w-full mx-auto mt-20 md:w-5/6'>
      <h3 className='text-center text-3xl font-bold mb-10 dark:text-pink-600 md:text-4xl'>
        About Me
      </h3>
      <div className='grid md:grid-cols-2 gap-4 items-center md:items-start'>
        <div className='flex flex-col items-center gap-4 mb-10 md:items-start md:justify-start'>
          <h4 className='text-2xl font-bold text-center md:text-left md:text-3xl dark:text-slate-200'>
            B2B Content Strategist turned Software Engineer
          </h4>
        </div>
        <p className='text-xl text-gray-800 dark:text-slate-200'>
          I'm Andrew, a passionate software engineer dedicated to crafting
          quality software with a focus on user experience, performance, and AI
          integration.
          <br />
          <br />
          Let's build something extraordinary!
        </p>
      </div>
    </section>
  );
};

export default About;
