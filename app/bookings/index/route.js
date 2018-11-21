import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('booking', { reload: true })
  },

  setupController: function(controller, model) {
    controller.set('model', model);

    let events = []

    model.map(function(model) {

      events.push({
        id: model.id,
        title: model.data.title,
        start: model.data.startAt,
        end: model.data.endAt,
        color: model.data.color
      });
    });

    controller.set('events', events);
  }

});
