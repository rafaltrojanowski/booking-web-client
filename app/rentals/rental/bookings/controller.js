import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    destroy(booking){
      booking.destroyRecord().then(()=>{
        this.transitionToRoute('rentals.rental.bookings');
      });
    }
  }
});
