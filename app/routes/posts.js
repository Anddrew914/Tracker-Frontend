import Ember from 'ember';
import RSVP from 'rsvp';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),

  model() {
    return RSVP.hash({
      posts: this.get('store').findAll('post'),
      users: this.get('credentials')
    })
  },

  // canDelete: Ember.computed.equal(model.posts.user, model.users.content.email),

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
