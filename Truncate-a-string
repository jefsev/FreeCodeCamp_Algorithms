/*/////////////////////////////////////
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

///////////////////////////////////////*/

function truncateString(str, num) {
  /// Store str length in var
  var strL = str.length;
  var str1;
  /// if str is longer than num and num is higher than 3 truncate
  if ( strL > num && num > 3){
    str1 = str.slice(0, num - 3);
    str1 = str1 + "...";
     /// else if str is equal or lower than 3 dont add 3 dots to str length
  } else if ( num <= 3){
     str1 = str.slice(0, num);
     str1 = str1 + "...";
     /// else dont add dots
  }  else {
    str1 = str.slice(0, num);
  }

  return str1;
}

truncateString("Absolutely Longer", 2);
