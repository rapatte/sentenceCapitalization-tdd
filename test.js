const sentenceCapitalization = require('./index');

test('Capitalize is a function', () => {
  expect(typeof sentenceCapitalization).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(sentenceCapitalization('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(sentenceCapitalization('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
