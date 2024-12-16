/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // Create a Map to store the results of subproblems.
  // The keys will be strings like "m,n".
  const memo = new Map();

  function recurse(rows, cols) {
    // Base cases:
    // If either rows or cols is 1, there's only one way to get to that cell 
    // (straight line of moves).
    if (rows === 1 || cols === 1) {
      return 1;
    }

    // Create a unique key for this subproblem
    const key = rows + "," + cols;

    // If we've already computed this state, return it from memo
    if (memo.has(key)) {
      return memo.get(key);
    }

    // Otherwise, compute the value recursively
    // The number of unique paths to (rows, cols) is the sum of:
    // - Unique paths to (rows-1, cols) [coming from above]
    // - Unique paths to (rows, cols-1) [coming from the left]
    const result = recurse(rows - 1, cols) + recurse(rows, cols - 1);

    // Store the result in the map for future use
    memo.set(key, result);

    return result;
  }

  return recurse(m, n);
};
