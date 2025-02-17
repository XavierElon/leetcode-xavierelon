class Solution:
    def areSentencesSimilar(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):  # ✅ Fix 1: Check sentence length
            return False

        # ✅ Fix 2: Use direct lookup instead of DFS (similarity is not transitive)
        graph = defaultdict(set)  # Use a set for quick lookup

        for word1, word2 in similarPairs:
            graph[word1].add(word2)
            graph[word2].add(word1)

        for w1, w2 in zip(sentence1, sentence2):
            if w1 != w2 and w2 not in graph[w1]:  # Direct lookup instead of DFS
                return False

        return True
