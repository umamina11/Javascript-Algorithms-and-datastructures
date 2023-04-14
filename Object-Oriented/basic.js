// I
//create a basic javascript object 
//Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.


let dog={
    name: "Alpha",
    numLegs: 4
}

// II 
//use dot notation to Access the properties of an object
//Print both properties of the dog object to your console.


let dog1 = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog1.name);
  console.log(dog1.numLegs);

//III
 // create a method on an objcet
 //Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

 let dog2 = {
    name: "Spot",
    numLegs: 4,
   sayLegs : function(){
    return "This dog named "+ dog2.name + " has " + dog2.numLegs + " legs."
   }
  };
  
  dog.sayLegs();

//IV
// make code more reusable with the this keyword
//Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.


let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();