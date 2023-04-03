//I
//Catch arguments passed in the wrong order when calling a funtion
//The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

  //II
  //catch off by one errors when using indexing

 // Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.


 function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    
    for (let i = 0; i < len; i++) {
    
      console.log(firstFive[i]);
    }
  }
  
  //III
  //Use Caution When Reinitializing Variables Inside a Loop
  /**Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
*/

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);
  console.log(matrix);



  //IV
  //Prevent Infinite Loops with a Valid Terminal Condition
  //The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }