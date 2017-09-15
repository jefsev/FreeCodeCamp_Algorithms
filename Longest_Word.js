/*/ Return the length of the longest word in the provided sentence.

Your response should be a number. /*/

function findLongestWord(str) {
  var length = 0;
  var xl;
  //split string at spaces to make array of strings.
  var strArr = str.split(' ');

 //loop they array of strings

 for(var i = 0; i < strArr.length; i++){
   //Check if array is higher
    if(strArr[i].length > length){
      length = strArr[i].length;
      //store highest array
      xl = strArr[i].length;
    }

 }
  return xl;

}


findLongestWord("The quick brown fox jumped over the lazy dog");
