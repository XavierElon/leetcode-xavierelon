class Solution:
    def areSentencesSimilarTwo(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        parent = {}
        
        def find(p):
            if p not in parent:
                parent[p] = p
            while p != parent[p]:
                p = parent[p]
            return p    
        
        def union(p, q):
            i = find(p)        
            j = find(q)
            if i != j:
                parent[i] = j
                
        for p, q in similarPairs:
            union(p, q)
            
        return all(find(a) == find(b) for a, b in zip_longest(sentence1, sentence2))