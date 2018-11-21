import Ember from 'ember';

export default Ember.Controller.extend({
  firstRental: Ember.computed.oneWay('model.firstObject'),

  actions: {
    handleClick() {

    },

    handleDrag() {

    }
  }
});
