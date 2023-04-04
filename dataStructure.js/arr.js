//I
// use an array to store a collection of data 
//We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.

let yourArray =["one", 1, true, "two", null, { name: "uma" }]; 

//II
//Access an Array's Contents Using Bracket Notation

//In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.
let myArray = ["a", "b", "c", "d"];

myArray[0]="a";
myArray[1]="anything except b";
myArray[2]="c";
myArray[3]="d";

console.log(myArray);

//III
//Add Items to an Array with push() and unshift()
//We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
    
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    
    return arr;
  }
  
  
  console.log(mixedNumbers(["IV", 5, "six"]));


//IV
//remove items from an array with pop() and shift()
//We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(["challenge", "is", "not", "complete"]));


  //V 
  //Remove items using splice()
  //We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.


  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
 
  arr.splice(1, 4);
  console.log(arr);

//VI 
// add items using splice()
//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
    
   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
   
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



//VII
// copy array items using slice()
//We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

function forecast(arr) {
    
   return arr.slice(2, 4);
   
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
