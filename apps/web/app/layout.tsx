import 'css/tailwind.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { siteMetadata } from '@/data/siteMetadata';
import { SectionContainer } from '@/components/SectionContainer';

// include styles from the ui package
import 'ui/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `${siteMetadata.title} | by ${siteMetadata.author}`,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language} className='scroll-smooth'>
      <body className={inter.className}>
        <SectionContainer>
          <div className='flex h-screen flex-col justify-between'>
            <NavBar />
            <main className='mb-auto'>{children}</main>
            <Footer />
          </div>
        </SectionContainer>
      </body>
    </html>
  );
}
