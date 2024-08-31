
import { SpeedInsights } from "@vercel/speed-insights/next";

import './globals.css';
import { Inter } from 'next/font/google';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { getServerSideTranslations } from '@/lib/getServerSideTranslations';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getServerSideTranslations(locale);
  return {
    title: t('meta-data.title'),
    description: t('meta-data.description'),
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  
  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
      <meta name="google-site-verification" content="2wUjNfw9f9GDGpUBInTpfHWXiNIul-AsgIsDGPmgNOc" />
      <meta name="msvalidate.01" content="C1E307E771CCA1598F24D12A7E5CFE0C" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
