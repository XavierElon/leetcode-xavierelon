function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = []

    for (const asteroid of asteroids) {
        let collision = false

        while (asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top: number = stack[stack.length - 1]
            if (top < -asteroid) {
                stack.pop()
                continue
            } else if (top === -asteroid) {
                stack.pop()
                collision = true
                break
            } else {
                collision = true
                break
            }
        }
        if (!collision) {
            stack.push(asteroid)
        }
    }

    return stack
};