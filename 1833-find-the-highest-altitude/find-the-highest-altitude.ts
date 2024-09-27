function largestAltitude(gain: number[]): number {
    let currentAltitude: number = 0
    let maxAltitude: number = 0 

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]

        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude
        }
    }

    return maxAltitude
};