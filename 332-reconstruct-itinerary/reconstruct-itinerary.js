/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = new Map()
    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, [])
        graph.get(from).push(to)
    }

    for (const [departures, destinations] of graph) {
        destinations.sort()
    }

    const result = []

    function dfs(airport) {
        const destinations = (graph.get(airport) || [])

        while (destinations.length !== 0) {
            const next = destinations.shift()
            dfs(next)
        }

        result.unshift(airport)
    }

    dfs('JFK')
    return result
};