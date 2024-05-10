class Trie {
    constructor() {
        this.root = {};
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word - The word to insert.
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isWord = true;
    }

    /**
     * Searches the trie for a particular word.
     * @param {string} word - The word to search for.
     * @returns {boolean} - True if the word is in the trie, false otherwise.
     */
    search(word) {
        const node = this.getNode(word);
        return node !== null && node.isWord === true;
    }

    /**
     * Checks if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix - The prefix to check.
     * @returns {boolean} - True if any word starts with the prefix, false otherwise.
     */
    startsWith(prefix) {
        return this.getNode(prefix) !== null;
    }

    /**
     * Retrieves the node corresponding to the end of the given string.
     * @param {string} word - The string to traverse the trie with.
     * @returns {Object|null} - The node if found, null otherwise.
     */
    getNode(word) {
        let node = this.root;
        for (const char of word) {
            if (node[char]) {
                node = node[char];
            } else {
                return null;
            }
        }
        return node;
    }
}

// Example usage
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello"));  // true
console.log(trie.startsWith("hell"));  // true