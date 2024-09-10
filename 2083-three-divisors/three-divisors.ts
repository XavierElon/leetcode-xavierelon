function isThree(n: number): boolean {
    if (n <= 2) return false
    let result: number[] = new Array<number>

    for (let i = 2; i < n; i++) {
        if (n % i === 0) result.push(i)
    }

    return result.length === 1
};