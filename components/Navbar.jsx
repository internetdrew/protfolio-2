import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className='fixed backdrop-blur-3xl top-0 left-0 w-full py-10 px-10 mb-12 flex items-center justify-between z-10 md:px-20 lg:px-40'>
      <h1 className='text-2xl font-semibold dark:text-pink-600'>
        Andrew Rowley
      </h1>
      <ul className='hidden items-center gap-6 md:flex'>
        {sections.map(section => (
          <li
            key={`main-${section}`}
            className='capitalize text-xl font-semibold dark:text-pink-600'
          >
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
        <li>
          {darkMode ? (
            <MdLightMode
              className='cursor-pointer text-2xl text-pink-600'
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <MdDarkMode
              className='cursor-pointer text-2xl'
              onClick={() => setDarkMode(!darkMode)}
            />
          )}
        </li>
        <li>
          <a
            href='#'
            className='bg-gradient-to-r from-pink-600 to-pink-700 text-slate-50 font-semibold px-4 py-2 rounded-lg ml-2 text-lg dark:text-gray-900'
          >
            Resume
          </a>
        </li>
      </ul>
      <div className='relative flex justify-center items-center md:hidden'>
        <MdMenu
          className='text-3xl cursor-pointer dark:text-pink-600'
          onClick={() => setShowMobileMenu(true)}
        />

        {showMobileMenu ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='fixed top-0 bottom-0 right-0 z-20 p-1 w-5/6 bg-slate-100 h-screen flex justify-end items-end flex-col shadow-md'
          >
            <MdClose
              onClick={() => setShowMobileMenu(false)}
              className='text-2xl m-2'
            />
            <ul className='h-full w-full flex justify-start items-start flex-col py-2'>
              {sections.map(section => (
                <li
                  onClick={() => setShowMobileMenu(false)}
                  key={section}
                  className='capitalize text-xl font-semibold m-1 dark:text-pink-600'
                >
                  <a href={`#${section}`}>{section}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
