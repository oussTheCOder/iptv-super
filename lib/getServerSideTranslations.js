import initTranslations from '@/app/i18n';

export async function getServerSideTranslations(locale, namespaces = ['home']) {
  const { t } = await initTranslations(locale, namespaces);
  return t;
}
