/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const maxHeap = new MaxPriorityQueue()
    for (let i = 0; i < score.length; i++) {
        maxHeap.enqueue(i, score[i])
    }

    const answer = []
    for (let i = 0; i < score.length; i++) {
        let rank
        let item = maxHeap.dequeue().element
        console.log(item)

        switch(i) {
            case 0:
                rank = "Gold Medal"
                break
            case 1:
                rank = "Silver Medal"
                break
            case 2:
                rank = "Bronze Medal"
                break
            default:
                rank = (i+1).toString()
        }
        answer[item] = rank
    }
    return answer
};