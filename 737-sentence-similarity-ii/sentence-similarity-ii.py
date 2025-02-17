class Solution:
    def areSentencesSimilarTwo(self, sentence1: List[str],
                            sentence2: List[str],
                            similarPairs: List[List[str]]) -> bool:
        len_s1 = len(sentence1)
        len_s2 = len(sentence2)
        if len_s1 != len_s2:
            return False

        graph = defaultdict(list)
        
        for pair in similarPairs:
            word1 = pair[0]
            word2 = pair[1]
            graph[word1].append(word2)
            graph[word2].append(word1)

        for index in range(len(sentence1)):
            word1 = sentence1[index]
            word2 = sentence2[index]

            if word1 == word2:
                continue
            if not self.dfs(graph, set(), word1, word2):
                return False

        return True

    def dfs(self, graph, seen, currWord, targetWord):
        if targetWord == currWord:
            return True
        if currWord in seen:
            return False
        seen.add(currWord)

        for neighbor in graph[currWord]:
            if self.dfs(graph, seen, neighbor, targetWord):
                return True
            
        return False