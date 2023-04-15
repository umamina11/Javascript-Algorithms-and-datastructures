//I
//Define a constructor function 
//Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog(){
    this.name ="Alpha";
    this.color="Double Coat";
    this.numLegs = 4;
  }


//II
// use constructor to create objects
// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog1() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  let hound= new Dog1();


//III
//Extend constructors to recieve arguments
//Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog2(name, color ) {
    this.name=name;
    this.color= color;
    this.numLegs= 4;
  
  }
   let terrier= new Dog2("alpha", "black");
   terrier.name
  terrier.color


  //IV
  //Verify an Object's Constructor with instanceof
  //Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.



function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(5);
  myHouse instanceof House;

  //V
  //understand own properties
  // Add the own properties of canary to the array ownProps.
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }


  //VI
  // use prototype properties to reduce duplicate code
  //add a numlegs property to the prototype of Dog
  
  function Dog3(name) {
    this.name = name;
  }
  
  Dog3.prototype.numLegs = 4;

  let beagle = new Dog3("Snoopy");

  //VII
  //Iterate Over All Properties
  //Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

  function Dog4(name) {
    this.name = name;
  }
  
  Dog4.prototype.numLegs = 4;
  
  let beagle1 = new Dog4("Snoopy");
  
  let ownProps1 = [];
  let prototypeProps = [];
  
  
  for (let property in beagle1) {
    if (Dog.hasOwnProperty(property)) {
      ownProps1.push(property);
    } else {
      prototypeProps.push(property);
    }
  }