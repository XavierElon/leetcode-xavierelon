function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return []

    const merged: number[][] = []
    intervals.sort((a, b) => a[0] - b[0])
    let currentInterval = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i]

        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
        } else {
            merged.push(currentInterval)
            currentInterval = nextInterval
        }
    }
    merged.push(currentInterval)

    return merged
};