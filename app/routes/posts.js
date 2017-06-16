import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('post');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    },
    edit(post) {
      return this.get('store').find('post', post.id)
      // .then(() => this.transitionTo('post.edit'))
    }
  }
});
