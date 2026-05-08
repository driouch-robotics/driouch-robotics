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

export const stripLocaleFromPath = (pathname = '/') => {
  const pathnameWithoutBase = stripBasePath(pathname);
  const parts = trimSlash(pathnameWithoutBase).split('/').filter(Boolean);

  if (isLocale(parts[0])) {
    parts.shift();
  }

  return parts.length ? `/${parts.join('/')}` : '/';
};

export const localizePath = (path = '/', locale: Locale = defaultLocale) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLocale = stripLocaleFromPath(normalizedPath);

  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === '/' ? `/${locale}` : `/${locale}${pathWithoutLocale}`;
};

export const localizeHref = (href = '/', locale: Locale = defaultLocale) => {
  if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  if (href.startsWith('#')) return `${getLocalizedHomePath(locale)}${href}`;
  if (href === '/') return getLocalizedHomePath(locale);
  if (href.startsWith('/#')) return `${getLocalizedHomePath(locale)}${href.slice(1)}`;

  return localizePath(href, locale);
};

export const getLanguageLinks = (pathname = '/') => {
  const currentLocale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = stripLocaleFromPath(pathname);

  return locales.map((locale) => ({
    locale,
    label: localeMeta[locale].label,
    shortLabel: localeMeta[locale].shortLabel,
    dir: localeMeta[locale].dir,
    href: localizePath(pathWithoutLocale, locale),
    active: locale === currentLocale,
  }));
};
