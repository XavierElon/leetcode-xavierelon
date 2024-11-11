class Node {
    constructor(
        public key: number,
        public value: number,
        public next: Node | null = null,
        public prev: Node | null = null,
    ) {}
}
class LRUCache {
    head: Node;
    tail: Node;
    dic: Map<number, Node>;
    constructor(private capacity: number) {
        this.dic = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key: number): number {
        if (!this.dic.has(key)) {
            return -1;
        }
        const node = this.dic.get(key)!;
        this.remove(node);
        this.add(node);
        return node.value;
    }
    put(key: number, value: number): void {
        if (this.dic.has(key)) {
            this.remove(this.dic.get(key)!);
        }
        const node = new Node(key, value);
        this.dic.set(key, node);
        this.add(node);
        if (this.dic.size > this.capacity) {
            const nodeToDelete = this.head.next!;
            this.remove(nodeToDelete);
            this.dic.delete(nodeToDelete.key);
        }
    }
    private add(node: Node): void {
        const previousEnd = this.tail.prev!;
        previousEnd.next = node;
        node.prev = previousEnd;
        node.next = this.tail;
        this.tail.prev = node;
    }
    private remove(node: Node): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }
}
// For initiating and calling
// const obj = new LRUCache(capacity);
// const param_1 = obj.get(key);
// obj.put(key,value);