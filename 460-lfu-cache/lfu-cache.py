class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.freq_map = collections.defaultdict(collections.OrderedDict)
        self.min_freq = 0

    def _update_freq(self, key):
        value, freq = self.cache[key]
        self.freq_map[freq].pop(key)

        if not self.freq_map[freq] and freq == self.min_freq:
            self.min_freq += 1

        new_freq = freq + 1
        self.cache[key] = (value, new_freq)
        self.freq_map[new_freq][key] = None

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        self._update_freq(key)
        return self.cache[key][0]

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return

        if key in self.cache:
            self.cache[key] = (value, self.cache[key][1])
            self._update_freq(key)
        else:
            if len(self.cache) >= self.capacity:
                lfu_key, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.cache[lfu_key]

            self.cache[key] = (value, 1)
            self.freq_map[1][key] = None
            self.min_freq = 1


# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)