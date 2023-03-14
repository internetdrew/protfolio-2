import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const About = () => {
  return (
    <section className='w-full mx-auto mt-20 md:w-5/6'>
      <h3 className='text-center text-3xl font-bold mb-10 dark:text-pink-600 md:text-4xl'>
        About Me
      </h3>
      <div className='grid md:grid-cols-2 gap-4 items-center md:items-start'>
        <div className='flex flex-col items-center gap-4 mb-10 md:items-start md:justify-start'>
          <h4 className='text-2xl font-bold text-center md:text-left md:text-3xl dark:text-slate-200'>
            B2B Content Strategist turned Software Engineer
          </h4>
          <a
            href=''
            className='bg-gradient-to-r from-pink-600 to-pink-700 text-lg px-4 py-2 text-slate-200 rounded-lg font-semibold flex items-center gap-2'
          >
            Download resume <AiOutlineDownload className='text-lg' />
          </a>
        </div>
        <p className='text-xl text-gray-800 dark:text-slate-200'>
          I began progrogrammng in 2021 by learning Python, which tapped me into
          a former self, once that hadn't felt this alive since childhood when I
          was creating macros to play games for me while I was out running
          errands.
          <br />
          <br />
          Nowadays, I'm all about pragmatic programming, clean code, and
          creating intuitive, scalable, enjoyable software on the internet.
        </p>
      </div>
    </section>
  );
};

export default About;
