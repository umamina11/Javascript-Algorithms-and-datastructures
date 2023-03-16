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
  