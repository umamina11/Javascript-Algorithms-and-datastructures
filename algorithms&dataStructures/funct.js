//I
//Confirm the ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    
  
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("He has to give me a new name", "name");

//II
//Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
  
    return accumulatedStr;
  }

//III
//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {

    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

//IV
//Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

//V
//Boo who
//Check if a value is classified as a boolean primitive. Return true or false.

//Boolean primitives are true and false.

function booWho(bool) {
    return typeof bool === "boolean";
  }

  booWho(null);

