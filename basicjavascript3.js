//I
// Access array data with indexes
const myArray = [50, 60, 70];

console.log(myArray[0]);
const myData=myArray[0];

//II
//modify array data with indexes
//Modify the data stored at index 0 of myArray to a value of 45.

const myArray1 = [18, 64, 99];

myArray1[0]= 45;

//III
// access multi-dimensional arrays with indexes

//Using bracket notation select an element from myArray such that myData is equal to 8.


const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray2[2][1];

//IV
// manipulate arrays with push method
//Push ["dog", 3] onto the end of the myArray variable.

const myArray4 = [["John", 23], ["cat", 2]];

myArray4.push(["dog",3]);

//V
// manipulate arrays with pop method

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const myArray5 = [["John", 23], ["cat", 2]];

const removedFromMyArray=myArray5.pop();
console.log(removedFromMyArray);
console.log(myArray5);

//VII
//manipulate the array with the shift method
//Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const myArray6 = [["John", 23], ["dog", 3]];

const removedFromMyArray1 = myArray6.shift();

//VIII
//manipulate the array with unshift method
//Add ["Paul", 35] to the beginning of the myArray variable using unshift().

const myArray7 = [["John", 23], ["dog", 3]];
myArray7.shift();


myArray7.unshift(["Paul",35]);

//IX
// shopping list 
/**Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.*/
const myList = [
    ["mangoes",1,2],
    ["onion",1,2,3],
    ["kitkat",2,4],
  ["toothpaste",2,1,1],
  ["cooking oil",2]
    ];

//X
//Reusable javascript function
/**
 * Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.
 */
function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

  //XI
  // passing values to function with arguments
  /**
   * Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
*/
function functionWithArgs(num1, num2){
    console.log(num1+num2);
  
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);

  //XII
  // return a value from a function with return 
  // Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
  function timesFive(num){
    return num*5;
  
  }
  timesFive(5);
  timesFive(2);
  timesFive(0)


  //XIII
  //global scope and functions
  /**
   * Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
   */

  // Declare the myGlobal variable below this line
let myGlobal =10;
let oopsGlobal=5;
function fun1() {
 
var output = "";
  if (typeof myGLobal != "undefined") {
output += "myGlobal: " + myGlobal;
  }
  if (typeof myGlobal != "undefiend") {
output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);

}


function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//XIV
//local scope and the functions 
/**The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

 */

function myLocalScope() {


  console.log('inside myLocalScope', myVar);
  var myVar = "foo";
  
  console.log(myVar);
}

myLocalScope();

console.log('outside myLocalScope', myVar);


//XV
// global Vs local scope in the functions
/**Add a local variable to myOutfit function to override the value of outerWear with the string sweater. */

// Setup
const outerWear = "T-Shirt";

function myOutfit() {

const outerWear="sweater";
  
  return outerWear;
}

myOutfit();

//XVI
// understanding undefined value returened from a funtion
/**Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
 */

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum += 5;
}

addThree();
addFive();
