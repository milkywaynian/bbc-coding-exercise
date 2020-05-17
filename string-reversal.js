//Step 1: Break down the string into an array of words
const sentenceToWords = (sentence) => {
    return sentence.split(" ");
  } 

//Step 2: reverse a word, split word in to an array of letters,reverse an array of letters, join the new array of letters into a word. 
const wordReversal = (word) => {
    const reversedWord = word
    .split("")
    .reverse()
    .join("")

  return reversedWord; 
}

//Step 3: reverse all words in a sentence 

const reversedSentence = (string) => {
    //string to words
    let newString = sentenceToWords(string)
    // reverse each word in a an array of words
    newString = newString.map(newWord => wordReversal(newWord));
    // join the words into sentence
    newString = newString.join(" "); 

    return newString; 

}
  
module.exports = {
    sentenceToWords,
    wordReversal,
    reversedSentence
}