/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let binaryString = "0";
    while (parseInt(binaryString, 2) < n) {
        binaryString += "1";
    }
    return parseInt(binaryString, 2);
};