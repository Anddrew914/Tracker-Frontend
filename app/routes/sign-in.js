import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  crypto: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('dashboard'))
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .then(() => this.get('crypto').getCrypto())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
