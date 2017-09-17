/*/ Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. /*/

function repeatStringNumTimes(str, num) {

  var strNo = '';
  if (num > 0){
    str = str.repeat(num);
  }else {
    return strNo;
  }


  return str;
}

repeatStringNumTimes("abc", 3);
