//I
//Use class Syntax to Define a Constructor Function
/** Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.*/

class Vegetable {
    constructor(name) {
      this.name = name;
    }
  } 
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 

//II
//use gathers and setters to control access to an object
/** Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.*/


class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

  
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature; 