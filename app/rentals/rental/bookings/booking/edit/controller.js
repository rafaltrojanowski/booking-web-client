import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(changeset){
      changeset.validate().then(()=>{
        if(changeset.get("isValid")){
          changeset.save().then((booking)=>{
            this.transitionToRoute('rentals.rental.bookings',
              this.get('booking.rental.id')
        );
          });
        } else {
          alert('Fix errors before saving')
        }
      })
    },

    cancel(changeset) {
      changeset.rollback();
      this.transitionToRoute('rentals.rental.bookings');
    }
  }
});
