const sentenceCapitalization = require('./index');

test('sentenceCapitalization is a function', () => {
    expect(typeof sentenceCapitalization).toEqual('function')
});

test('Capitalize the first letter of each word', () => {
    expect(sentenceCapitalization('bonjour comment vas tu?').toEqual('Bonjour Comment Vas Tu?'));
});

test('Capitalize the first letter', () => {
    expect(sentenceCapitalization('bonjour').toEqual('Bonjour'));
});
