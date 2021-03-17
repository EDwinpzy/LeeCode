let isMatch = function (s, p) {
    let dp = Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false)
    }
    dp[0][0] = true;
    for (let i = 1; i < p.length; i++) {
        if (p.charAt(i) === "*") {
            dp[0][i + 1] = dp[0][i - 1]
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p.charAt(j) === '.') {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === s.charAt(i)) {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                } else {
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1])
                }
            }
        }
    }
    console.log(typeof(dp[0][0]))
    return dp[s.length][p.length]
};
isMatch("qdasdds","asd*asd.a");




 // 通过递推公式开始填充矩阵
 for(int i = 1; i <= m; i++){
    for(int j = 1; j <= n; j++){
        if(p[j - 1] != '*'){
            dp[i][j] = (s[i - 1] == p[j - 1] || p[j - 1] == '.') && dp[i - 1][j - 1];
        }
        else{
            if(s[i - 1] == p[j - 2] || p[j - 2] == '.'){
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                if(j > 1) dp[i][j] = dp[i][j] || dp[i][j - 2];
            }
            else{
                dp[i][j] = dp[i][j - 2];
            }
        }
    }
}