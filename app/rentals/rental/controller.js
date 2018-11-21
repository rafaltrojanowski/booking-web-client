import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    destroy(){
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('rentals');
      });
    }
  }
});
