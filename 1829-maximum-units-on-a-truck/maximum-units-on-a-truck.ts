function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1])
    let remainingTruckSize: number = truckSize
    let totalUnits: number = 0

    for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
        if (remainingTruckSize === 0) {
            break
        }
        const boxesToLoad = Math.min(numberOfBoxes, remainingTruckSize)

        totalUnits += boxesToLoad * numberOfUnitsPerBox
        remainingTruckSize -= boxesToLoad
    }

    return totalUnits
};