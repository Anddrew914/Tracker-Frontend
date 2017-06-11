import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  crypto: storageFor('crypto'),
  topTen: this.computed

  actions: {
    topTen() {
      this.get('topTen').set(this.crypto.peekrecord('SortOrder', 1))
    }
  }
});
