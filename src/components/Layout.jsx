import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/darkModeAtom';
import Head from 'next/head';
import { Footer, Navbar } from '@/src/components';

const Layout = ({ children, title }) => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>{title}</title>
        {/* Remember to add meta later on */}
      </Head>
      <Navbar />
      <main className='bg-slate-100 text-gray-900 px-10 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {children}
      </main>
      <footer className='bg-slate-100 text-gray-900 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
