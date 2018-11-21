import Ember from "ember";
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import UrlTemplates from "ember-data-url-templates";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(UrlTemplates, DataAdapterMixin, {
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise',

  createRecordUrlTemplate: '{+host}/rentals/{rentalId}/bookings',
  updateRecordUrlTemplate: '{+host}/rentals/{rentalId}/bookings/{bookingId}',
  deleteRecordUrlTemplate: '{+host}/rentals/{rentalId}/bookings/{bookingId}',

  // headers: Ember.computed(function() {
    // return {
      // 'X-Api-Key': 'Mini-BookingSync' // TODO: remove me
    // };
  // }).volatile(),

  urlSegments: {
    rentalId: function(type, id, snapshot, query) {
      return snapshot.record.get('rental.id');
    },

    bookingId: function(type, id, snapshot, query) {
      return id
    },
  }
});

