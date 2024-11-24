function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (!duration) return 0
  let sumPoison = 0
  for (let i = 0; i < timeSeries.length; i++) {
    const startPoison = timeSeries[i]
    const endPoison = timeSeries[i] + duration - 1
    const nextPoison = timeSeries[i + 1]
    if (!nextPoison) {
      sumPoison += endPoison - startPoison + 1
    } else if (endPoison < nextPoison) {
      sumPoison += endPoison - startPoison + 1
    } else {
      sumPoison += Math.abs(startPoison - nextPoison)
    }
  }
  return sumPoison
}