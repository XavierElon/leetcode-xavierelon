function kClosest(points: number[][], k: number): number[][] {
    points.sort((a, b) => {
        return squaredDist(a) - squaredDist(b)
    })

    return points.slice(0, k)
};

const squaredDist = (point: number[]): number => {
    return point[0] * point[0] + point[1] * point[1]
}