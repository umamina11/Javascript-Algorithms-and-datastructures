//I
//compound assignment with augmented addition 

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

//II
//compound assignement with augmented subtraction

let p = 11;
let q = 9;
let r = 3;

p -= 6;
q -= 15;
r -= 1;

//III 
// compound assignment with augmented multiplication
let l = 5;
let m = 12;
let n = 4.6;

l *= 5;
m *= 3;
n *= 10;

//IV
// compound assignment with augmented with division
let e = 48;
let f = 108;
let g = 33;

// Only change code below this line
e /= 12;
f /= 4;
g /= 11;

//V
//escaping literal quotes in string
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";


//VI
//quoting string with single quotes

var myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';


//VII
// escape sequence in string
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

//VIII
//concatenating Strings with plus operator
const myStr3 = "This is the start."+ " This is the end."; 

//IX
//concatenating Strings with the plus equals operator

let myStr4="This is the first sentence.";
myStr+=" This is the second sentence."

//X 
//constructing strings with variables
const myName = "Uma Mina";
const myStr5 = "My name is "+ myName+" and I am well!";

//XI 
// appending variables to stings

const someAdjective = "fun";
let mySt6r = "Learning to code is ";
myStr6 += someAdjective;


//XII
//find the length of the String
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

//XIII
// use brackets notation to find the first character of the string
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

firstLetterOfLastName = lastName1[0];


//XIV
//understand string immutability
 let str="Jello World";
 str="Hello World";

 //XV
 //use brackets notation to find the Nth Character in a string 

 const lastName2 = "Lovelace";

const thirdLetterOfLastName = lastName2[2];

//XVI
//use brackets notation to find the last character in a string 
const lastName3 = "Lovelace";

const lastLetterOfLastName = lastName3[lastName3.length-1];

//XVII
// use bracket notations to find the Nth-to-Last Character in a string 
//Use bracket notation to find the second-to-last character in the lastName string.
const lastName4 = "Lovelace";

const secondToLastLetterOfLastName = lastName4[lastName4.length-2];
//XVIII
//Wordblanks

var myNoun="dog";
var myAdjective="big";
var myVerb="ran";
var myAdverb="quickly";

var wordblank="The "+ myAdjective +" "+ myNoun + " " + myVerb + " so "+ myAdverb + " into the field.";
console.log(wordblank);

//XIX
//Store multiple values in one varible using javascript array
//the new array myArray so that it contains both a string and a number

const myArray=["I","am","uma","mina",1,2,3,4];

//XX
//nest one array within another array

const myArr=["uma","neha","vidhan","Raghu",[21,25,18,23]]
