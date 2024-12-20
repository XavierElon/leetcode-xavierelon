/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    // Step 1: Gather all unique letters
    const uniqueLetters = new Set();
    for (const word of words) {
        for (const char of word) {
            uniqueLetters.add(char);
        }
    }

    // Initialize graph structures
    const adjList = {};
    const indegree = {};
    for (let ch of uniqueLetters) {
        adjList[ch] = [];
        indegree[ch] = 0;
    }

    // Step 2: Build the graph
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        // Compare characters to find the first difference
        let foundDifference = false;
        const minLength = Math.min(word1.length, word2.length);
        for (let j = 0; j < minLength; j++) {
            const c1 = word1[j];
            const c2 = word2[j];
            if (c1 !== c2) {
                // c1 -> c2
                adjList[c1].push(c2);
                indegree[c2]++;
                foundDifference = true;
                break; // break out after finding the first differing character
            }
        }

        // If no difference found and word1 is longer than word2, ordering is invalid
        if (!foundDifference && word1.length > word2.length) {
            return "";
        }
    }

    // Step 4: Topological Sort (Kahn's Algorithm)
    const queue = [];
    for (let ch of uniqueLetters) {
        if (indegree[ch] === 0) {
            queue.push(ch);
        }
    }

    const result = [];
    while (queue.length > 0) {
        const ch = queue.shift();
        result.push(ch);

        for (const neighbor of adjList[ch]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If the result doesn't contain all unique letters, it means there's a cycle
    if (result.length < uniqueLetters.size) {
        return "";
    }

    return result.join('');
};