/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };
    let ans = 0;
    for(let i = 0; i < s.length;){
        //遍历每两个字符看是否有匹配的
        if(i + 1 < s.length && map[s.substring(i, i+2)]){
            ans += map[s.substring(i, i+2)];
            i += 2;
        }else{
            ans += map[s.substring(i, i+1)];
            i += 1; 
        }
    }
    return ans;
};
// @lc code=end

