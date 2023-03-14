import { useState } from 'react';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='fixed backdrop-blur-3xl top-0 left-0 w-full py-10 px-4 mb-12 flex items-center justify-between z-10'>
      <h1 className='text-2xl font-semibold dark:text-pink-600'>
        Andrew Rowley
      </h1>
      <ul className='flex items-center gap-6'>
        {['home', 'about', 'projects', 'skills', 'contact'].map(section => (
          <li
            key={section}
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
      <div>
        <MdMenu
          className='text-3xl cursor-pointer'
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
