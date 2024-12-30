/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
     if (!root) return [];

  const map = new Map();

  function dfs(node, column, row) {
    if (!node) return;

    if (!map.has(column)) map.set(column, []);
    // Store both row and value to sort later
    map.get(column).push({ row, val: node.val });

    // Traverse left and right subtrees
    dfs(node.left, column - 1, row + 1);
    dfs(node.right, column + 1, row + 1);
  }

  dfs(root, 0, 0);

  const sortedColumns = Array.from(map.keys()).sort((a, b) => a - b)
  console.log(sortedColumns)
  const levels = [];

  for (const col of sortedColumns) {
    // Sort nodes in each column by their row index
    const sortedNodes = map.get(col).sort((a, b) => a.row - b.row).map(item => item.val);
    levels.push(sortedNodes);
  }

  return levels;

};