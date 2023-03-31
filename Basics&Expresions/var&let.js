//I
/*
ES6
Compare Scopes of the var and let Keywords*/
/**Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion. */
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

//II
//Mutate an Array Declared with const
/**An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments. */

const s = [5, 7, 2];
function editInPlace() {
  
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

//III
// Prevent Object Mutation
/**In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
*/
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//IV 
//Use Arrow Functions to Write Concise Anonymous Functions

/**Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var. */
const magic = () => {
  return new Date();
};

//V
//Write Arrow Functions with Parameters
//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat=(arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


//VI
//Set Default Parameters for Your Functions
//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (number, value=1) => number + value;

//VII
//Use the Rest Parameter with Function Parameters
//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3));

//VIII
//Use the Spread Operator to Evaluate Arrays In-Place
//Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);