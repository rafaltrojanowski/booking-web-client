import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      this.attrs.save(this.get('changeset'));
    },

    cancel() {
      this.attrs.cancel(this.get('changeset'));
    }
  }

});
