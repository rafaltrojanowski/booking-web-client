import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    name: {
      refreshModel: true
    },
    location: {
      refreshModel: true
    },
    category: {
      refreshModel: true
    },
  },

  model(params) {
    let { store } = this;

    let queryParams = {
      name: params.name,
      location: params.location,
      category: params.category,
    }

    if (location) {
      return store.query('rental', queryParams);
    } else {
      return store.findAll('rental', { reload: true });
    }
  },
});

