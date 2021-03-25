/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //将整数转换成数组
  x = String(x).split("");
  while (x.length > 1) {
    if (x.pop() != x.shift()) return false;
  }
  return true;
};
// @lc code=end
