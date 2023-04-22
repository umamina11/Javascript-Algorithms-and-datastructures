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