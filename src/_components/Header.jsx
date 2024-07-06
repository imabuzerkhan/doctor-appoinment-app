// Header.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Menutoggle from './Menutoggle';  // Make sure the path is correct
import Link from 'next/link';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import DarkMode from './Darkmode/Darkmode';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact Us', path: '/Contact' },
    { id: 4, name: 'Blog', path: '/Blogpages' }
  ];

  return (
    <>
      <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={180}
            height={80}
            className='dark:text-white text-gray-800'
          />

          <ul className='md:flex gap-8 hidden'>
            {menu.map((item, index) => (
              <Link href={item.path} key={index} className='dark:text-white hover:text-blue-950 font-medium text-[#14424C]'>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          <DarkMode />
          <Button>Get Started</Button>
        </div>
        <div className="md:hidden">
          {!toggle ? <HiMenuAlt3 onClick={Toggle} className="text-black text-[22px]" />
            : <HiOutlineX onClick={Toggle} className="text-black text-[22px]" />}
          {toggle ? <Menutoggle Link={Link} /> : null}
        </div>
      </div>
    </>
  );
}

export default Header;
