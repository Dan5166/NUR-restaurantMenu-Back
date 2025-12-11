export default {
  routes: [
    // Custom route - must be before default routes to take priority
    {
      method: 'GET',
      path: '/user-restaurants/me',
      handler: 'user-restaurant.me',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Default CRUD routes
    {
      method: 'GET',
      path: '/user-restaurants',
      handler: 'user-restaurant.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-restaurants/:id',
      handler: 'user-restaurant.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/user-restaurants',
      handler: 'user-restaurant.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-restaurants/:id',
      handler: 'user-restaurant.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/user-restaurants/:id',
      handler: 'user-restaurant.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
