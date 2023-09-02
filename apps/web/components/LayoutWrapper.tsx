import { ReactNode } from 'react';
import { NavBar } from './NavBar';
import { SectionContainer } from '@/components/SectionContainer';

interface Props {
  children: ReactNode;
}

export const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <NavBar />
        <main className='mb-auto'>{children}</main>
      </div>
    </SectionContainer>
  );
};
