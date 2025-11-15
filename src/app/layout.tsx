import '@/styles/globals.css';

import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

// Components (Client components are allowed to be imported in layout)
import BackToTopButton from '@/components/BackToTopButton';
import GradientBackgroundGodrayThingy from '@/components/GradientBackgroundGodrayThingy';
import Socials from '@/components/SocialLinks';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';

// Static config imported from separate file (fixes metadata error)
import { siteConfig } from '@/data/site-config';

// Env
import {
  ACKEE_ANALYTICS_SCRIPT_URL,
  ACKEE_ANALYTICS_URL,
  ACKEE_DOMAIN_ID,
  ENABLE_ANALYTICS,
} from '@/utils/env';

// ---- Static metadata (allowed in server components) ----
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {},
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {ENABLE_ANALYTICS && (
        <Script
          async
          src={ACKEE_ANALYTICS_SCRIPT_URL}
          data-ackee-server={ACKEE_ANALYTICS_URL}
          data-ackee-domain-id={ACKEE_DOMAIN_ID}
        />
      )}

      <body className="bg-b-light">
        <BackToTopButton />

        <div className="relative min-h-screen">
          <span className="fixed bottom-2 left-2 z-50 opacity-0 transition-opacity duration-500 sm:opacity-100">
            <Socials static />
          </span>

          <div className="pointer-events-none absolute h-full w-full overflow-clip">
            <GradientBackgroundGodrayThingy />
          </div>

          <Header />

          <div className="relative z-30 mx-auto h-full max-w-screen-lg place-items-center transition-all">
            {children}
          </div>

          <div className="z-10 mx-auto mt-5 px-1 lg:px-20">
            <Footer />
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
