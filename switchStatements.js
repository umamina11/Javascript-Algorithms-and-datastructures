//I
//selecting from many options with switch statement 
/**Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

 */
function caseInSwitch(val) {
    let answer = "";
  switch (val){
    case 1: 
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3: 
    return "gamma";
    break;
    case 4: 
    return "delta";
  }
  
    return answer;
  }
  
  caseInSwitch(1);

  //II
  // Adding a default option in Switch statements
  /**Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff */

function switchOfStuff(val) {
    let answer = "";
    
  switch(val){
    case "a":
    return "apple";
    break;
    case "b":
    return "bird";
    break;
    case "c":
    return "cat";
    break;
    default:
    return "stuff";
    break;
  }
  
    return answer;
  }
  
  switchOfStuff(1);

//III
//multiple identical options in switch statements

/**Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range. */

function sequentialSizes(val) {
    let answer = "";
  switch (val){
    case 1:
    case 2: 
    case 3:
    return "Low";
    break;
    case 4: 
    case 5: 
    case 6:
    return "Mid";
    case 7:
    case 8: 
    case 9:
    return "High";
  }
  
    return answer;
  }
  
  sequentialSizes(1);

//IV
// replacing the if- Else statements with switch 
/** Change the chained if/else if statements into a switch statement.
*/
function chainToSwitch(val) {
    let answer = "";
  switch(val){
    case "bob":
    answer="Marley";
    break;
    case 42:
    answer= "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
  answer = "Ate Nine";
  break;
  
  }
    return answer;
  }
  
  chainToSwitch(7);