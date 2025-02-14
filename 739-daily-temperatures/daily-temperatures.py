class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        if n == 1:
            return [0]
        
        stack = []
        res = [0 for _ in range(n)]

        for i in range(n):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                prev_index = stack.pop()
                res[prev_index] = i - prev_index
            stack.append(i)

        return res
