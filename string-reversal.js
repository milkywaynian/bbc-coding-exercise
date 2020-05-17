const stringReversal = (string) => {
  //Step 1: Break down the string into an array of words
  let newString = string.split(" ");


  //Step 2: reverse a word
  const wordReversal = (word) => reversedWord = word
        //split word in to an array of letters
        .split("")
        //reverse an array of letters
        .reverse()
        //join the new array of letters into a word
        .join("");


  //Step 3: reverse each word in a new string

  newString = newString.map(newWord => wordReversal(newWord));

  // join reversed words into a sentence

  newString = newString.join(" "); 

  return newString; 
  
}
  
  
module.exports = stringReversal; 