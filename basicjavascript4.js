//I
// Comparision with the equality operator
/**Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
 */
function testEqual(val) {
    if (val ==12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  

  //II
  //comparision woth the strict equality variable 
  /**Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7. */

function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  //III
  // practice cmomparing differnt values
  /**The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal. */

function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  //IV
  // comparity with the inequality operator

  function testNotEqual(val) {
    if (val !=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  // V
  // comparision with the strict inequality operator
 /* Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
 */
 function testStrictNotEqual(val) {
    if (val!==17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);