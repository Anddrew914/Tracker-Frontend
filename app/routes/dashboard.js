import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  ajax: Ember.inject.service(),
  crypto: storageFor('crypto'),

  model() {
      return this.get('crypto')
    },

      actions: {
        addCoin(name) {
          console.log('dashboard.js addCoin, sending ajax', name)
          return this.get('ajax').request(`https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${name}&tsym=USD`)
          .then((response) => this.get('store').createRecord('userCoin',
          {
            name: response.Data.AggregatedData.FROMSYMBOL,
            price: response.Data.AggregatedData.PRICE,
          }))
          .then(() => console.log("dashboard.js this.store.createRecord(...)= ", this.get('store').findAll('userCoin')))
          .catch((res) => console.log('dashboarderror', res))
  }
 }
});
// .then((response) => this.store.createRecord('user-coin',
// {
//   name: response.Data.AggregatedData.FROMSYMBOL
//   price: response.Data.AggregatedData.PRICE
// }))

// .then((response) => (this.get('crypto').set('userCoin', response.Data.AggregatedData) ))
// .then(() => console.log("this.get('crypto').set('userCoin',response))) usercoin= ", this.get('crypto.userCoin')))
// .catch((res, rej) => console.log(rej))
