//I
//Introduction to if-else statements
//Combine the if statements into a single if/else statement.
function testElse(val) {
    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    }else{
      result = "5 or Smaller";
    }

    return result;
  }
  
  testElse(4);

// II
// Introduction to elseif statement 
//Convert the logic to use else if statements.
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else {
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);

//III
//logocal order in IF-Else Statements
/**Change the order of logic in the function so that it will return the correct statements in all cases.
 */
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

  //IV
  //chaining If-Else Statements
  /**Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge */

function testSize(num) {
    
  if(num<5){
    return "Tiny";
  } else if (num < 10){
  return "Small";
  } else if(num < 15){
    return "Medium";
  }
  else if(num<20){
    return "Large";
  }else if( num>= 20){
    return "Huge";
  }
  
    return "Change Me";
    
  }
  
  testSize(7);