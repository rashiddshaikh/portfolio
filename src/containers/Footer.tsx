'use client';

import Image from 'next/image';
import Link from 'next/link';

import DataProvider from '@/data/DataProvider';
import Section from '@/containers/Section';

export default function Footer() {
  const dataProvider = new DataProvider();
  const personalInfo = dataProvider.personalInfo;

  return (
    <Section
      elevated={false}
      className='body-font z-0 flex justify-center py-4 text-white'
    >
      <div className='border-t border-lime-500/50 pt-3'>
        <div className='flex flex-col items-center'>
          <Link href='/' className='title-font cursor-pointer font-medium'>
            <Image
              src='/favicon.ico'
              alt='Portfolio logo'
              width={40}
              height={40}
              className='h-10 w-10'
            />
          </Link>

          {/* Tagline */}
          <p className='mt-1 text-[11px] italic text-gray-400'>
            Building meaningful digital experiences
          </p>

          {/* Copyright */}
          <p className='mt-1 text-xs font-semibold text-gray-300'>
            © {new Date().getFullYear()} {personalInfo.firstName}{' '}
            {personalInfo.lastName}
          </p>
        </div>
      </div>
    </Section>
  );
}
