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
beagle1.eat(); 

//IV
//Reset an Inherited Constructor Property
//Fix the code so duck.constructor and beagle.constructor return their respective constructors.
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck1 = new Bird();
let beagle2 = new Dog();

//V
//add methods to after the inheritance
/**Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
 * 
 */

function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};


let beagle3 = new Dog();

beagle3.eat(); 
beagle3.bark(); 


//VI
//Override Inherited Methods

//Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};


let penguin = new Penguin();
console.log(penguin.fly());
