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
  // practice comparing differnt values
  /**The compare Equality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal. */

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
  // comparison with the strict inequality operator
 /* Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
 */
 function testStrictNotEqual(val) {
    if (val!==17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  //VI
  // comparison with the greater than operator 
  //Add the greater than operator to the indicated lines so that the return statements make sense.
  function testGreaterThan(val) {
    if (val>100) {  
      return "Over 100";
    }
  
    if (val>10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);


  //VII
  // Comparison with the greater than or equal to operator
  //Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
  function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
  
    if (val>=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  //VIII
  //Comparison with the less than operator 
  //Add the less than operator to the indicated lines so that the return statements make sense.
  function testLessThan(val) {
    if (val<25) {  
      return "Under 25";
    }
  
    if (val<55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);


  //IX
  // Comparison with less than or equal to operator
  //Add the less than or equal to operator to the indicated lines so that the return statements make sense.

  function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  //X
  //comparision with the logical and operator
  //Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
  function testLogicalAnd(val) {
  
    if (val<=50 && val>= 25)  {
      
        return "Yes";
      
    }
  
    return "No";
  }
  testLogicalAnd(10);
