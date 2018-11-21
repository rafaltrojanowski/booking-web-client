import Ember from 'ember';

export default Ember.Component.extend({

  locations: ['Phrae', 'Chiang Mai', 'Phetchabun'],
  categories: Ember.String.w('Bicycle Scooter Motorbike'),

  actions: {
    updateParams() {
      this.set('name', this.get('q'));
      this.sendAction('updateParams');
    },

    selectCategory(category) {
      this.set('category', category);
    },

    selectLocation(location) {
      this.set('location', location);
    }
  }
});
