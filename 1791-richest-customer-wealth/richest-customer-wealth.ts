function maximumWealth(accounts: number[][]): number {
    let maxSum: number = 0

    for (let i = 0; i < accounts.length; i++) {
        const n: number = accounts[i].length
        let sum: number = 0
        for (let j = 0; j < n; j++) {
            sum += accounts[i][j]
        }
        if (sum > maxSum) {
            maxSum = sum
        }
    }

    return maxSum
}; 