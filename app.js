const stringReversal = require('./string-reversal');


const arguments = process.argv;

//return the arguments passed in 

const myArguments = arguments.slice(2);

//handle a case where no arguments have been passed in 

if(arguments.length == 2) {
    console.log("Enter a command followed by a value. Here are available commands: \"reverse\": reverses letters in a string, leaving the string\'s words in their original order. For example \"cat and dog\" return as \"tac dna god\"")
}

//handle a reverse command and an error

if(myArguments[0] == "reverse" && myArguments.length == 2) {
    let response = stringReversal.reversedSentence(myArguments[1]);
    console.log(response);
} else if (myArguments[0] == "reverse" && (myArguments.length !== 2)) {
    console.log("error: you need to input an argument after the command. For example: \"cat and dog\". Note: You can't enter more than one argument");
}