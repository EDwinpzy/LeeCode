/**
 * 
 * @param {string} s 
 * @returns 
 */

let longestValidParentheses = function(s) {
    let maxLen = 0;
    let dp = new Array(len).fill(0);
    for (let i=1; i<s.length; i++){
        if(s.charAt(i) == ')'){
            if(s.charAt(i-1) == '('){
                //将边界单独列出来
                if(i-2 >= 0){
                    dp[i] = dp[i-2] + 2;
                }else{
                    dp[i] = 2;
                }
            }else if((s.charAt(i-1) == ')')&&(s[i-dp[i-1]-1] == '(')){
                //将边界单独列出来
                if(i-dp[i-1]-2 >= 0){
                    dp[i] = dp[i-1] + dp[i-dp[i-1]-2] + 2;
                }else{
                    dp[i] = dp[i-1] + 2
                }
            }
        }
    }
};


const longestValidParentheses1 = (s) => {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
      if (s[i] == ')') {
        if (s[i - 1] == '(') {
          if (i - 2 >= 0) {
            dp[i] = dp[i - 2] + 2;
          } else {
            dp[i] = 2;
          }
        } else if (s[i - dp[i - 1] - 1] == '(') {
          if (i - dp[i - 1] - 2 >= 0) {
            dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
          } else {
            dp[i] = dp[i - 1] + 2;
          }
        }
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
  };