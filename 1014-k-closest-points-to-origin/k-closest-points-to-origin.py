class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for i, (x, y) in enumerate(points):
            distance = x**2 + y**2
            if len(heap) < k:
                heapq.heappush(heap, (-distance, i))
            else:
                heapq.heappushpop(heap, (-distance, i))

        return [points[i] for (_, i) in heap]