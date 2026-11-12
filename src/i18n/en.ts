// English text. Must have exactly the same keys as src/i18n/pt.ts (TypeScript checks this).
import type { Dictionary } from './pt';

export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    homeTitle: 'Fernandes & Saraiva | Lawyers in Vila Nova de Gaia, Porto, Portugal',
    homeDescription:
      'Law firm in Vila Nova de Gaia, Porto, since 2008. Criminal, insolvency, corporate, employment, family, nationality and immigration, real estate, inheritance and civil law.',
    privacyTitle: 'Privacy Policy | Fernandes & Saraiva',
    privacyDescription: 'How Fernandes & Saraiva, Sociedade de Advogados R.L., handles the personal data sent through this website.',
    ogImageAlt: 'F&S logo - Fernandes & Saraiva, Law Firm',
  },

  skipLink: 'Skip to content',

  nav: {
    ariaLabel: 'Main navigation',
    links: {
      services: 'Services',
      about: 'About',
      team: 'Lawyers',
      booking: 'Book a consultation',
      contact: 'Contact',
    },
    menu: 'Menu',
    close: 'Close',
    callAria: (phone: string) => `Call ${phone}`,
    switchLabel: 'Português',
    switchShort: 'PT',
    switchAria: 'Ver o site em português (Portuguese)',
  },

  hero: {
    eyebrow: 'Law Firm · Sociedade de Advogados R.L.',
    lead: 'Lawyers in Vila Nova de Gaia, Porto, since 2008. An honest, serious dialogue with every client.',
    call: 'Call',
    book: 'Book a consultation',
  },

  services: {
    title: 'Practice Areas',
    subtitle: 'How can we help?',
    items: [
      'Criminal and Administrative Offences',
      'Insolvency',
      'Corporate and Commercial',
      'Employment',
      'Family and Children',
      'Nationality and Immigration',
      'Contracts and Real Estate',
      'Inheritance and Estates',
      'Civil Litigation and Debt Recovery',
    ],
    ctaBefore: "Can't find your case?",
    ctaLink: 'Call us',
    ctaAfter: "and we'll explain how we can help.",
  },

  about: {
    title: 'About Us',
    subtitle: 'A law firm close to the people who need help.',
    photoAlt: 'Porto Courthouse (Palácio da Justiça do Porto)',
    facts: [
      { value: '2008', label: 'Year founded' },
      { value: '25 years', label: "Partners' experience in law" },
      { value: 'Gaia', label: 'Office in the city centre' },
    ],
    paragraphs: [
      'Fernandes & Saraiva is a law firm founded in 2008, with its office in the centre of Vila Nova de Gaia, right next to Porto. Its founding partners have practised law full-time for 25 years.',
      'In their own distinctive style, they work with full respect for the rules and ethical principles of the profession, acting with integrity and keeping an honest, serious dialogue with every client.',
      'Our team is available for any matter in which its expertise can serve the client’s interests.',
    ],
  },

  team: {
    title: 'Lawyers',
    subtitle: 'The founding partners, with 25 years of experience.',
    photoAlt: (name: string) => `Photo of ${name}`,
    members: [
      {
        role: 'Founding Partner',
        bio: 'Born in 1972 in Oliveira de Azeméis, Aveiro, Portugal. She graduated in Law in 1995 and completed her legal traineeship at the end of 1997. In 2008 she co-founded the law firm Fernandes & Saraiva, where she is a founding partner, and she has been practising law for 25 years.',
      },
      {
        role: 'Founding Partner',
        bio: 'Born in 1972 in Águas Santas, in the municipality of Maia, Portugal. He graduated in Law in 1995 and completed his legal traineeship at the end of 1997. In 2008 he co-founded the law firm Fernandes & Saraiva, where he is a founding partner, and he has been practising law for 25 years.',
      },
    ],
  },

  booking: {
    title: 'Book a Consultation',
    subtitle: 'Choose the day and time that suit you best.',
    loading: 'Loading the calendar…',
    openCalendar: 'Open the booking calendar',
    emptyBefore: 'To book a consultation, call',
    emptyOr: 'or',
    emptyLink: 'send us a message',
    helpBefore: 'Prefer to book by phone? Call',
    helpAfter: ', Monday to Friday, 10:00 to 19:00 (Portugal time).',
  },

  contact: {
    title: 'Contact',
    subtitle: 'Call us, write to us or visit our office.',
    phone: 'Phone',
    call: 'Call',
    email: 'Email',
    sendEmail: 'Send email',
    hours: 'Opening hours',
    hoursLines: ['Monday to Friday', '10:00 to 19:00'],
    address: 'Address',
    addressLines: ['Avenida da República, n.º 872', '7th floor, Room 7.2', '4430-190 Vila Nova de Gaia, Portugal'],
    openMaps: 'Open in Google Maps',
    mapTitle: 'Map showing the location of the Fernandes & Saraiva office',
    mapLang: 'en',
  },

  form: {
    title: 'Send a message',
    intro: "Write to us and we'll reply as soon as possible.",
    subject: 'New message from the Fernandes & Saraiva website (English)',
    language: 'English',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    area: 'Subject',
    optional: '(optional)',
    chooseArea: 'Choose an area',
    otherArea: 'Other matter',
    message: 'Message',
    consentBefore: 'I agree that my data may be used to reply to this message, in accordance with the',
    consentLink: 'privacy policy',
    consentValue: 'Yes',
    submit: 'Send message',
    sending: 'Sending…',
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email, for example name@gmail.com.',
      message: 'Please write your message.',
      consent: 'To send, please accept the privacy policy.',
    },
    success: "Thank you! Your message has been sent. We'll get back to you shortly.",
    failed: (phone: string) => `We couldn't send your message. Please try again or call ${phone}.`,
    notConfigured: (email: string, phone: string) => `The form isn't set up yet. Please email ${email} or call ${phone}.`,
    fallbackBefore: 'Email us at',
    fallbackOr: 'or call',
  },

  partner: {
    label: 'Partner',
    text: 'Fernandes & Saraiva is a partner of RH Estratégico, a company dedicated to driving business performance by aligning people-management and corporate-governance policies and practices. Together, we aim to offer objective solutions focused on our clients’ real needs.',
    linkLabel: 'Visit RH Estratégico',
    newWindow: '(opens in a new window)',
  },

  footer: {
    firmType: 'Law Firm · Sociedade de Advogados R.L.',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
  },

  privacy: {
    heading: 'Privacy Policy',
    updated: 'Last updated: November 2026',
    back: 'Back to the home page',
    sections: [
      {
        title: 'Who is responsible for your data',
        paragraphs: [
          'Fernandes & Saraiva, Sociedade de Advogados R.L., with offices at Avenida da República, n.º 872, 7th floor, Room 7.2, 4430-190 Vila Nova de Gaia, Portugal. Email: {email}.',
        ],
      },
      {
        title: 'What data we collect',
        paragraphs: [
          'Only the data you send us through the contact form or when booking a consultation: your name, email, phone number (if you give it), the subject and content of your message, and the day and time of the consultation you choose.',
        ],
      },
      {
        title: 'What we use it for',
        paragraphs: [
          'To reply to your message, to book and manage the consultation you requested, and to contact you about it. We do not use your data for advertising and we do not sell it to third parties.',
        ],
      },
      {
        title: 'Legal basis',
        paragraphs: [
          'Your consent, given when you send the form, and the pre-contractual steps you ask us to take, under Article 6(1)(a) and (b) of the General Data Protection Regulation (GDPR).',
        ],
      },
      {
        title: 'Services that help us',
        paragraphs: [
          '<strong>Web3Forms</strong> delivers the form messages to our email; <strong>Cal.com</strong> manages consultation bookings; <strong>Google Maps</strong> shows the map with the office location. These services only process the data to provide their service.',
        ],
      },
      {
        title: 'How long we keep it',
        paragraphs: [
          'For as long as needed to answer your request and, if you become our client, for the period required by the legal and ethical obligations of the profession.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You may at any time ask to access, correct or delete your data, object to its processing, request its portability or withdraw your consent, by writing to {email}. You also have the right to complain to the Portuguese Data Protection Authority, CNPD (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">www.cnpd.pt</a>).',
        ],
      },
    ],
  },
};
