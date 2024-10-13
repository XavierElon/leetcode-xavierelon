function arrayRankTransform(arr: number[]): number[] {
    if (arr.length === 0) return []

    const sortedUnique = Array.from(new Set([...arr])).sort((a, b) => a - b)

    const rankMap: Map<number, number> = new Map()
    sortedUnique.forEach((num, index) => {
        rankMap.set(num, index + 1)
    })

    const rankedArr: number[] = arr.map(num => rankMap.get(num))

    return rankedArr
};