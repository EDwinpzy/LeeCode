/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    if (nums == null || nums.length < 3){
        return ans;
    }
    //按升序排序
    nums.sort((a, b) => a - b);
    for(let i=0; i<nums.length; i++){
        //若当前值大于0，则后面三数之后一定大于0
        if(nums[i] > 0) break;
        //去重
        if(i > 0 && nums[i] == nums[i-1])   continue;
        //左右指针
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum == 0){
                ans.push([nums[i], nums[l], nums[r]]);
                //去重
                while(nums[l] == nums[l+1]) l++;
                while(nums[r] == nums[r+1]) r--;
                l++;
                r--;
            }else if(sum < 0){
                l++;
            }else if(sum > 0){
                r--;
            }
        }
    }
    return ans;
};
// @lc code=end
