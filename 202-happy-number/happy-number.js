/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n
    let fast = n

    while (true) {
        slow = getNextNum(slow)
        fast = getNextNum(getNextNum(fast))

        if (fast === 1) {
            return true
        } else if (fast === slow) {
            return false
        }
    }
};

function getNextNum(num) {
    let nextNum = 0
    while (num > 0) {
        let digit = num % 10
        num = Math.floor(num / 10)
        nextNum += digit * digit
    }

    return nextNum
}