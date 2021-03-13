/**
 * 题目：无重复字符的最长子串
 * 
 * 声明nums1，nums2数据类型为数组
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//滑动窗口解法（自写）
var findMedianSortedArrays1 = function(nums1, nums2) {
    //保证nums1长度小于nums2
    let result
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length
    const n = nums2.length
    switch((m + n) % 2){
        //长度之和为偶数
        case 0:
            while (1){ 
                //变量K为需要找到第K小的数即为中位数
                let k = (m+n)/2;
                //从第i个数开始分割
                let i =Math.floor(k/2);
                if(i !== 0){
                    //删除分割线前的数（也就是肯定小于中位数的数）
                    if(nums1[i-1] <= nums2[i-1])
                    {
                        nums1.splice(0, i);
                    }else
                    {
                        nums2.splice(0, i);
                    }
                    k = k - i;
                }else{
                    //i=0说明只要筛选出剩余数组中最小的两个
                    if (nums1[0] <= nums2[0])
                    {
                        result = (nums1[0] + Math.min(nums1[1], nums2[0]))/2
                    }else if (nums1[0] > nums2[0])
                    {
                        result = (nums2[0] + Math.min(nums2[1], nums1[0]))
                    }
                    break;
                }
            }
            break;
        //长度之和为奇数
        case 1:
            while (1){ 
                //变量K为需要找到第K小的数即为中位数
                let k = (m+n+1)/2;
                //从第i个数开始分割
                let i =Math.floor(k/2);
                if(k !== 1){
                    //删除分割线前的数（也就是肯定小于中位数的数）
                    if(nums1[i-1] <= nums2[i-1])
                    {
                        nums1.splice(0, i);
                    }else
                    {
                        nums2.splice(0, i);
                    }
                    k = k - i;
                }else if(k == 1) {
                    //i=0说明只要筛选出剩余数组中最小的两个
                    result = Math.min(nums1[0], nums2[0])
                    break;
                }
            }
            break;
    }
    return result;
}
console.log("解法一："+findMedianSortedArrays1([1, 2, 3, 6], [2, 4, 7, 9]));

//不合并遍历解法
var findMedianSortedArrays2 = function(nums1, nums2){
    let m = nums1.length;
    let n = nums2.length;
    //两数组总长度
    let len = m + n;
    //right储存每次遍历的结果，left储存上次right的结果
    let left = 0;
    let right = 0;
    //表头指针
    let aStart = 0;
    let bStart = 0;
    //若为len偶数，需要遍历len/2+1次，取遍历第len/2次和len/2+1次的值取平均值；若len奇数，需要遍历Math.floor(len)+1次
    for (let i = 0; i <= len/2; i++){
        //为什么放在这里可举例看看len为偶数时第len/2次和len/2+1次遍历
        left = right;
        //bStart >= 即bStart越界相当于nums2[bStart]=0
        if(aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])){
            right = nums1[aStart++];
        } else {
            right = nums2[bStart++];
        }
    }
    //若len为偶数，取left和right平均值
    if ((len % 2) == 0)
        return (left + right) / 2.0;
    else
        return right;
}
console.log("解法二："+findMedianSortedArrays2([1, 2, 3, 6], [2, 4, 7, 9]));

//二分法求解
var findMedianSortedArrays3 = function(nums1, nums2){
    
    //找到第K小的值
    var findMinNum = function(k){
        let m = nums1.length;
        let n = nums2.length;
        //两数组总长度
        let len = m + n;
        //列表指针
        let left = 0;
        let right = 0;
        while(k>0){
            //指针位置，每次指向len/2向下取整
            let point1 = Math.floor(len/2);
            let point2 = Math.floor(len/2);
            
            //数组长度大于指针位置
            if(m >= point1 && n >= point2){
                //删除指针位置所指数值较小的数组指针前的元素            
                if (nums1[point1-1] > nums2[point2-1]){
                nums2.splice(0, point2);
                k -= point2;
                }else{
                nums1.splice(0, point1);
                k -= point1;
                }
            }
            //数组长度小于指针位置
            else{
            //将指针指向较短数组的末尾
                switch(nums1.length < nums2.length){
                    case 0: 
                        point2 = nums2.length;
                        break;
                    case 1:
                        point1 = nums1.length;
                        break;
                }
                //删除指针位置所指数值较小的数组指针前的元素
                if (nums1[point1-1] > nums2[point2-1]){
                    nums2.splice(0, point2);
                    k -= point2;
                    }else{
                    nums1.splice(0, point1);
                    k -= point1;
                }
            }
            //递归出口，此时须找到第1小的值，即比较两数组首元素，取较小值作为函数输出结果
            if(k == 1){
                return Math.min(nums1[0], nums2[0]);
                break;
            }
        }
    }
    let l = nums1.length+nums2.length
    //若两数组总长为偶数，取第（L/2）小和（L/2+1）小的平均值作为中位数
    if(l%2 == 0)
    {
        return ((findMinNum(l/2)+findMinNum(l/2+1))/2);
    }
}
console.log("解法三："+findMedianSortedArrays3([1, 2, 3, 6], [2, 4, 7, 9]));