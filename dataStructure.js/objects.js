//I 
//use the delete keyword to remove object properties
//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
 
  console.log(foods);


  //II
  //Check if an Object has a Property
  // Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }

  //III
  // Iterate Through the Keys of an Object with a for...in Statement
  //We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.
  function countOnline(usersObj) {
   
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
   
  }

  //IV
  //Generate an Array of All Object Keys with Object.keys()
  //Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

  let users1 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    
    return Object.keys(obj);
    
  }
  
  console.log(getArrayOfUsers(users1));

  //V
  //Modify an Array Stored in an Object
  //Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

  let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  function addFriend(userObj, friend) {
   
    userObj.data.friends.push(friend);
    return userObj.data.friends;
   
  }
  
  console.log(addFriend(user, "Pete"));