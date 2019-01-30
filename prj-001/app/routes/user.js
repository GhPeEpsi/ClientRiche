import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let user1 = {id: 2,email:"er@gmail.com"}
    return user1;
  }
});
