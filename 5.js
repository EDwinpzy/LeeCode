/*
第一步：dp[i][j]表示子串s[i.....j]是否为回文子串,dp里面全是0或1
第二步：状态转移方程为  dp[i][j]=(s[i]==s[j]) && dp[i+1][j-1] （即类似于中心扩展）；考虑边界条件，子串长度(j-1)-(i+1)+1>0，此时肯定为回文字符串
第三步：考虑初始化，当单个字符即i=j时肯定时回文子串。
*/

//声明s为字符串类型
/**
 * @param {string} s 
 * @returns {string}
 */

//中心扩展(动态规划)
var longestPalindrome2 = function(s) {
    //回文子串
    let ans = '';
    let n = s.length;
    //定义dp数组
    let dp = Array.from(new Array(n), () => new Array().fill(0));
    //i从最大值开始遍历，j从最小值开始
    for (let i=n-1; i>=0; i--){
        for(let j=i; j<=n-1; j++){
            //状态转移方程，j-i<2即长度为0或1的子串扩展后加上第一个条件肯定为回文字符串
            dp[i][j] = (s[i] === s[j]) && (j-i<2 || dp[i+1][j-1]);
            //判断为回文串且长度最长
            if(dp[i][j] && j-i+1>ans.length){
                //截取从i开始，长度为j+1的最长回文串
                ans = s.substring(i,j+1);
            }
        }
    }
    return ans;
}