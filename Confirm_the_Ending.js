/*/ Check if a string (first argument, str) ends with the given target string (second argument, target). /*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  //Check length of target
  var targetL = target.length;

  //Use length of targetL variable to check the end of the str for a match
  if (str.substring(str.length -  targetL ) === target){
    return true;
  }
  else{
    return false;
  }

  return str;
}

confirmEnding("Bastian", "n");
