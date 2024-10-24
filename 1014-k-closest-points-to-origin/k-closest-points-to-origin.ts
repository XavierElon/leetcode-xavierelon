function kClosest(points: number[][], k: number): number[][] {
    points.sort((a, b) => {
     
        return squaredDistance(a) - squaredDistance(b)
    })   

    return points.slice(0, k)
};

const squaredDistance = (point: number[]): number => {
    return point[0] * point[0] + point[1] * point[1]
}