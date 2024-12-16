/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
     
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    if (n === 1) return x

    let half = myPow(x * x, Math.floor(n/2))

    if (n % 2 === 0) {
        return half
    } else {
        return x * half
    }
};