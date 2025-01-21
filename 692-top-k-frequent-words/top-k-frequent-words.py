class Pair:
    def __init__(self, str, freq):
        self.str = str
        self.freq = freq

    def __lt__(self, other):
        if self.freq == other.freq:
            return self.str > other.str
        return self.freq < other.freq

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        freqs = Counter(words)
        min_heap = []
        for str, freq in freqs.items():
            heapq.heappush(min_heap, Pair(str, freq))

            if len(min_heap) > k:
                heapq.heappop(min_heap)
        
        res = [heapq.heappop(min_heap).str for _ in range(k)]
        res.reverse()
        return res