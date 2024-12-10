/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
    if (!words || words.length === 0) return []

    const freq = getFrequencies(words)
    const maxHeap = new Heap(compareMaxFunc)
    
    for (const word of freq.keys()) {
        const tuple = [word, freq.get(word)]
        maxHeap.insert(tuple)
    }

    const ans = new Array()
    for (let i = 0; i < k && maxHeap.size > 0; i++) {
        ans.push(maxHeap.extract()[0])
    }

    return ans
};

const compareMaxFunc = (a, b) => {
    if(a[1] !== b[1]) {
        // Sort by frequency in descending order
        return b[1] - a[1];
    }
    // If frequencies are equal, sort lexicographically in ascending order
    return a[0].localeCompare(b[0]);
};

const getFrequencies = (words) => {
    const freq = new Map()
    words.forEach(word => {
        if (!freq.has(word)) freq.set(word, 0)
        freq.set(word, freq.get(word) + 1)
    })
    return freq
}

class Heap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc
        this.heap = new Array()
    }

    insert(val) {
        this.heap.push(val)
        this.heap.sort(this.compareFunc)
    }

    extract() {
        return this.heap.shift()
    }

    peek() {
        return this.heap[0]
    }

    get size() {
        return this.heap.length
    }
}