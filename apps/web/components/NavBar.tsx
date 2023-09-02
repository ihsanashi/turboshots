import Link from 'next/link';
import { siteMetadata } from '@/data/siteMetadata';
import { navLinks } from '@/data/navLinks';
import { MobileNav } from './MobileNav';

export const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-10'>
      <div>
        <Link href='/' aria-label={siteMetadata.headerTitle}>
          {siteMetadata.headerTitle}
        </Link>
      </div>
      <div className='flex items-center leading-5 space-x-4 sm:space-x-6'>
        {navLinks
          .filter((link) => link.title !== 'Home')
          .map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className='hidden sm:block font-medium text-gray-900 dark:text-gray-100'
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
      </div>
    </nav>
  );
}