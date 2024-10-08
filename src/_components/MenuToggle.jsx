import React, { useEffect } from 'react';

const Menutoggle = ({ Link, closeMenu }) => {
  const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact Us', path: '/Contact' },
    { id: 4, name: 'Blog', path: '/Blogpages' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closeMenu]);

  return (
    <div className="fixed top-[75px] left-0 w-full h-80 bg-white dark:bg-gray-800 z-50">
      <ul className='flex flex-col items-center justify-center h-full gap-8'>
        {menu.map((item, index) => (
          <Link href={item.path} key={index} className='dark:text-white hover:text-blue-950 font-medium text-[#14424C]' onClick={closeMenu}>
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Menutoggle;
