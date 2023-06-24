//Spinal Tap Case

// convert a string to spinal case. spinal case is all- lower-case-words-joined-by-dashes

function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
      .toLowerCase()
      .split(/(?:_| )+/)
      .join("-");
  }
  
  // test here
  spinalCase("This Is Spinal Tap");