'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/data/navLinks';

export const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const onToggleNav = () => {
    setShowNav((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label='Toggle navigation menu'
        onClick={onToggleNav}
        className='sm:hidden'
      >
        Toggle
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-gray-950 ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end'>
          <button
            className='mr-8 mt-11 h-8 w-8'
            aria-label='Toggle Menu'
            onClick={onToggleNav}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='text-gray-900 dark:text-gray-100'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <nav className='fixed mt-8 h-full'>
          {navLinks.map((link) => (
            <div key={link.title} className='px-12 py-4'>
              <Link
                href={link.href}
                className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};
