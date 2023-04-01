//I
//Use the JavaScript Console to Check the Value of a Variable
//Use the console.log() method to print the value of the variable a where noted in the code.
let a = 5;
let b = 1;
a++;

console.log(a)

let sumAB = a + b;
console.log(sumAB);

//II
//Understanding the Differences between the freeCodeCamp and Browser Console

//After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after your log to clear the browser console. View the difference in the two consoles.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);

console.clear();


//III
//Use typeof to Check the Type of a Variable
//Add two console.log() statements to check the typeof each of the two variables seven and three in the code.

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);


//IV
//Catch Misspelled Variable and Function Names
//Fix the two spelling errors in the code so the netWorkingCapital calculation works.
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//V
//catch unclosed parentheses, brackets, braces and quotes
/**
 * Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

Fix the two pair errors in the code.
 */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//VI

//Catch Mixed Usage of Single and Double Quotes
//Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//VII
//Catch Use of Assignment Operator Instead of Equality Operator
//Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);


//VIII
//Catch Missing Open and Closing Parenthesis After a Function Call
//Fix the code so the variable result is set to the value returned from calling the function getNine.
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result1 = getNine();
  console.log(result);

