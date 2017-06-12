import Ember from 'ember';
import { storageFor } from 'ember-local-storage';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  crypto: storageFor('crypto'),

  model() {
      return this.get('crypto.vault.Data.BTC.SortOrder')
    }
});
