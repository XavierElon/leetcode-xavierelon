function kClosest(points: number[][], k: number): number[][] {
    points.sort((a, b) => {
        const distA = squaredDistance(a)
        const distB = squaredDistance(b)
        return distA - distB
    })   

    return points.slice(0, k)
};

const squaredDistance = (point: number[]): number => {
    return point[0] * point[0] + point[1] * point[1]
}