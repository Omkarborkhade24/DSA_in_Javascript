// ==========================================
// 1. THE NODE: A Doubly Linked List Node
// ==========================================
class DLNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null; // Points to the older item
        this.next = null; // Points to the newer item
    }
}

// ==========================================
// 2. THE STRUCTURE: LRU Cache
// ==========================================
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Our Hash Map for O(1) lookups
        
        // We use "Dummy" Head and Tail nodes. 
        // This makes the math way easier because we never have to check if head/tail are null.
        this.head = new DLNode(0, 0); 
        this.tail = new DLNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // --- HELPER: Add to the front (Most Recently Used position) ---
    _addNode(node) {
        // The newest item goes right after the Dummy Head
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    // --- HELPER: Remove a node from anywhere in the list ---
    _removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // --- MAIN: Get an item ---
    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            
            // Because we just used it, it's now the "Most Recently Used"!
            // Rip it out of its current spot and move it to the front.
            this._removeNode(node);
            this._addNode(node);
            
            return node.value;
        }
        return -1; // Not found
    }

    // --- MAIN: Insert or Update an item ---
    put(key, value) {
        // If it already exists, remove the old one first
        if (this.cache.has(key)) {
            this._removeNode(this.cache.get(key));
        }

        // Create the new node, add it to the front of the list, and save it in the Map
        let newNode = new DLNode(key, value);
        this._addNode(newNode);
        this.cache.set(key, newNode);

        // --- THE EVICTION PROTOCOL ---
        // If we exceeded our capacity, kill the Least Recently Used item!
        if (this.cache.size > this.capacity) {
            // The LRU item is always sitting right in front of the Dummy Tail
            let lruNode = this.tail.prev; 
            
            this._removeNode(lruNode);     // Remove it from the list
            this.cache.delete(lruNode.key); // Remove it from the Map
        }
    }

    // Helper to print the current state from Most Recent to Least Recent
    printCache() {
        let current = this.head.next;
        let result = [];
        while (current !== this.tail) {
            result.push(`[${current.key}: ${current.value}]`);
            current = current.next;
        }
        console.log("MRU -> " + result.join(" -> ") + " -> LRU");
    }
}

// ==========================================
// 3. USAGE: Watch it in action!
// ==========================================

console.log("--- Initializing LRU Cache (Capacity: 3) ---");
const myCache = new LRUCache(3);

myCache.put("A", 100);
myCache.put("B", 200);
myCache.put("C", 300);
myCache.printCache(); 
// Output: MRU -> [C: 300] -> [B: 200] -> [A: 100] -> LRU

console.log("\n--- Getting 'A' (Moves it to MRU) ---");
console.log("Value retrieved:", myCache.get("A"));
myCache.printCache();
// Output: MRU -> [A: 100] -> [C: 3
