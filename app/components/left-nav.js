import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({

  coinName: null,

  crypto: storageFor('crypto'),

  actions: {
    addCoin (name) {
      console.log('lev-nav.js addcoin', name)
      return this.sendAction('addCoin', this.get('coin'))
    }
  }
});
