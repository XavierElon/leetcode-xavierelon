function arrayRankTransform(arr: number[]): number[] {
    if (arr.length === 0) return []

    const uniqueSorted: number[] = Array.from(new Set([...arr])).sort((a, b) => a - b)

    const rankMap: Map<number, number> = new Map()
    uniqueSorted.forEach((num, index) => rankMap.set(num, index + 1))

    const result: number[] = arr.map(num => rankMap.get(num))

    return result
};