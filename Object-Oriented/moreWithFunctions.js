//I
//Iterate Over All Properties

//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];

  for (let property in beagle) {
    if (Dog.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

//II
//Understand the Constructor Property
//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
    this.name = name;
  }
  
 
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

//III
//Change the Prototype to a New Object
//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
 
    numLegs: 2,
    eat() {
      console.log("nom nom nom");
    },
    describe() {
      console.log("My name is " + this.name);
    }
  };

//IV
//Remember to Set the Constructor Property when Changing the Prototype
//define the constructor property on the dg prototype
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
  constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

//V
//Understand Where an Object’s Prototype Comes From
//Use isPrototypeOf to check the prototype of beagle.


function Dog(name) {
  this.name = name;
}

let beagle1 = new Dog("Snoopy");


Dog.prototype.isPrototypeOf(beagle1);


//VI
//Understand the Prototype Chain
//Modify the code to show the correct prototype chain.

function Dog(name) {
  this.name = name;
}

let beagle2 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle2); 


Object.prototype.isPrototypeOf(Dog.prototype);