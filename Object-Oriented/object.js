//I
//
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


//II
//Use a Mixin to Add Common Behavior Between Unrelated Objects
//Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };

  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
  glideMixin(bird);
  glideMixin(boat);


//III
//Use Closure to Protect Properties Within an Object from Being Modified Externally
//Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
  }


  //IV
  //Use Closure to Protect Properties Within an Object from Being Modified Externally
  //Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.


  function Bird() {
  let weight = 15;
  this.getWeight = () => weight;  
}

//V
//Understand the Immediately Invoked Function Expression (IIFE)
//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

(function() {
  console.log("A cozy nest is ready");
})();



//VI
//Use an IIFE to Create a Module
//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();