class Solution:
    def minSideJumps(self, obstacles: List[int]) -> int:
        n = len(obstacles)
        memo = dict()
        def check(point, lane):
            if point == n-1:
                return 0
            if obstacles[point+1] == 0 or obstacles[point+1] != lane:
                return check(point+1, lane)

            if point in memo:
                return memo[point]
            
            res = n
            for temp_l in range(1,4):
                if temp_l != lane and obstacles[point] != temp_l:
                    res = min(res, 1+check(point+1, temp_l))
            memo[point] = res
            return res
        
        return check(0,2)