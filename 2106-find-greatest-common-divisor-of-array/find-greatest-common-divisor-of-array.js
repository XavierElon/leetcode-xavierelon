/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    return gcd(Math.max(...nums), Math.min(...nums))
};