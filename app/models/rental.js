import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  category: DS.attr('string'),
  location: DS.attr('string'),

  lat: DS.attr('number'),
  lng: DS.attr('number'),

  dailyRate: DS.attr('number'),

  user: DS.belongsTo('user', { async: false }),

  bookings: DS.hasMany('bookings'),
});
