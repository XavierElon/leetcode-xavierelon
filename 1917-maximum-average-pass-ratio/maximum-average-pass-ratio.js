/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    // Create priority queue based on profit from adding a student
    const pq = new MinPriorityQueue({
        compare: (a, b) => {
            let profitA = (a.pass + 1)/(a.total + 1) - a.pass/a.total;
            let profitB = (b.pass + 1)/(b.total + 1) - b.pass/b.total;
            return profitB - profitA; // Max heap for profit
        }
    });
    
    // Add all classes to queue
    for (const [pass, total] of classes) {
        pq.enqueue({ pass, total });
    }
    
    // Add extra students to classes that benefit most
    while (extraStudents > 0) {
        const curr = pq.dequeue();
        curr.pass += 1;
        curr.total += 1;
        pq.enqueue(curr);
        extraStudents--;
    }
    
    // Calculate final average
    let sum = 0;
    while (!pq.isEmpty()) {
        const { pass, total } = pq.dequeue();
        sum += pass/total;
    }
    
    return sum/classes.length;
};