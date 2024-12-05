/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let c = 0
        for (let i = 1; i < n; i++) {
            if (knows(c, i)) {
                c =i
            }
        }

        for (let i = 0; i < n; i++) {
            if (i != c) {
                if (!knows(i, c) || knows(c, i)) {
                    return -1
                }
            }
        }
        return c
    };
};