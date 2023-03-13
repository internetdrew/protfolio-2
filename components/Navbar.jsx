import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-2xl font-semibold'>Andrew Rowley</h1>
      <ul className='flex items-center'>
        <li>
          <MdDarkMode className='cursor-pointer text-2xl' />
        </li>
        <li>
          <a
            href='#'
            className='bg-gradient-to-r from-pink-700 to-red-500 text-slate-50 font-semibold px-4 py-2 rounded-lg ml-8 text-lg'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
