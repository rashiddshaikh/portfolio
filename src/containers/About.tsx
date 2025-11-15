'use client';

import Image from 'next/image';
import Link from 'next/link';

import ArrowLink from '@/components/_base/ArrowLink';
import Socials from '@/components/SocialLinks';
import Section from '@/containers/Section';
import DataProvider from '@/data/DataProvider';
import { RESUME_PATH } from '@/utils/env';

export default function About() {
  const about = new DataProvider().personalInfo;

  return (
    <Section
      indentation
      elevated
      margin="mx-0 sm:mx-5 md:mx-10 lg:mx-20"
      title="About"
      className="bg-b-dark fade-in mx-4 sm:container sm:mx-auto"
      contentClassName="pt-0"
      hideOverflowX={false}
    >
      <div className="flex w-full flex-col place-items-center">
        <h5
          className="text-md mx-auto text-start"
          dangerouslySetInnerHTML={{ __html: about.introduction }}
        />

        <ArrowLink
          className="mx-auto mt-5"
          title="more about me"
          href={RESUME_PATH}
          newTab
        />

        {about.codewarsLink && (
          <Link href={about.codewarsLink} target="_blank" className="mt-5">
            <Image
              src={`${about.codewarsLink}/badges/large`}
              width={350}
              height={120}
              alt="Codewars Profile Badge"
              className="max-w-xs"
            />
          </Link>
        )}

        <Socials className="mt-5" large={false} />
      </div>
    </Section>
  );
}
