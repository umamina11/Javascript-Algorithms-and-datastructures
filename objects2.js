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
  /**You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests. */

                    
                       const recordCollection = {
                        2548: {
                          albumTitle: 'Slippery When Wet',
                          artist: 'Bon Jovi',
                          tracks: ['Let It Rock', 'You Give Love a Bad Name']
                        },
                        2468: {
                          albumTitle: '1999',
                          artist: 'Prince',
                          tracks: ['1999', 'Little Red Corvette']
                        },
                        1245: {
                          artist: 'Robert Palmer',
                          tracks: []
                        },
                        5439: {
                          albumTitle: 'ABBA Gold'
                        }
                      };
                      
                    
                      function updateRecords(records, id, prop, value) {
                        
                        if (prop !== "tracks" && value !== "") {
                          records[id][prop] = value;
                        } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
                          records[id][prop] = [value];
                        } else if (prop === "tracks" && value !== "") {
                          records[id][prop].push(value);
                        } else if (value === "") {
                          delete records[id][prop];
                        }
                      
                      
                        return records;
                      }
                      
                      updateRecords(recordCollection, 5439, 'artist', 'ABBA');