//Telephone Number Validator
/**Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
    var regex1 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    var regex2 = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
    var regex3 = /^[(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    var regex4 = /^[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
    var regex5 = /^[0-9]{10}$/;
    var regex6 = /^[1]{1}[\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
    var regex7 = /^[1]{1}[\s][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    var regex8 = /^[1]{1}[\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    var regex9 = /^[1]{1}[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
      
    if (str.match(regex1)) {
      return true;
    }
    else if (str.match(regex2)) {
      return true;
    }
    else if (str.match(regex3)) {
      return true;
    }
    else if (str.match(regex4)) {
      return true;
    }
    else if (str.match(regex5)) {
      return true;
    }
    else if (str.match(regex6)) {
      return true;
    }
    else if (str.match(regex7)) {
      return true;
    }
    else if (str.match(regex8)) {
      return true;
    }
    else if (str.match(regex9)) {
      return true;
    }   
    else {
      return false;
    }
  };
  console.log(telephoneCheck("555-555-5555"));