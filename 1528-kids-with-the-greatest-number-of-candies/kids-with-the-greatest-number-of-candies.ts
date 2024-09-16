function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = []
    const maxCandies: number = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
};