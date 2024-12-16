/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   if (n === 1) return true
   else if (n <= 0) return false

   if (n % 2 !== 0) return false
   else return isPowerOfTwo(Math.floor(n/2))
};