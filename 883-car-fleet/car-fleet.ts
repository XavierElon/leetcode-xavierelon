interface Car {
    pos: number
    speed: number
}

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars: Car[] = position.map((pos, index) => ({ pos, speed: speed[index]}))

    cars.sort((a, b) => b.pos - a.pos)

    const stack: number[] = []

    for (const car of cars) {
        const time = (target - car.pos) / car.speed

        if (stack.length === 0 || time > stack[stack.length - 1]) stack.push(time)
    }

    return stack.length
};