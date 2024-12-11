/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    // Create min heap - combine soldiers count and index into single priority number
    const minHeap = new MinPriorityQueue();
    
    // Process each row
    for (let i = 0; i < mat.length; i++) {
        // Count soldiers in current row
        const soldiers = mat[i].reduce((sum, val) => sum + val, 0);
        
        // Create priority that considers both soldiers and index
        // Multiply soldiers by matrix length to ensure soldier count takes precedence
        const priority = soldiers * mat.length + i;
        
        // Add row index to heap
        minHeap.enqueue(i, priority);
    }
    
    // Get k weakest rows
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(minHeap.dequeue().element);
    }
    
    return result;
};