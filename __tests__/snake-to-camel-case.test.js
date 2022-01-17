const sankeToCamel = require('../src/snake-to-camel-case');

test('', () => {
  const expected = 'userId';
  const out = sankeToCamel('user_id');
  expect(out).toBe(expected);
});
