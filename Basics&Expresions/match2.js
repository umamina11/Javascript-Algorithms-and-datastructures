//I
// Match all the letters and numbers

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

//II
//Match everything but letter and numbers 
//Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result1 = quoteSample.match(nonAlphabetRegex).length;

//III
//Match all numbers
//Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result2 = movieName.match(numRegex).length;

//IV
//Match all the non-numbers
//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result3 = movieName.match(noNumRegex).length;

