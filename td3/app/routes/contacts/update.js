import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findRecord('contact',);
  },
  actions: {
    updateContact(contact){
      contact.update().then(
        ()=>{this.transitionTo('contacts');}
      );
    }
  }
});
