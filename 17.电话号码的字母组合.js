/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == "") return [];
  let res = [];
  //新建Map对象类型
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  //当前字符串为curStr，当前指针为i
  let dfs = (curStr, i) => {
    //边界
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    let letter = map[digits[i]];
    //遍历当前数字对应的字母
    for (let item of letter) {
      //递归,将当前选定的字符串加上，指针右移
      dfs(curStr + item, i + 1);
    }
  };
  //递归入口
  dfs("", 0);
  return res;
};
// @lc code=end
