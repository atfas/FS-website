// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The live domain, used to build absolute URLs (e.g. the share image for WhatsApp/Facebook)
  site: 'https://fernandesesaraiva.pt',

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
