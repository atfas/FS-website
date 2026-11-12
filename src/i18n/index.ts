import { pt, type Dictionary } from './pt';
import { en } from './en';

export const languages = ['pt', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'pt';

const dictionaries: Record<Lang, Dictionary> = { pt, en };

/** The page language, from its URL: everything under /en/ is English. */
export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'pt';
}

/** All the text for a language. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** The same page in each language. Add new pages here so the language switch and hreflang tags know about them. */
export const routes = {
  home: { pt: '/', en: '/en/' },
  // Trailing slash matches how the built site serves them (and the sitemap lists them)
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
} satisfies Record<string, Record<Lang, string>>;

export type RouteName = keyof typeof routes;

/** Link to a section of the home page in the given language, e.g. "/en/#contact". */
export function sectionHref(lang: Lang, id: string): string {
  return `${routes.home[lang]}#${id}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}
