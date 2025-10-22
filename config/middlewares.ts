export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://k9v6cywaxb9ieton.public.blob.vercel-storage.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://k9v6cywaxb9ieton.public.blob.vercel-storage.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
