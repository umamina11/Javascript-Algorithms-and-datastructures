//I
//create strings using template literals
/**Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below). */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
     const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);


  //II
  //Write Concise Object Literal Declarations Using Object Property Shorthand
  /**Use object property shorthand with object literals to create and return an object with name, age and gender properties. */

  const createPerson = (name, age, gender) => {
    
      return {
      name,
      age,
      gender
    };
   
  };

  //III
  //write concise declaration function with ES6
  //Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

  const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
 
  bicycle.setGear(3);
  console.log(bicycle.gear);

  