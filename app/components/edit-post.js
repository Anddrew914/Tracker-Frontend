import Ember from 'ember';

export default Ember.Component.extend({

model: {},

actions: {
  update () {
    this.sendAction('update', this.get('model'));
  },

  cancel () {
    this.transitionTo('posts')
  }
}
});
