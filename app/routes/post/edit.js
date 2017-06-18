import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {

    update(id,title, body) {
      console.log(id, title, body)
      this.get('auth').update(id, title, body)
      .then(() => this.transitionTo('posts'))
    },
    cancel() {
      this.transitionTo('posts');

    }
  }
});
