import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: [
    'name',
    'location',
    'category'
  ],

  name: null,
  location: null,
  category: null,

  itemsCount: Ember.computed.oneWay('model.length'),
  firstRental: Ember.computed.oneWay('model.firstObject'),

  actions: {
    updateParams() {
      this.transitionToRoute('search', {
        queryParams: {
          name: this.get('name'),
          location: this.get('location'),
          category: this.get('category')
        }
      });
    },
  }
});
