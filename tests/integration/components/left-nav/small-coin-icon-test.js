import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('left-nav/small-coin-icon', 'Integration | Component | left nav/small coin icon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{left-nav/small-coin-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#left-nav/small-coin-icon}}
      template block text
    {{/left-nav/small-coin-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
