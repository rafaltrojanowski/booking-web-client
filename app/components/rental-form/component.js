import Ember from 'ember';

export default Ember.Component.extend({
  // TODO: it should support multiword locations like Chiang Mai
  // also it shouls be case (in)sensitive prone
  categories: Ember.String.w('Bicycle Scooter Motorbike'),
  locations: Ember.String.w('Phrae ChiangMai Phetchabun'),

  actions: {
    save() {
      this.attrs.save(this.get('changeset'));
    },

    cancel() {
      this.attrs.cancel(this.get('changeset'));
    },

    selectCategory(category) {
      this.get('changeset').set('category', category);
    },

    selectLocation(location) {
      this.get('changeset').set('location', location);
    },
  }
});
