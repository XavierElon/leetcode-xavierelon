class DoublyLinkedListNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.head = self.prev = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.hashmap = {}
        self.tail = DoublyLinkedListNode(-1,-1)
        self.head = DoublyLinkedListNode(-1,-1)
        self.tail.prev = self.head
        self.head.next = self.tail

    def get(self, key: int) -> int:
        if key in self.hashmap:
            node = self.hashmap[key]
            self.remove(node)
            self.add_to_back(node)
            return node.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.hashmap:
            node = self.hashmap[key]
            node.value = value
            self.remove(node)
            self.add_to_back(node)
            self.hashmap[key] = node
        else:
            if len(self.hashmap) >= self.capacity:
                lru = self.head.next
                del self.hashmap[lru.key]
                self.remove(lru)
            new_node = DoublyLinkedListNode(key, value)
            self.add_to_back(new_node)
            self.hashmap[key] = new_node

    def add_to_back(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.next = self.tail
        self.tail.prev = node
        node.prev = prev_node

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)