/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
const State = {
  NotVisited: -3,
  Visited: -2,
  NotInCycle: -1,
}

var getMaxFunctionValue = function(receiver, k) {
  const inCycle = receiver.map(() => State.NotVisited);
  const cycles = receiver.map(() => []);
  const cyclePositions = receiver.map(() => -1);

  const findCycle = (thrower) => {
    // we've already figured out if this node is in a cycle
    // so whoever called this definitely isn't
    if (inCycle[thrower] > State.Visited) return State.NotInCycle;
    // we found the root of the cycle, return it
    if (inCycle[thrower] === State.Visited) return thrower;
    inCycle[thrower] = State.Visited;

    inCycle[thrower] = findCycle(receiver[thrower]);

    if (inCycle[thrower] === State.NotInCycle) return State.NotInCycle;

    // we're in a cycle
    const cycle = cycles[inCycle[thrower]];
    cycle.push(thrower);

    if (inCycle[thrower] === thrower) {
      cycle.reverse();
      for (let i = 0; i < cycle.length; i += 1) {
        cyclePositions[cycle[i]] = i;
        cycle[i] += (cycle[i - 1] ?? 0);
      }
      // this node is the cycle root, so everyone else
      // from here on out is not
      return State.NotInCycle;
    }
    
    return inCycle[thrower];
  }

  for (let i = 0; i < receiver.length; i += 1) findCycle(i);

  const adjList = receiver.reduce((adjList, to, from) => {
    if (inCycle[from] < 0) adjList[to].push(from);
    return adjList;
  }, receiver.map(() => []))

  // i'm sure there's a simpler way to do this, oh well
  const calc = (cycle, start, count) => {
    const fullCycles = cycle.at(-1) * Math.floor(count / cycle.length);
    const extra = count % cycle.length;
    const untilEnd = Math.min(extra, cycle.length - start)
    const extraAfter = untilEnd > 0 ? cycle[start + untilEnd - 1] - (cycle[start - 1] ?? 0) : 0;
    const fromBeginning = extra - untilEnd;
    const extraBefore = fromBeginning > 0 ? cycle[fromBeginning - 1] : 0;

    return fullCycles + extraAfter + extraBefore;
  }

  let maxScore = 0;

  const getMaxScore = (thrower, scores, cycle, start) => {
    scores.push(scores.at(-1) + thrower || thrower);
    const count = k + 1 - scores.length;
    const score = count <= 0
      ? scores.at(-1) - (scores.at(-1 - k - 1) ?? 0)
      : scores.at(-1) + calc(cycle, start, count);
    maxScore = Math.max(maxScore, score);
    adjList[thrower].forEach((next) => getMaxScore(next, scores, cycle, start))
    scores.pop();
  }

  for (let thrower = 0; thrower < receiver.length; thrower += 1) {
    if (inCycle[thrower] < 0) continue;
    const cycle = cycles[inCycle[thrower]];
    const start = cyclePositions[thrower];
    maxScore = Math.max(maxScore, calc(cycle, start, k + 1));
    adjList[thrower].forEach((next) => getMaxScore(next, [], cycle, start));
  }

  return maxScore;
};