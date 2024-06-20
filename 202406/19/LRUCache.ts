class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key: number): number {
        const value = this.cache.get(key)
        if (!this.cache.has(key)) {
            return -1
        }
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }

    put(key: number, value: number): void {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }

        this.cache.set(key, value) // 关键点：set是往后插入，所以旧值在Map左、新值在Map右
    }
}

const LRU = new LRUCache(2)
LRU.put(2, 1); // 缓存是 {1=1}
LRU.put(1, 1); // 缓存是 {1=1}
LRU.put(2, 3); // 缓存是 {1=1}
LRU.put(4   , 1); // 缓存是 {1=1}
console.log(LRU.get(1));    // 返回 1
console.log(LRU.get(2));    // 返回 1