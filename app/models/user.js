import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  town: DS.attr(),

  rentals: DS.hasMany('rentals')
});
