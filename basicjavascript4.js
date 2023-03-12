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