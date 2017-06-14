import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  user_coins: DS.hasMany("user-coin", { async: true }),
});
