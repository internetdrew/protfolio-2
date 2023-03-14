import Head from 'next/head';
import { Hero, Navbar } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Andrew Rowley — Software Engineer</title>
        {/* Remember to add meta later on */}
      </Head>
      <main className='bg-slate-50 min-h-screen px-10 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <section>
          <h3>Projects</h3>
        </section>
      </main>
    </div>
  );
}
