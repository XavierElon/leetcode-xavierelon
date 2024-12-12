/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    if (event1[0] > event2[0]) {
        [event1, event2] = [event2, event1]
    }
    if(event1[1] < event2[0]) return false;
    return true;
};