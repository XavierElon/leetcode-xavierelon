/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) { 
    const check = (p, q) => {
        if (p === null && q === null) return true
        if (p === null || q === null) return false
        if (p.val !== q.val) return false
        return true
    }
    

    const queue1 = [p]
    console.log(queue1)
    const queue2 = [q]
    console.log(queue2)

    while (queue1.length || queue2.length) {
        const p1 = queue1.shift()
        const q1 = queue2.shift()

        if (!check(p1, q1)) return false
        if (p1) {
            queue1.push(p1.left)
            queue1.push(p1.right)
            queue2.push(q1.left)
            queue2.push(q1.right)
        }
    }
    return true
};