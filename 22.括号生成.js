/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function go(cur, left, right){
        if(cur.length === 2*n){
            res.push(cur);
            return;
        }
        if(left < n){
            go(cur+'(', left+1, right);
        }
        if(right < left){
            go(cur+')', left, right+1);
        }
    }
    //递归入口
    go('', 0, 0);
    return res;
};
// @lc code=end

