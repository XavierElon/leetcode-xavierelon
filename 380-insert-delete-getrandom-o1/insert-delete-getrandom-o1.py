class RandomizedSet:

    def __init__(self):
        self.num_map = {}
        self.num_list = []

    def insert(self, val: int) -> bool:
        res = val not in self.num_map
        if res:
            self.num_map[val] = len(self.num_list)
            self.num_list.append(val)
        return res

    def remove(self, val: int) -> bool:
        res = val in self.num_map
        if  res:
            index = self.num_map[val]
            last_val = self.num_list[-1]
            self.num_list[index] = last_val
            self.num_list.pop()
            self.num_map[last_val] = index
            del self.num_map[val]

        return res

    def getRandom(self) -> int:
        return random.choice(self.num_list)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()