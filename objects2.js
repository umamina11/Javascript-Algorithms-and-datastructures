//I
//Testing Objects for properties
/** Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".*/
function checkObj(obj, checkProp) {
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  return "Change Me!";
  
}

//II
//manipulating complex objects
/**Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
 */
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "kristen",
      "title": "flowers",
      "release_year": 20000,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    
    }
  ];


  //III 
  //Accessing Nested Objects
  /** Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.*/
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

 //IV
// Accessing nested Arrays
/**Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object. */
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

  //V
  //Record collection
  //
