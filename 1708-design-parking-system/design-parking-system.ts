class ParkingSystem {
    private parkingSlots: number[]

    constructor(big: number, medium: number, small: number) {
        this.parkingSlots = [big, medium, small]
    }

    addCar(carType: number): boolean {
        const index: number = carType - 1

        if (index < 0 || index >= this.parkingSlots.length) {
            throw new Error('Invalid Car Type')
        }

        if (this.parkingSlots[index] > 0) {
            this.parkingSlots[index]--
            return true
        }   
        return false
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */