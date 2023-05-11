import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/darkModeAtom';
import { Footer, Navbar } from '@/src/components';

const Layout = ({ children }) => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <main className='bg-slate-200 min-h-screen text-gray-900 px-10 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {children}
      </main>
      <footer className='bg-slate-200 text-gray-900 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
