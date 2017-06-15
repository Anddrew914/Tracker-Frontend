import Ember from 'ember';

export default Ember.Component.extend({
  crypto: Ember.inject.service(),

  model() {
    this.get('crypto').getIcon()
  },

})
