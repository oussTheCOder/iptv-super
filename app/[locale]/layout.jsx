
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
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
