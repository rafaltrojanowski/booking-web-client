import Ember from 'ember';
import RentalValidations from '../../validations/rental';

export default Ember.Controller.extend({
  RentalValidations,

  actions: {
    save(changeset){
      changeset.validate().then(()=>{
        if(changeset.get("isValid")){
          changeset.save().then((rental)=>{
            this.transitionToRoute('rentals.rental', rental.id);
          });
        } else {
          alert('Fix errors before saving')
        }
      })
    },

    cancel(changeset) {
      changeset.rollback();
      this.transitionToRoute('rentals');
    }
  }

});
