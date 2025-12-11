import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::user-restaurant.user-restaurant', ({ strapi }) => ({
  // Custom action to get restaurants for the current authenticated user
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in');
    }

    const userRestaurants = await strapi.documents('api::user-restaurant.user-restaurant').findMany({
      filters: {
        user: {
          id: user.id,
        },
      },
      populate: {
        restaurant: {
          populate: ['logo', 'coverImage', 'theme', 'layout'],
        },
        user: true,
      },
    });

    return { data: userRestaurants };
  },
}));
