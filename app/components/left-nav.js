import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({

  coinName: null,

  crypto: storageFor('crypto'),

  actions: {
    addCoin (name) {
      console.log('left-nav.js addcoin()', name)
      this.get('crypto').set('coin', name)
      console.log("left-nav.js set(coin, name)", this.get('crypto.coin'))
      console.log("left-nav.js this.sendAction('addCoin', name), goes to dashboard.hbs")
      return this.sendAction('addCoin', name)
    }
  }
});
