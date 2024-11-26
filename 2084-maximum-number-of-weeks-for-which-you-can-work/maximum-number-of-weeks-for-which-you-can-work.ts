function numberOfWeeks(milestones: number[]): number {
    let numberOfWeeks: number = 0
    let maxMilestones: number = Math.max(...milestones)
    
    milestones.sort((a, b) => b - a)
    let sumOthers: number = milestones.reduce((acc, curr) => acc + curr, 0)
    sumOthers -= milestones[0]

    if (maxMilestones > sumOthers + 1) numberOfWeeks = sumOthers * 2 + 1
    else numberOfWeeks = sumOthers += milestones[0]
    
    return numberOfWeeks
};