class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for i, (x, y) in enumerate(points):
            dist = x**2 + y**2

            if len(heap) < k:
                heapq.heappush(heap, (-dist, i))
            elif -dist > heap[0][0]:
                heapq.heappop(heap)
                heapq.heappush(heap, (-dist, i))

        return [points[i] for (_, i) in heap]