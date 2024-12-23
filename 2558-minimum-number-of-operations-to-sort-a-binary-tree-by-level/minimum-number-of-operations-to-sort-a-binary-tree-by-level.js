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
 * @return {number}
 */
var minimumOperations = function(root) {
     if (!root) return 0;

        const q = [root];
        let operations = 0;

        while (q.length > 0) {
            const size = q.length;
            const level = [];

            for (let i = 0; i < size; i++) {
                const node = q.shift();
                level.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }

            const sort_level = [...level].sort((a, b) => a - b);
            const mp = new Map();
            for (let i = 0; i < level.length; i++) {
                mp.set(level[i], i);
            }

            for (let i = 0; i < level.length; i++) {
                while (level[i] !== sort_level[i]) {
                    operations++;
                    const cur = mp.get(sort_level[i]);
                    mp.set(level[i], cur);
                    [level[i], level[cur]] = [level[cur], level[i]];
                }
            }
        }

        return operations;
};