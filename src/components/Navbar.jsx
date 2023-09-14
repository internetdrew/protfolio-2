import { useState } from 'react';
import Link from 'next/link';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../atoms/darkModeAtom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sections = ['home', 'about', 'projects', 'contact', 'blog'];

  return (
    <nav className='bg-slate-100 fixed top-0 left-0 w-full py-6 px-10 mb-12 flex items-center justify-between z-10 md:px-20 lg:px-40 text-gray-900 dark:bg-gray-900 text-2xl'>
      <Link
        href={'/'}
        className='font-semibold dark:text-cyan-400'
        aria-label='Link to home page'
      >
        Andrew Rowley
      </Link>
      <div
        className={`bg-slate-100 top-20 flex flex-col items-center absolute md:static ${
          showMobileMenu ? 'right-0' : 'right-[-100%]'
        } w-3/4 h-screen md:h-0 md:flex-row p-5 transition-[right] ease-in-out duration-300 md:w-auto dark:bg-gray-900`}
      >
        <ul className='flex flex-col items-center gap-10 md:gap-6 md:flex-row'>
          {sections.map(section => (
            <li
              key={section}
              className='capitalize font-semibold cursor-pointer dark:text-cyan-400 md:text-xl'
            >
              {section === 'blog' ? (
                <Link href={`/${section}`} aria-label='Link to blog page'>
                  {section}
                </Link>
              ) : (
                <Link
                  href={`/#${section}`}
                  scroll={false}
                  aria-label={`Link to ${section} section`}
                >
                  {section}
                </Link>
              )}
            </li>
          ))}
          <li>
            {darkMode ? (
              <MdLightMode
                className='cursor-pointer text-2xl text-cyan-400 mx-auto'
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer text-2xl mx-auto'
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </li>
        </ul>
      </div>
      <button
        className='text-4xl cursor-pointer text-slate-900 dark:text-cyan-400 md:hidden'
        aria-label='menu button'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <MdClose /> : <MdMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
