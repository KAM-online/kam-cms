// import type { Core } from '@strapi/strapi';
import { errors } from '@strapi/utils';

const { ApplicationError } = errors;

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Force the socket to be treated as encrypted for proxy setups
    strapi.server.use(async (ctx, next) => {
      if (ctx.req?.socket) {
        (ctx.req.socket as any).encrypted = true;
      }
      await next();
    });

    strapi.documents.use(async (context, next) => {
      const revalidationMap: Record<string, string[]> = {
        ContactData: ['/', '/polityka-prywatnosci'],
        LandingPage: ['/'],
        PrivacyPolicy: ['/polityka-prywatnosci'],
      };
      const pageActions = ['publish'];

      if (
        pageActions.includes(context.action) &&
        revalidationMap[context.contentType.globalId]
      ) {
        const res = await fetch(`${process.env.FRONTEND_URL}/api/revalidate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.FRONTEND_SECRET}`,
          },
          body: JSON.stringify({
            paths: revalidationMap[context.contentType.globalId],
          }),
        });

        const response = (await res.json()) as any;

        if (response.error) {
          throw new ApplicationError(
            'Wystąpił błąd podczas odświerzania frontendu'
          );
        }
      }

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
