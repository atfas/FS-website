// Data that is the same in every language.
// All visible text lives in src/i18n/pt.ts and src/i18n/en.ts.
import type { ImageMetadata } from 'astro';
import fotoAna from '../assets/images/foto_ana.jpg';
import fotoManuel from '../assets/images/foto_manuel.jpeg';

export const firm = {
  name: 'Fernandes & Saraiva',
  legalName: 'Fernandes & Saraiva, Sociedade de Advogados R.L.',
  foundingYear: 2008,
};

export const contact = {
  email: 'geral@fernandesesaraiva.pt',
  phone: '223 705 127',
  phoneHref: 'tel:+351223705127',
  phoneInternational: '+351 223 705 127',
  street: 'Avenida da República, n.º 872',
  postalCode: '4430-190',
  city: 'Vila Nova de Gaia',
  region: 'Porto',
  country: 'PT',
  geo: { latitude: 41.1307875, longitude: -8.6092952 },
  opens: '10:00',
  closes: '19:00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fernandes+%26+Saraiva+Advogados+Vila+Nova+de+Gaia',
  /** Google Maps embed; `lang` sets the language of the map labels */
  mapEmbedUrl: (lang: string) =>
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.1712455626903!2d-8.609295222699446!3d41.13078751187047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464da94b4ea1b%3A0x81376592b56c2515!2sFernandes%20%26%20Saraiva%20Advogados!5e0!3m2!1s${lang}!2spt!4v1709228577334!5m2!1s${lang}!2spt`,
};

/** Icons for the practice areas, in the same order as `services.items` in the dictionaries */
export const serviceIcons = [
  'fa-gavel',
  'fa-chart-line',
  'fa-handshake',
  'fa-briefcase',
  'fa-heart',
  'fa-globe',
  'fa-house',
  'fa-scroll',
  'fa-file-contract',
];

/** Lawyers, in the same order as `team.members` in the dictionaries */
export const teamMembers: { name: string; photo: ImageMetadata }[] = [
  { name: 'Ana Fernandes', photo: fotoAna },
  { name: 'Manuel Saraiva', photo: fotoManuel },
];

export const partner = {
  name: 'RH Estratégico',
  url: 'https://rhestrategicoconsultoria.com.br/',
};

/**
 * Menu links: section ids on the home page.
 * mobileOnly links appear in the phone menu and footer, but not in the desktop navbar (to keep it uncluttered).
 * Labels come from `nav.links` in the dictionaries.
 */
export const navSections: { id: string; key: 'services' | 'about' | 'team' | 'booking' | 'contact'; mobileOnly?: boolean }[] = [
  { id: 'services', key: 'services' },
  { id: 'about', key: 'about' },
  { id: 'team', key: 'team' },
  { id: 'marcar', key: 'booking', mobileOnly: true },
  { id: 'contact', key: 'contact' },
];
