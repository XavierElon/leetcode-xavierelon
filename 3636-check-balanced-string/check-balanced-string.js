/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = num => !num.split('').reduce((sum, n, i) => i % 2 ? sum + +n : sum - +n, 0);
