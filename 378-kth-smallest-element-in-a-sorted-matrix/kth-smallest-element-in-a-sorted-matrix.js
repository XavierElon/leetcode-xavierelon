/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n-1][n-1];

    // Function to count how many numbers are <= mid
    function countLessEqual(mid) {
        let count = 0;
        let row = n - 1;
        let col = 0;
        
        while (row >= 0 && col < n) {
            if (matrix[row][col] <= mid) {
                // All elements in this column up to 'row' are <= mid
                count += (row + 1);
                col++;  // Move to the next column
            } else {
                row--;  // This element is too large, move up to smaller elements
            }
        }
        
        return count;
    }

    // Binary search on the value
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const count = countLessEqual(mid);

        if (count < k) {
            // Not enough elements <= mid, we need a larger number
            low = mid + 1;
        } else {
            // Count is sufficient or more than k, potentially mid is too large
            high = mid;
        }
    }

    // When low meets high, it is the k-th smallest value
    return low;
};