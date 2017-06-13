import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  ajax: Ember.inject.service(),
  crypto: storageFor('crypto'),

  model() {
      return this.get('crypto.vault.Data')
    },

  actions: {
    addCoin(name) {
      console.log('dashboard.js addCoin, sending ajax', this.get('name'))
      return this.get('ajax').request(`https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${name}&tsym=USD`)
      .then((res) => console.log("dashboard.js addCoin ajax call", res))
      .catch((res, rej) => console.log(rej));
  }
}
});
