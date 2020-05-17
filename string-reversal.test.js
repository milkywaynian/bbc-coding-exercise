const stringReversal = require('./string-reversal');

test('splits a sentence into an array of words', () => {
    expect(stringReversal.sentenceToWords("cat and dog")).toEqual(["cat", "and", "dog"]);
});

test('reverses letters in a word', () => {
    expect(stringReversal.wordReversal("cat")).toEqual("tac");
});

test('revereses letters in words of a string', () => {
    expect(stringReversal.reversedSentence("cat and dog")).toEqual("tac dna god");
})