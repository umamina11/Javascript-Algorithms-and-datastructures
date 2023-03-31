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


//VIII
//match single character with multiple possibilities 
/**Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result7 = quoteSample.match(vowelRegex);


//IX
//match letters of the alphabet
//Match all the letters in the string quoteSample.

//Note: Be sure to match both uppercase and lowercase letters.

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result8 = quoteSample.match(alphabetRegex);

//X
//match numbers and letters of the alphabet
/**Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex. */
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; 
let result9 = quoteSample.match(myRegex); 

