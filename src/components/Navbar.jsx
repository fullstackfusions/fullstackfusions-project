import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    // if (!nav) {
    //   document.body.classList.add('no-scroll');
    // } else {
    //   document.body.classList.remove('no-scroll');
    // }
  };

  const closeMenu = () => {
    setNav(false);
    // document.body.classList.remove('no-scroll');
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <img src={Logo} alt='Logo' className='my-0 mx-0' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:underline hover:underline-offset-8 hover:decoration-[#db2777]'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:underline hover:underline-offset-8 hover:decoration-[#db2777]'>
          <Link to='/about'>About</Link>
        </li>
        <li className='hover:underline hover:underline-offset-8 hover:decoration-[#db2777]'>
          <Link to='/skills'>Skills</Link>
        </li>
        <li className='hover:underline hover:underline-offset-8 hover:decoration-[#db2777]'>
          <Link to='/work'>Work</Link>
        </li>
        <li className='hover:underline hover:underline-offset-8 hover:decoration-[#db2777]'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40'
        }
      >
        <li className='py-4 text-2xl'>
          <Link onClick={closeMenu} to='/'>
            Home
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={closeMenu} to='/about'>
            About
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={closeMenu} to='/skills'>
            Skills
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={closeMenu} to='/work'>
            Work
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={closeMenu} to='/contact'>
            Contact
          </Link>
        </li>
        <div className='flex justify-around w-full mt-8'>
          <a
            className='text-gray-300'
            href='https://www.linkedin.com/in/fullstackfusions/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className='text-gray-300'
            href='https://github.com/fullstackfusions'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
          </a>
          <a
            className='text-gray-300'
            href='mailto:fullstackfusions@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <HiOutlineMail size={30} />
          </a>
          <a
            className='text-gray-300'
            href='../assets/MIHIR_PATEL_Lead_Software_Developer.pdf' download
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsFillPersonLinesFill size={30} />
          </a>
          <a
            className='text-gray-300'
            href='https://www.youtube.com/@fullstackfusions'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube size={30} />
          </a>
          <a
            className='text-gray-300'
            href='https://www.instagram.com/fullstackfusions/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/fullstackfusions/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/fullstackfusions'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e11a1a]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/@fullstackfusions'
              target='_blank'
              rel='noopener noreferrer'
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e46019]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/fullstackfusions/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#733ddf]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' href='mailto:fullstackfusions@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5685ea]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/MIHIR_PATEL_Lead_Software_Developer.pdf' download
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
