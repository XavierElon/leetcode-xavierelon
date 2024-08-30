function mySqrt(x: number): number {
    if (x === 0) return 0

    let left: number = 1
    let right: number = x

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        const midSquared = mid * mid

        if (midSquared === x) {
            return mid
        } else if (midSquared < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
};