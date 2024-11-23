/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} o
 * @return {number}
 */
var cross = (a, b, o) => {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var convexHull = (trees) => {
    trees.sort((a, b) => {
      return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
   });

   let lower = [];
   for (let point of trees) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) > 0) {
         lower.pop();
      }
      lower.push(point);
   }

   let upper = [];
   for (let point of trees.reverse()) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) > 0) {
         upper.pop();
      }
      upper.push(point);
   }

   return lower.concat(upper);
}

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    if (trees.length == 1)
        return trees;
    
    return [... new Set(convexHull(trees))];
};