/**
 * @param {string} s 
 * @param {string} p 
 * @returns {string} boolean
 * 
 */

let isMatch = (s, p) => {
    //初始化dp数组,须比s,p大一圈用来储存s或p为空的情况
    //dp[i][j]表示 s 的前 i 个和 p 的前 j 个能匹配
    let dp = Array(s.length+1);
    for (let i=0; i<dp.length; i++){
        //初始化包含dp[i][0]=false这种情况，后面无需再赋值
        dp[i] = Array(s.length+1).fill(false);
    }
    dp[0][0] = true;
    //考虑dp[0][j]有两种情况
    for (let j=1; j<p.length+1; j++){
        //j = 1 || p[j−1] != "∗"
        if(j == 1 || p.charAt(j-1)) dp[0][j] = false;
        //j != 1 && p[j−1] = "∗"
        else dp[0][j] = dp[0][j-2];
    }

    //分情况讨论
    for (let i=1; i<=s.length; i++){        //最外围不用
        for(let j=1; j<=p.length; j++){
            if(p.charAt(j) === '.' || p.charAt(j) === s.charAt(i)){
                dp[i][j] = dp[i-1][j-1];
            }
            if(p.charAt(j) == '*'){
                if(p.charAt(j-1) != s.charAt(i)){
                    //考虑边界防止数组溢出
                    if(j == 1) dp[i][j] = false;
                    else dp[i][j] = dp[i][j-2];
                }else if(p.charAt(j-1) == s.charAt(i) || p.charAt(j-1) == '.'){
                    dp[i][j] = dp[i-1][j] || dp[i][j-2];
                }
            }
        }
    }
    return dp[s.length][p.length];
};
console.log(isMatch("qdddddddd","qddd*"));