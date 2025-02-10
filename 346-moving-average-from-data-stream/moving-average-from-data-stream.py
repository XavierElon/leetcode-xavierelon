class MovingAverage:

    def __init__(self, size: int):
        self.size = size
        self.nums = deque()

    def next(self, val: int) -> float:
        if len(self.nums) >= self.size:
            self.nums.popleft()
        self.nums.append(val)
        sum_ = sum(self.nums)
        average = float(sum_)/ len(self.nums)
        return average


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)