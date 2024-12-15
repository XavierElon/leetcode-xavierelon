/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const n = nums.length;
    let score = 0;
    // Create queue with custom comparator for both value and index
    const pq = new MinPriorityQueue({
        compare: (a, b) => {
            if (a.value !== b.value) {
                return a.value - b.value;
            }
            return a.index - b.index;
        }
    });
    
    // Add all elements to queue
    for (let i = 0; i < n; i++) {
        pq.enqueue({ value: nums[i], index: i });
    }
    
    let marked = new Array(n).fill(false);
    
    // Process queue until empty
    while (!pq.isEmpty()) {
        const { value, index } = pq.dequeue();
        if (!marked[index]) {
            score += value;
            marked[index] = true;
            if (index > 0) marked[index - 1] = true;
            if (index < n - 1) marked[index + 1] = true;
        }
    }
    
    return score;
};