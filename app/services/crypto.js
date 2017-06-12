import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  crypto: storageFor('crypto'),

  getCrypto() {
    console.log("getCrypto");
    return this.get('ajax').request('https://www.cryptocompare.com/api/data/coinlist/')
    .then((response) => (this.get('crypto').set('vault', response)))
    .then(() => console.log("crypto storage", this.get('crypto.dummy')))
    .catch((res, rej) => console.log('get crypto error', rej));
}
  //  topTen() {
  //   let topTen = this.get('crypto.vault.Data')
   //
  //   for (SortOrder in topTen) {
  //     if (SortOrder === 1)
  //       console.log()
  //   }
   //
  //   console.log("topTen", topTen);

});