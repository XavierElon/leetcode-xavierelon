/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().split('').filter(char => 
        (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
    ).join('');
    

    let left = 0
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false

        left++
        right--
    }

    return true
};