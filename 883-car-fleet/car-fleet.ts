interface Car {
    speed: number
    position: number
}

function carFleet(target: number, position: number[], speed: number[]): number {
    const stack: number[] = []
    const cars: Car[] = position.map((pos, index) => ({ position: pos, speed: speed[index] }))

    cars.sort((a, b) => b.position - a.position)

    for (const car of cars) {
        const time: number = (target - car.position) / car.speed

        if (stack.length === 0 || time > stack[stack.length-1]) stack.push(time)
    }

    return stack.length
};