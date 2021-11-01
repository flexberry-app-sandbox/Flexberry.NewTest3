import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-new-test3-book', 'Unit | Model | new-platform-new-test3-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-new-test3-author',
    'model:new-platform-new-test3-book',
    'model:new-platform-new-test3-country',
    'model:new-platform-new-test3-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
