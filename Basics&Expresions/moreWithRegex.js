//I
//check for all or none 
// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.


let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

//II
// positive and negative lookahead 
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.


let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result1 = pwRegex.test(sampleWord);

//III
//Chesk for mixed grouping of characters 
//Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
//Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result2 = myRegex.test(myString);


//IV
// reused pattern using capture groups 
//Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result3 = reRegex.test(repeatNum);

//V
//Use Capture Groups to Search and Replace
//Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result4 = str.replace(fixRegex, replaceText);


//VI
//remove white spaces from start and end 

//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
//Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result5 = hello.replace(wsRegex, ""); // Change this line