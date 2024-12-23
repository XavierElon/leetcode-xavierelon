
var WordDictionary = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie
    for (const char of word) {
        if (!node[char]) node[char] = {}
        node = node[char]
    }
    node.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.searchHelper(word, 0, this.trie);
};

/**
 * Helper function to recursively search for the word in the trie.
 * @param {string} word - The word to search for.
 * @param {number} index - The current index in the word.
 * @param {object} node - The current trie node.
 * @return {boolean} - True if the word is found, otherwise false.
 */
WordDictionary.prototype.searchHelper = function(word, index, node) {
    // If we've reached the end of the word, check if it's a valid word
    if (index === word.length) {
        return node.isWord === true;
    }
    
    const char = word[index];
    
    if (char === '.') {
        // If the current character is '.', check all possible children
        for (let key in node) {
            if (key === 'isWord') continue; // Skip the isWord property
            if (this.searchHelper(word, index + 1, node[key])) {
                return true;
            }
        }
        return false; // No paths matched
    } else {
        // If the current character is not '.', proceed as usual
        if (!node[char]) {
            return false; // Path doesn't exist
        }
        return this.searchHelper(word, index + 1, node[char]);
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */