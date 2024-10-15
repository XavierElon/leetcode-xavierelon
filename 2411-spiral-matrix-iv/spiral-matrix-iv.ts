/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const matrix: number[][] = Array.from({ length: m}, () => Array(n).fill(-1))
    let left: number = 0
    let right: number = n - 1
    let top: number = 0
    let bottom: number = m - 1
    let current: ListNode = head

    while (top <= bottom && left <= right && current !== null) {
        // Right
        for (let i = left; i <= right && current; i++) {
            matrix[top][i] = current.val
            current = current.next
        }
        top++

        // Down
        for (let i = top; i <= bottom && current; i++) {
            matrix[i][right] = current.val
            current = current.next
        }
        right--

        // Left
        if (bottom >= top) {
            for (let i = right; i >= left && current; i--) {
                matrix[bottom][i] = current.val
                current = current.next
            }
            bottom--
        }

        // Up
        if (left <= right) {
            for (let i = bottom; i >= top && current; i--) {
                matrix[i][left] = current.val
                current = current.next
            }
            left++
        }
    }
    return matrix
};