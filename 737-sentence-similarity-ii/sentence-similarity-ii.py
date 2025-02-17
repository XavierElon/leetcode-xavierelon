class Solution:
    def areSentencesSimilarTwo(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        len_s1 = len(sentence1)
        len_s2 = len(sentence2)

        if len_s1 != len_s2:
            return False

        graph = defaultdict(list)

        for w1, w2 in similarPairs:
            graph[w1].append(w2)
            graph[w2].append(w1)

        for w1, w2 in zip(sentence1, sentence2):
            q = deque([])
            q.append(w1)

            seen = set()

            while q:
                word = q.popleft()

                if word == w2:
                    break

                for new_word in graph[word]:
                    if new_word not in seen:
                        q.append(new_word)
                        seen.add(new_word)

            else:
                return False

        return True