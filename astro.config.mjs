// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The live domain, used to build absolute URLs (share image, sitemap, hreflang links)
  site: 'https://fernandesesaraiva.pt',

  // Portuguese at / and English at /en/ (see src/i18n)
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    // Generates /sitemap-index.xml listing every page with its other-language version
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-PT', en: 'en' },
      },
    }),
  ],

  // Settings read from .env (see .env.example). Both are public by design: they end up in the page.
  env: {
    schema: {
      // Web3Forms access key: where contact form messages are delivered (https://web3forms.com)
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      // Cal.com booking link, e.g. "fernandes-saraiva/consulta" (https://cal.com)
      PUBLIC_CAL_LINK: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
});
