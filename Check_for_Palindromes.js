 /* Return true if the given string is a palindrome. Otherwise, return false. */

 function palindrome(str) {

    str = str.toLowerCase().replace(/[\W_]/g, '');

  var strC = str.split('').reverse().join('');

    if (str == strC){
      return true;
    }
  else{
    return false;
  }
}




palindrome("eye");
