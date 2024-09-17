function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = []
    const maxCandies: number = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result[i] = true
        } else {
            result[i] = false
        }
    }

    return result
};