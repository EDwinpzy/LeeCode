/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const m = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ]);
    let stk = [];
    let arr = s.split('');
    for( ch of arr){
        if(ch === '(' || ch === '{' || ch === '['){
            stk.push(ch);
        }else{
            //stk.length == 0说明第一个字符为右括号
            //若为括号对则在if条件中已经将这对括号删除
            if(stk.length == 0 || m.get(ch) !== stk.pop()){
                return false;
            }
        }
    }
    return !stk.length;
};
// @lc code=end

