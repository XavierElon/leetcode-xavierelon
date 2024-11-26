function numberOfWeeks(milestones: number[]): number {
    let maxNumberOfWeeks = 0;
    let maxItem = -Infinity;
    milestones.forEach((milestone) => {
        maxNumberOfWeeks += milestone
        maxItem = Math.max(maxItem, milestone)
    });
    return Math.min(maxNumberOfWeeks, (maxNumberOfWeeks - maxItem) * 2 + 1)
};