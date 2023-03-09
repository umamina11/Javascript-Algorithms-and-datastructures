//I
// Access array data with indexes
const myArray = [50, 60, 70];

console.log(myArray[0]);
const myData=myArray[0];

//II
//modify array data with indexes
//Modify the data stored at index 0 of myArray to a value of 45.

const myArray1 = [18, 64, 99];

myArray1[0]= 45;

//III
// access multi-dimensional arrays with indexes

//Using bracket notation select an element from myArray such that myData is equal to 8.


const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray2[2][1];

//IV
// manipulate arrays with push method
//Push ["dog", 3] onto the end of the myArray variable.

const myArray4 = [["John", 23], ["cat", 2]];

myArray4.push(["dog",3]);

//V
// manipulate arrays with pop method

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const myArray5 = [["John", 23], ["cat", 2]];

const removedFromMyArray=myArray5.pop();
console.log(removedFromMyArray);
console.log(myArray5);

//VII
//manipulate the array with the shift method
//Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const myArray6 = [["John", 23], ["dog", 3]];

const removedFromMyArray1 = myArray6.shift();

//VIII
//manipulate the array with unshift method
//Add ["Paul", 35] to the beginning of the myArray variable using unshift().

const myArray7 = [["John", 23], ["dog", 3]];
myArray7.shift();


myArray7.unshift(["Paul",35]);

//IX
// shopping list 
/**Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.*/
const myList = [
    ["mangoes",1,2],
    ["onion",1,2,3],
    ["kitkat",2,4],
  ["toothpaste",2,1,1],
  ["cooking oil",2]
    ];
