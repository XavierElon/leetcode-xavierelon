class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        if arr[0] != 1:
            if arr[0] - 1 >= k:
                return k
            else:
                k -= arr[0] - 1
        
        i = 0

        while i < len(arr) - 1:
            diff = arr[i+1] - arr[i]

            if diff != 1:
                for num in range(arr[i] +1, arr[i+1]):
                    k -= 1

                    if not k:
                        return num

            i += 1

        if k:
            return arr[-1] + k

'''
arr = [2,3,4,7,11]
k = 5
left = 4
right = 5
mid = 4
arr[mid] = 11
missing = 11 - 5 = 6

'''