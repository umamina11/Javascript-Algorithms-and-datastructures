//I
//find the characters with lazy matching 
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

//II
//find one or more criminals in a hunt
//Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let reCriminals = /C+/; 

//III
//match begining string pattern 
//Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result1 = calRegex.test(rickyAndCal);

//IV 
// Match ending string 
//Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result2 = lastRegex.test(caboose);