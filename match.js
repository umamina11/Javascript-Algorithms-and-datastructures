//I
//Match Single Characters Not Specified
/**Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
 */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 


//II
//Match Characters that Occur One or More Times
/**You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign. */

let difficultSpelling = "Mississippi";
let myRegex1 = /s+/g; 
let result1 = difficultSpelling.match(myRegex);

//III
//Match Characters that Occur Zero or More Times
/**
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

 */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result2 = chewieQuote.match(chewieRegex);

