import Head from 'next/head';

import { Hero, Navbar } from '@/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew Rowley — Software Engineer</title>
        {/* Remember to add meta later on */}
      </Head>
      <main className='bg-slate-50 px-2 sm:px-10 min-h-screen'>
        <Navbar />
        <Hero />
        <section></section>
      </main>
    </div>
  );
}
