function countPairs(deliciousness: number[]): number {
        const MOD = 1e9 + 7;
    const maxSum = 1 << 22; // 2^22 is the maximum possible sum (2^20 + 2^20)
    const countMap = new Map<number, number>();
    let result = 0;

    for (const d of deliciousness) {
        for (let sum = 1; sum <= maxSum; sum <<= 1) {
            const complement = sum - d;
            if (countMap.has(complement)) {
                result = (result + countMap.get(complement)!) % MOD;
            }
        }
        countMap.set(d, (countMap.get(d) || 0) + 1);
    }

    return result;
};