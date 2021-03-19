/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows){
    if (numRows == 1)   return s;

    let len = Math.min(s.length, numRows);
    let rows = new Array(len).fill("");
    let location = 0;
    let down = false;

    for(let item of s){
        //数组里每个元素储存一个小的字符串而不是每个元素储存一个字符
        rows[location] += item;
        //在数组边界的时候掉头
        if(location == 0 || location == numRows-1)  down = !down;
        location = location + (down ?  1: -1);
    }

    let ans = '';
    for(let item of rows)   ans += item;
    return ans;
}
console.log(convert('asdassadsa',3))
