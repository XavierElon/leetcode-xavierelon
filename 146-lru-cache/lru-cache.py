class DoublyLinkedListNode:
    def __init__(self, key=-1, value=-1):
        self.key = key
        self.value = value
        self.next = self.prev = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.hashmap = defaultdict(None)
        self.head = DoublyLinkedListNode()
        self.tail = DoublyLinkedListNode()
        self.tail.prev = self.head
        self.head.nexxt = self.tail
        
    def get(self, key: int) -> int:
        if key in self.hashmap:
            node = self.hashmap[key]
            self.remove(node)
            self.add(node)
            return node.value
        else:
            return -1
        
    def put(self, key: int, value: int) -> None:
        if key in self.hashmap:
            node = self.hashmap[key]
            node.value = value
            self.remove(node)
            self.add(node)
            return node.value
        else:
            if len(self.hashmap) >= self.capacity:
                lru = self.head.next
                self.remove(lru)
                del self.hashmap[lru.key]
            new_node = DoublyLinkedListNode(key, value)
            self.add(new_node)
            self.hashmap[key] = new_node

    def add(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.next = self.tail
        self.tail.prev = node
        node.prev = prev_node

    def remove(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)