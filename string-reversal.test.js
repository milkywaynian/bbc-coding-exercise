const stringReversal = require('./string-reversal');

test('revereses letters in words of a string', () => {
    expect(stringReversal("cat and dog")).toBe("tac dna god");
});