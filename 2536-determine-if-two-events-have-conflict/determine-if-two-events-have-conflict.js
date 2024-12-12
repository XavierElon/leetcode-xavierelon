/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    if (event1[1] < event2[0]) return false
    if (event1[1] >= event2[0] && event1[0] <= event2[1]) return true
    return false
};