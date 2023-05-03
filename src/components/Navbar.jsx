import { useState, useRef } from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../atoms/darkModeAtom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sections = ['home', 'about', 'blog', 'projects', 'contact'];
  const navRef = useRef(null);

  return (
    <nav className='bg-slate-100 fixed top-0 left-0 w-full py-6 px-10 mb-12 flex items-center justify-between z-10 md:px-20 lg:px-40 text-gray-900 dark:bg-gray-900'>
      <p className='text-2xl font-semibold dark:text-pink-600'>Andrew Rowley</p>
      <div
        ref={navRef}
        className={`bg-slate-100 top-20 flex flex-col items-center pt-10 absolute md:static ${
          showMobileMenu ? 'right-0' : 'right-[-100%]'
        } w-3/4 h-screen md:h-0 p-5 transition-[right] ease-in-out duration-300 md:w-auto md:justify-end dark:bg-gray-900`}
      >
        <ul className='flex flex-col items-center gap-10 md:gap-6 md:flex-row'>
          {sections.map(section => (
            <li
              key={`main-${section}`}
              className='capitalize text-2xl font-semibold cursor-pointer dark:text-pink-600 md:text-xl'
            >
              {section === 'blog' ? (
                <Link href={'/blog'}>Blog</Link>
              ) : (
                <Scroll
                  href={`#${section}`}
                  to={`${section}`}
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    showMobileMenu && setShowMobileMenu(false);
                  }}
                >
                  {section}
                </Scroll>
              )}
            </li>
          ))}
          <li>
            <a
              href='01AndrewRowleyResume.pdf'
              download='01AndrewRowleyResume.pdf'
              className='bg-gradient-to-r from-pink-600 to-pink-700 text-slate-200 font-semibold px-4 py-2 rounded-lg md:ml-2 text-lg'
            >
              Resume
            </a>
          </li>
          <li>
            {darkMode ? (
              <MdLightMode
                className='cursor-pointer text-2xl text-pink-600 mx-auto'
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
        className='text-4xl cursor-pointer text-pink-600 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <MdClose /> : <MdMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
