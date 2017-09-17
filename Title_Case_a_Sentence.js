/*/ Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. /*/

function titleCase(str) {
  var words = str.split(" ");
  var arr = [];


  for (var i in words){
    temp = words[i].toLowerCase();
    temp = temp.charAt(0).toUpperCase() + temp.substring(1);
    arr.push(temp);
  }
  return arr.join(" ");

}

titleCase("I'm a little tea pot");
