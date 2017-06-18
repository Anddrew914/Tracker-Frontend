import Ember from 'ember';

export default Ember.Component.extend({

model: {},

actions: {
  update () {
    console.log('asdf')
    this.sendAction('update', this.get('model'));
  },

  cancel () {
    this.transitionTo('posts')
  }
}
});
