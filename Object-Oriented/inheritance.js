//I
//Use Inheritance So You Don't Repeat Yourself
//The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() {}
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

  //II
  //Inherit Behaviors from a Supertype
  //Use Object.create to make two instances of Animal named duck and beagle.

  function Animal() {}

  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  
  
  let duck = Object.create(Animal.prototype); 
  let beagle = Object.create(Animal.prototype); 

  duck.eat(); 
  beagle.eat(); 


//III
//Set the Child's Prototype to an Instance of the Parent
//Modify the code so that instances of Dog inherit from Animal.

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}


Dog.prototype = Object.create(Animal.prototype);

let beagle1 = new Dog();
beagle1.eat(); // Should print "nom nom nom"