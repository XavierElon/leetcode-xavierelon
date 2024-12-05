/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    // loop over each word in the words array
    // for a word to be a possible substring
    // of the relative order permutations of s
    // each letter in the word must also appear
    // sequentially, though not adjacently
    
    let matches = 0;
    
    for (const word of words) {
        let lastIndex = -1;
        let match = 0;
        
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            // we can search for the position of the
            // current char using the lastIndex observed
            // as our starting point, which JS very
            // conveniently provides as a parameter of indexOf
            const currentIndex = s.indexOf(char, lastIndex + 1);

            // if the index of current char is greater than the last
            // index we observed, then the sequence persists and
            // we can continue
            if (currentIndex > lastIndex) {
                match++;
                lastIndex = currentIndex;
            } else {
                // otherwise, no such instance of the current char
                // exists after the last chars index
                break;
            }
        }
        
        // lastly, we know a valid subsequent is found if the
        // number of local matches found is equal to the length
        // of our word
        if (match == word.length) {
            matches++;
        }
    }
    
    return matches;
};