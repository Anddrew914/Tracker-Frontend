import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({

  coinName: null,

  crypto: storageFor('crypto'),

  actions: {
    addCoin (name) {
      console.log('lev-nav.js addcoin', name)
      this.get('crypto').set('coin', name)
      console.log("to crypto storage coin from left-nav.js", this.get('crypto.coin'))
      return this.sendAction('addCoin', name)
    }
  }
});
