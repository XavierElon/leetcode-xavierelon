from collections import defaultdict, deque
from typing import List

class Solution:
    def maxAmount(self, ini: str, p1: List[List[str]], r1: List[float], p2: List[List[str]], r2: List[float]) -> float:
        g1 = defaultdict(list)
        g2 = defaultdict(list)
        
        for i in range(len(p1)):
            a, b = p1[i]
            rate = r1[i]
            g1[a].append((b, rate))
            g1[b].append((a, 1 / rate))
        
        for i in range(len(p2)):
            a, b = p2[i]
            rate = r2[i]
            g2[a].append((b, rate))
            g2[b].append((a, 1 / rate))
        
        def bfs(graph, start, amt):
            max_amt = defaultdict(float)
            max_amt[start] = amt
            q = deque([(start, amt)])
            
            while q:
                curr, amt = q.popleft()
                for nxt, rate in graph[curr]:
                    new_amt = amt * rate
                    if new_amt > max_amt[nxt]:
                        max_amt[nxt] = new_amt
                        q.append((nxt, new_amt))
            
            return max_amt
        
        res1 = bfs(g1, ini, 1.0)
        res2 = 0.0
        
        for curr, amt in res1.items():
            res2 = max(res2, bfs(g2, curr, amt)[ini])
        
        return res2