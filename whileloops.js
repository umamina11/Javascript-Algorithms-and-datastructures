//I
//Iterate with JavaScript while Loops
/**Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop. */


const myArray = [];

let i=5;
while(i>=0){
  myArray.push(i);
  i--;
}

//II
// iterate with for loops
/**Use a for loop to push the values 1 through 5 onto myArray. */


const myArray1 = [];

for (let i=1; i<6;i++){
  myArray1.push(i);
}

//III
//iterate odd numbers with a for loop 
//Push the odd numbers from 1 through 9 to myArray using a for loop.

const myArray2 = [];

for (let i=1;i<=9;i+=2){
  myArray2.push(i);
}

//IV
//count backwards with a for loop
//Push the odd numbers from 9 through 1 to myArray using a for loop.

const myArray3 = [];

for (let i=9;i>=1;i-=2){
  myArray3.push(i);
}

//V
//Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.


const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}