import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('rental');
  },

  deactivate: function() {
    let model = this.get('controller.model')

    if (Ember.isEmpty(model.get('id'))) {
      model.unloadRecord();
    }
  }
});
