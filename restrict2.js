//I 
// Restict possible username 
/**Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above. */

let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

//II
//Match white spaces
//Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result1 = sample.match(countWhiteSpace);


//III
//Match Non-Whitespace Characters
//Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result2 = sample.match(countNonWhiteSpace);

//IV
//Specify Upper and Lower Number of Matches
//Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result3 = ohRegex.test(ohStr);

//V
//Specify Only the Lower Number of Matches
//Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result4 = haRegex.test(haStr);

//VI 
// Specify Exact numbers of matches
//Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result5 = timRegex.test(timStr);
