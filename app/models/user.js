import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  userCoins: DS.hasMany("user-coin", { async: true }),
});
