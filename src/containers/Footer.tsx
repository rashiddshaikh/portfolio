import Link from 'next/link';
import Image from 'next/image';
import DataProvider from '@/data/DataProvider';
import Section from '@/containers/Section';

export default function Footer() {
  const dataProvider = new DataProvider();
  const personalInfo = dataProvider.personalInfo;

  return (
    <Section
      elevated={false}
      className="body-font z-0 flex justify-center text-white py-4"
    >
      <div className="border-t border-lime-500/50 pt-3">
        <div className="flex flex-col items-center">

          {/* Logo */}
          <Link href="/" className="title-font cursor-pointer font-medium">
            <Image
              src="/favicon.ico"
              alt="Site Logo"
              width={40}
              height={40}
              className="mb-2"   // 👈 adds space BELOW the logo
            />
          </Link>

          {/* Tagline */}
          <p className="text-[11px] text-gray-400 italic">
            Building meaningful digital experiences
          </p>

          {/* Copyright */}
          <p className="mt-1 text-xs font-semibold text-gray-300">
            © {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}
          </p>

        </div>
      </div>
    </Section>
  );
}
