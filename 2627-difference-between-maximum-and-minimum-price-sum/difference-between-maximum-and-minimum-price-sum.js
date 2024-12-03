/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function(n, edges, price) {
  if (n === 1) return 0
  const graph = new Array(n).fill(null).map(_=> []);
  const visited = new Array(n).fill(false)

  for(const edge of edges){
    // initialize graph and path values with 0
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  // console.log("graph: ", graph)

  let result = 0;
  visited[0] = true
  dfs(0);

  return result
  
  function dfs(node) {
    if (graph[node].length == 1 && node != 0) {
			return [price[node], 0];
		}
		let i0 = -1, i1 = -1;   // child id of the longest path and path without leaf
		let l0 = 0, l1 = 0;    // the longest path with leaf and path without leaf
		let s0 = 0, s1 = 0;    // the 2nd longest

		for (const child of graph[node]) {
			if (visited[child]) continue;
			visited[child] = true;
			const sub = dfs(child);

			if (sub[0] >= l0) {
				s0 = l0;
				l0 = sub[0];
				i0 = child;
			} else if (sub[0] > s0) {
				s0 = sub[0];
			}

			if (sub[1] >= l1) {
				s1 = l1;
				l1 = sub[1];
				i1 = child;
			} else if (sub[1] > s1) {
				s1 = sub[1];
			}
		}

		if (s0 == 0) {
			// only one child. case: example 2
			result = Math.max(result, Math.max(l0, l1 + price[node]));
		} else {
			const path = i0 !== i1 ? price[node] + l0 + l1 
				: price[node] + Math.max(l0 + s1, s0 + l1);
        result = Math.max(result, path);
		}

		return [l0 + price[node], l1 + price[node]];
  } 
};