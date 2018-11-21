import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise',

  // headers: Ember.computed(function() {
    // return {
      // 'X-Api-Key': 'Mini-BookingSync', // TODO: remove me
      // 'API_KEY': Ember.get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
      // 'ANOTHER_HEADER': 'Some header value'
    // };
  // }).volatile()
});
