//I
//Use export to share a code block
//There are two string-related functions in the editor. Export both of them using the method of your choice.

export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  //II
  // Reuse JavaScript Code Using import
  //Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

  import { uppercaseString, lowercaseString } from './string_functions.js';
  
  uppercaseString("hello");
  lowercaseString("WORLD!");

  //III
  //Use * to Import Everything from a File
  //The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

  import * as stringFunctions from "./string_functions.js";

  stringFunctions.uppercaseString("hello");
  stringFunctions.lowercaseString("WORLD!");

  //IV
  //Create an Export Fallback with export default
  /**The following function should be the fallback value for the module. Please add the necessary code to do so. */
  "use strict";
export default function subtract(x, y) {
  return x - y;
}

//V
//import a default export
//In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
import subtract from "./math_functions.js";


subtract(7,4);

//VI
//Create a JavaScript Promise
//Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject) => {

});

//VII
//Complete a Promise with resolve and reject
/**Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received. */

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer1 represents a response from a server
    let responseFromServer1;
    if(responseFromServer1) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });

  //VIII
  //handle a fulfilled promise with then 
//Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer2 is set to true to represent a successful response from a server
    let responseFromServer2 = true;
      
    if(responseFromServer2) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest2.then(result => {
    console.log(result);
  });


  //IX
  //handle a reject promise with catch
  //Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

  const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer3 is set to false to represent an unsuccessful response from a server
    let responseFromServer3 = false;
      
    if(responseFromServer3) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest3.then(result => {
    
    console.log(result);
  });
  
  makeServerRequest3.catch(error => {
    console.log(error);
  });