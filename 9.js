/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  //将整数转换成数组
  x = String(x).split('');
  while (x.length > 1) {
    if(x.pop() != x.shift())    return false;
  }
  return true;
};
console.log(isPalindrome(465516615));