import { SITE } from 'astrowind:config';

import { trimSlash } from '~/utils/permalinks';

export const locales = ['ar', 'fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export const localeMeta = {
  ar: {
    label: 'العربية',
    shortLabel: 'AR',
    htmlLang: 'ar',
    dir: 'rtl',
  },
  fr: {
    label: 'Français',
    shortLabel: 'FR',
    htmlLang: 'fr',
    dir: 'ltr',
  },
  en: {
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
    dir: 'ltr',
  },
} as const satisfies Record<
  Locale,
  {
    label: string;
    shortLabel: string;
    htmlLang: string;
    dir: 'ltr' | 'rtl';
  }
>;

export const isLocale = (value?: string): value is Locale => locales.includes(value as Locale);

const basePathname = `/${trimSlash(SITE.base || '')}`;

export const stripBasePath = (pathname = '/') => {
  const cleanPathname = `/${trimSlash(pathname)}`;

  if (basePathname !== '/' && (cleanPathname === basePathname || cleanPathname.startsWith(`${basePathname}/`))) {
    const strippedPathname = cleanPathname.slice(basePathname.length) || '/';
    return strippedPathname.startsWith('/') ? strippedPathname : `/${strippedPathname}`;
  }

  return cleanPathname;
};

export const getLocaleFromPathname = (pathname = '/') => {
  const pathnameWithoutBase = stripBasePath(pathname);
  const [firstSegment] = trimSlash(pathnameWithoutBase).split('/');

  return isLocale(firstSegment) ? firstSegment : defaultLocale;
};

export const getLocalizedHomePath = (locale: Locale = defaultLocale) =>
  locale === defaultLocale ? '/' : `/${locale}`;

export const localizeHomeHref = (href = '/', locale: Locale = defaultLocale) => {
  if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  const homePath = getLocalizedHomePath(locale);

  if (href === '/') return homePath;
  if (href.startsWith('/#')) return `${homePath}${href.slice(1)}`;
  if (href.startsWith('#')) return `${homePath}${href}`;

  return href;
};

export const getLanguageLinks = (pathname = '/') => {
  const currentLocale = getLocaleFromPathname(pathname);

  return locales.map((locale) => ({
    locale,
    label: localeMeta[locale].label,
    shortLabel: localeMeta[locale].shortLabel,
    dir: localeMeta[locale].dir,
    href: getLocalizedHomePath(locale),
    active: locale === currentLocale,
  }));
};
