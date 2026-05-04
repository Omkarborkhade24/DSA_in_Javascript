// 1. The Node Class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 2. The Binary Search Tree Class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // --- INSERTION LOGIC ---
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; 
            
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // --- TRAVERSAL LOGIC: Breadth-First Search ---
    breadthFirstSearch() {
        let currentNode = this.root;
        let queue = [];     // The queue keeps track of nodes we need to visit
        let results = [];   // This stores the values in the order we visited them

        // Start by pushing the root into the queue
        if (currentNode !== null) {
            queue.push(currentNode); 
        }

        // Keep looping as long as there is something in the queue
        while (queue.length > 0) {
            // 1. Remove the first node from the queue (FIFO)
            currentNode = queue.shift(); 
            // 2. Record its value
            results.push(currentNode.value);

            // 3. If it has a left child, queue it up for the next level
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            // 4. If it has a right child, queue it up for the next level
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        
        return results;
    }
}

// ==========================================
// 3. USAGE: Build the tree and run BFS
// ==========================================

const myTree = new BinarySearchTree();

// Build the tree (Level 0: 10, Level 1: 5 & 15, Level 2: 2, 7, 12, 20)
myTree.insert(10); // Root
myTree.insert(5);  // Left child of 10
myTree.insert(15); // Right child of 10
myTree.insert(2);  // Left child of 5
myTree.insert(7);  // Right child of 5
myTree.insert(12); // Left child of 15
myTree.insert(20); // Right child of 15

// Run the algorithm and print the results
console.log("--- Breadth-First Search Output ---");
console.log(myTree.breadthFirstSearch()); 
// Output should be: [ 10, 5, 15, 2, 7, 12, 20 ]
