import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr,
  price: DS.attr,
  user: DS.belongsTo("user", { async: true }),
});
