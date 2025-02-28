class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        n = len(arr)


        for i in range(n):
            while arr[i] >= 0 and arr[i] < n and arr[arr[i]] != arr[i]:
                arr[arr[i]], arr[i] = arr[i], arr[arr[i]]

        for i in range(n):
            if arr[i] != i:
                return i

        return n
