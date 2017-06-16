import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  ajax: Ember.inject.service(),

});
