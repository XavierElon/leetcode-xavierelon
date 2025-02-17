class Solution:
    def areSentencesSimilarTwo(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):
            return False

        parent = {}

        def find(p):
            if p not in parent:
                parent[p] = p
            if p != parent[p]:
                parent[p] = find(parent[p])
            return parent[p]

        def union(p, q):
            root1 = find(p)
            root2 = find(q)

            if root1 != root2:
                parent[root1] = root2

        for p, q in similarPairs:
            union(p, q)

        return all(find(a) == find(b) for a, b in zip(sentence1, sentence2))