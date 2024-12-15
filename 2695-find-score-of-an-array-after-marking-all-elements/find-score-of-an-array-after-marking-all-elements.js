/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const n = nums.length;
    let score = 0;
    let heap = [];
    for (let i = 0; i < n; i++) {
        heap.push({ value: nums[i], index: i });
    }
    heap.sort(function(a, b) {
        return a.value - b.value;
    });
    let marked = new Array(n).fill(false);
    for (let i = 0; i < heap.length; i++) {
        let value = heap[i].value;
        let index = heap[i].index;
        if (!marked[index]) {
            score += value;
            marked[index] = true;
            if (index > 0) marked[index - 1] = true;
            if (index < n - 1) marked[index + 1] = true;
        }
    }
    return score;
};