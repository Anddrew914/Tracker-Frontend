import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  crypto: storageFor('crypto'),
  getCrypto() {
    console.log("getCrypto");
    return this.get('ajax').request('https://www.cryptocompare.com/api/data/coinlist/')
    .then((response) => (this.get('crypto').set('vault', response)))
    .then(() => console.log("crypto storage", this.get('crypto.vault.Data')))
    .catch((res, rej) => console.log('get crypto error', rej));
  },

  sideBar() {
    return this.get('ajax').request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,DASH,XEM,XMR,NXT,ETC,REP&tsyms=USD,EUR')

  }
});
