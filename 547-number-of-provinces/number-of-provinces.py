class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        parent = list(range(n))
        rank = [1] * n

        def find(a):
            if parent[a] != a:
                parent[a] = find(parent[a])
            return parent[a]

        def union(a, b):
            root_a = find(a)
            root_b = find(b)

            if root_a == root_b:
                return

            if rank[root_a] > rank[root_b]:
                parent[root_b] = root_a
            elif rank[root_a] > rank[root_b]:
                parent[root_a] = root_b
            else:
                parent[root_b] = root_a
                rank[root_a] += 1 

        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j] == 1:
                    union(i, j)

        provinces = set()
        for city in range(n):
            provinces.add(find(city))

        return len(provinces)