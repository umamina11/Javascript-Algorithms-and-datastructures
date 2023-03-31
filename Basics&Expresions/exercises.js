//I
//Generate Random Fractions with JavaScript
/**Change randomFraction to return a random number instead of returning 0.
 */
function randomFraction() {

  
     var result = 0;
    
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
   
  }

  //II
  //Generate random whole numbers with javaScript
  // Use this technique to generate and return a random whole number between 0 and 9.

function randomWholeNum() {

    return Math.floor(Math.random() * 10); 
  }
  
//III
//Generate Random Whole Numbers within a Range
//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  //IV
  //Use the parseInt function 
  //Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
  function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");

//V
//Use the parseint function with a radix
/**Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
 */
function convertToInteger(str) {
    return parseInt(str, 2);
    }
    
    convertToInteger("10011");