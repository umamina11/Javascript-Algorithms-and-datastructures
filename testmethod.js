//I
//using the test method
//Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result= myRegex.test(myString);

//II
//match literal strings
//Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result1 = waldoRegex.test(waldoIsHiding);

//III
//Match a Literal String with Different Possibilities
//Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/ ;
let result2 = petRegex.test(petString);


//IV
//Ignore Case While Matching
//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString2 = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString2);


//V
//Extract Matches
//Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);

//VI
//find more than first match
/*Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi*/


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result5 = twinkleStar.match(starRegex);


//VII
//match anything with wildcard period
//Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result6 = unRegex.test(exampleStr);