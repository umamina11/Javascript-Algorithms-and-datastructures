//I
//copy an array with the spread operator
//We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      
      newArr.push([...arr]);
      
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


  //II
  //combine arrays with the spread operator 
  //We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

  function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
    return sentence;
  }

  console.log(spreadOut());


  //III
  //check for the presence of an element with indexOf()
  //indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

  function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
  


  //IV
  //Iterate Through All an Array's Items Using For Loops
  //We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
  
  function filteredArray(arr, elem) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
       
        newArr.push(arr[i]);
      }
    }
  
  
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  