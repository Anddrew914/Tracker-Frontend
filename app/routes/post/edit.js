import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    update() {
      const newPost = this.get('store').findRecord('post', this.currentModel.id);
      newPost.save().then((post) => {
        this.transitionTo('post', post);
      });
    }
  }
});
