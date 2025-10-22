module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-vercel',
      providerOptions: {
        token: env('VERCEL_BLOB_TOKEN'),
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000, // Year in seconds
      },
      breakpoints: null,
    },
  },
});
