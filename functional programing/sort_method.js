//Sort an Array Alphabetically using the sort Method
//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.


function alphabeticalOrder(arr) {
    
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);