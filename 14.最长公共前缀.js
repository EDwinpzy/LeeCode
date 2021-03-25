/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs == false || strs.length == 0) return '';
    let ans = '';
    ans = strs.reduce((prev, next) => {
        let i = 0;
        //当字符不为空且相等
        while(prev[i] && next[i] && prev[i] == next[i]) i++;
        return prev.slice(0, i);
    });
    return ans;
};
// @lc code=end