import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('contact',{
      nom:''
    });
    },
  templateName:'contacts/add',
  afterModel(model,transition){
    setImmediate(model,'copy',{
      Firstname:get(model,'firstname'),
      Lastname:get()
    })
  },

  actions: {
    addContact(contact){
      contact.save().then(
        ()=>{this.transitionTo('contacts');}
      );
    }
  }
});
