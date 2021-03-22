/**
 * @param {number} x
 * @return {string}
 */

//投机取巧法
var reverse = function(x){
    let border = 2**31;
    let max = border - 1;
    let min = -border;

    const result = (x>0 ? 1:-1)*String(x).split('').filter(item => item !== '-').reverse().join('');
    return result > max || result < min ? 0 : result;
}
console.log(reverse(-123));

//整数取反
var reverse1 = function(x){
    let res = 0;
    while(x){
        res = res*10 + x%10;
        if (res > Math.pow(2, 31)-1 || res < Math.pow(-2, 31))  return 0;
        x = ~~(x/10);   //向上取整
    }
    return String(res);
}
console.log(reverse1(-123));