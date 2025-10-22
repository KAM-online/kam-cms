module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@schornio/strapi-provider-upload-vercel-blob',
      providerOptions: {
        token: env('BLOB_READ_WRITE_TOKEN'),
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000, // Year in seconds
      },
      breakpoints: null,
    },
  },
});
