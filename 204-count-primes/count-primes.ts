function countPrimes(n: number): number {
    if (n <= 2) return 0
    let isPrime: boolean[] = new Array(n).fill(true)

    isPrime[0] = false
    isPrime[1] = false

    const sqrtN = Math.floor(Math.sqrt(n))

    for (let i = 2; i <= sqrtN; i++) {
        if (isPrime[i]) {
            for (let multiple = i * i; multiple < n; multiple += i) {
                isPrime[multiple] = false
            }
        }
    }

    let primeCount = 0
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) primeCount++
    }

    return primeCount
};