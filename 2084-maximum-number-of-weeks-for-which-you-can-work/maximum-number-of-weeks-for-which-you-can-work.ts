function numberOfWeeks(milestones: number[]): number {
    let maxNumberOfWeeks = 0
    let maxItem = -Infinity
    let totalSum = 0

    milestones.forEach((milestone) => {
        totalSum += milestone
        maxItem = Math.max(maxItem, milestone)
    }
    )
    return maxItem > totalSum - maxItem + 1 ? (totalSum - maxItem) * 2 + 1 : totalSum
};