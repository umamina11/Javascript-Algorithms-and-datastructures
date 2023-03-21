//I
//Use destructuring assignement to Extract value from objects
/** Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  const {today, tomorrow} = HIGH_TEMPERATURES;


//II
//Use Destructuring Assignment to Assign Variables from Objects
/**Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
 */

const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;


  //III
  //Use Destructuring Assignment to Assign Variables from Nested Objects
  /**Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object. */
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  

    
  const { today: { low: lowToday, high: highToday1 } } = LOCAL_FORECAST;
  

  //IV
  //Use Destructuring Assignment to Assign Variables from Arrays
  /**Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. */
  let a = 8, b = 6;

[a, b] = [b, a];