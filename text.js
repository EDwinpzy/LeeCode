/**
 * 题目：无重复字符的最长子串
 * 
 * 声明nums1，nums2数据类型为数组
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//二分法求解
var findMedianSortedArrays3 = function(nums1, nums2){
    
    let m, n, len, point1, point2
    let l = nums1.length+nums2.length
    //找到第K小的值
    var findMinNum = function(k){
        while(k>0){

console.log("k:"+k);

            m = nums1.length;
            n = nums2.length;
            //两数组总长度
            len = m + n;
            //指针位置，每次指向len/2向下取整
            point1 = Math.floor(k/2);
            point2 = Math.floor(k/2);

console.log("point1:"+point1);
console.log("point2:"+point2);

            //数组长度大于指针位置
            if(m >= point1 && n >= point2){
                //删除指针位置所指数值较小的数组指针前的元素            
                if (nums1[point1-1] > nums2[point2-1]){
                nums2.splice(0, point2);

console.log("nums2:"+nums2);

                k = k - point2;
                }else{
                nums1.splice(0, point1);
                k = k - point1;
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
                    k = k - point2;
                    }else{
                    nums1.splice(0, point1);
                    k = k - point1;
                }
            }
            //递归出口，此时须找到第1小的值，即比较两数组首元素，取较小值作为函数输出结果
            if(k == 1){
                return Math.min(nums1[0], nums2[0]);
                break;
            }
        }
    }
    //若两数组总长为偶数，取第（L/2）小和（L/2+1）小的平均值作为中位数
    if(l%2 == 0)
    {
        return ((findMinNum(l/2)+findMinNum(l/2+1))/2);
    }else{
        return (findMinNum((l+1)/2));
    }
}
console.log("解法三："+findMedianSortedArrays3([1, 2, 3, 6], [2, 4, 7, 9]));