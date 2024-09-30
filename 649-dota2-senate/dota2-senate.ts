function predictPartyVictory(senate: string): string {
    const length = senate.length

    const radiant: number[] = []
    const dire: number[] = []

    for (let i = 0; i < length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i)
        } else {
            dire.push(i)
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        const rIndex = radiant.shift()
        const dIndex = dire.shift()

        if (rIndex < dIndex) {
            radiant.push(rIndex + length)
        } else {
            dire.push(dIndex + length)
        }
    }

    return radiant.length > 0 ? 'Radiant' : 'Dire'
};