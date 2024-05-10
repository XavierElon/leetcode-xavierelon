
var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for (let c of word) {
        if (!node[c]) node[c] = {}
        node = node[c]
    }
    node.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word)
    return node !== null ? node.isWord ===true : false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix)
    return node != null
};

Trie.prototype.searchNode = function(word) {
    let node = this.root
    for (let char of word) {
        if (node[char]) {
            node = node[char]
        } else {
            return null
        }
    }
    return node
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */