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

  //V
  //Golf Code
  /** In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes===1){
  return "Hole-in-one!";
}
else if(strokes <= par-2){
  return "Eagle";
}else if( strokes == par -1){
  return "Birdie";
}else if (strokes === par ){
  return "Par";

}else if(strokes ===par+1){
  return "Bogey";
}
else if(strokes === par+2){
  return "Double Bogey";
}
else if( strokes >= par +3){
  return "Go Home!"
}

  return "Change Me";
 
}

golfScore(5, 4);

