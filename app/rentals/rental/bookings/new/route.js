import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('booking', this.store.createRecord('booking', {
        rental: model
      })
    );
  }
});
