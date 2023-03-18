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