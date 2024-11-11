function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1])
    let remainingBoxes: number = truckSize
    let totalUnits: number = 0

    for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
        const minBoxes: number = Math.min(numberOfBoxes, remainingBoxes) 
        totalUnits += minBoxes * numberOfUnitsPerBox
        remainingBoxes -= minBoxes
        if (remainingBoxes === 0) break
    }

    return totalUnits
};