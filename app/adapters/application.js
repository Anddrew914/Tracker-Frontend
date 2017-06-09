import ENV from 'Trakr/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

import Ember from 'ember';

import AjaxService from 'services/ember-ajax';

export default AjaxService.extend({
  host: ENV.apiHost
});

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,

  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
