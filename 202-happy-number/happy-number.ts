function isHappy(n: number): boolean {
    const visited: Set<number> = new Set()

    if (n <= 0) return false

    while (n != 1) {
        let current = n
        let sum = 0

        while(current != 0) {
            sum += (current % 10) * (current % 10)
            current = Math.floor(current / 10)
        }

        if (visited.has(sum)) return false

        visited.add(sum)
        n = sum
    }
    return true
};