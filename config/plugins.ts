module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@schornio/strapi-provider-upload-vercel-blob',
      providerOptions: {
        token: env('VERCEL_BLOB_TOKEN'),
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000, // Year in seconds
      },
      breakpoints: {},
    },
  },
});
