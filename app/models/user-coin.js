import DS from 'ember-data';

const {attr, hasMany} = DS;

export default DS.Model.extend({
  name: DS.attr,
  price: DS.attr
});
