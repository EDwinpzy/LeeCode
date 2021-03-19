/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let n = height.length;
    if (n == 0) return 0;
    let ans = 0;
    let leftMax, rightMax = new Array(n);
    leftMax[0] = height[0];
    for (let i=0; i<n; i++){
        leftMax[i] = Math.max(leftMin[i-1], height[i]);
    }
    rightMax[n-1] = height[n-1];
    for (let i=n-2; i>=0; i--){
        rightMax[i] = Math.max(rightMax[i-1], height[i]);
    }
    for (let i=0; i<n; i++){
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
}