class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_count = Counter(nums)
        res = []
        n = len(nums)
        buckets = [[] for _ in range(n + 1)]

        for key, freq in freq_count.items():
            buckets[freq].append(key)

        for i in range(n, -1, -1):
            for num in buckets[i]:
                res.append(num)
                if len(res) == k:
                    return res