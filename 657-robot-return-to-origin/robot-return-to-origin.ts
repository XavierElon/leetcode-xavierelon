function judgeCircle(moves: string): boolean {
    let position: number[] = [0, 0]

    for (const move of moves) {
        if (move === 'L') position[0] -= 1
        if (move === 'R') position[0] += 1
        if (move === 'U') position[1] += 1
        if (move === 'D') position[1] -= 1
    }

    return position[0] === 0 && position[1] === 0
};