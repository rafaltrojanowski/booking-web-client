import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  clientEmail: DS.attr(),
  startAt: DS.attr(),
  endAt: DS.attr(),

  title: DS.attr(),
  color: DS.attr(),
});
