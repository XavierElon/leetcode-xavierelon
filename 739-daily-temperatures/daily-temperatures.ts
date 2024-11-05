function dailyTemperatures(temperatures: number[]): number[] {
    const n: number = temperatures.length
    const answer: number[] = new Array(n).fill(0)
    const stack: number[] = []

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const prevIndex: number = stack.pop()
            answer[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }

    return answer
};