class TimeMap:

    def __init__(self):
        self.store = defaultdict(list) # key, [list of [val, timestamp]]

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append([value, timestamp])
        

    def get(self, key: str, timestamp: int) -> str:
        res = ""
        values = self.store.get(key, [])
        left, right = 0, len(values) - 1

        while left <= right:
            mid = (left + right) // 2
            if values[mid][1] == timestamp:
                return values[mid][0]
            elif values[mid][1] < timestamp:
                res = values[mid][0]
                left = mid + 1
            else:
                right = mid - 1
        return res
        
        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)