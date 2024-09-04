function minimumDeletions(s: string): number {
    let bCount: number = 0
    let deletionCount: number = 0

    for (let char of s) {
        if (char === 'b') {
            bCount++

        } else {
            deletionCount = Math.min(deletionCount + 1, bCount)
        }
    }
    return deletionCount
};