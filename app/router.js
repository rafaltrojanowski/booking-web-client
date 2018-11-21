import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('home', { path: '/'}, function() {});
  this.route('login');
  this.route('search', function() {});

  this.route('rentals', function() {
    this.route('new');
    this.route('rental', { path: ':id'}, function() {
      this.route('edit');
      this.route('bookings', function() {
        this.route('booking', { path: ':bookingId'}, function() {
          this.route('edit');
        });
        this.route('new');
      });
    });
  });

  this.route('users', function() {
    this.route('user', { path: ':id'}, function() {
    });
  });
  this.route('bookings', function() {});

});

export default Router;
