import Head from 'next/head';
import Image from 'next/image';
import me from '/public/me.png';
import { Hero, Navbar } from '@/components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew Rowley — Software Engineer</title>
        {/* Remember to add meta later on */}
      </Head>
      <main className='bg-slate-50 px-10'>
        <section className='min-h-screen'>
          <Navbar />
          <Hero />
        </section>
        <section></section>
      </main>
    </div>
  );
}
