/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let result = 0;
    const n = s.length;
    const hash = {};
    for (let i = 0; i < n; i++) { // create the hash table contains every letter's index arr.
        const letter = s[i];
        if (hash[letter] === undefined) {
            hash[letter] = [i];
        } else {
            hash[letter].push(i);
        }
    }
	
    for (let letter in hash) {  // iterate every letter
        const arr = hash[letter];  // the arr contains all indexes the letter present in the string
		let lastIdx = arr[0];
		let lastRange = arr[0] + 1;  // left part length
        for (let i = 1; i < arr.length; i++) {
            const currIdx = arr[i];
            const currRange = currIdx - lastIdx; // right part length
            result += lastRange * currRange;  // multiply both side length to get the ways of valid substrings
            lastIdx = currIdx;
            lastRange = currRange;   // set next left part to be current right part
        }
        result += lastRange * (n - lastIdx);  // don't forget the last calcution 
    }
    return result;
};