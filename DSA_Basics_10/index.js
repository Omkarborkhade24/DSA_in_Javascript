// 1. The blueprint for a single "leaf" or "branch" in our tree
class TreeNode {
    constructor(value) {
        this.value = value; // The actual data (number, string, etc.)
        this.left = null;   // Pointer to the smaller child
        this.right = null;  // Pointer to the larger child
    }
}

// 2. The blueprint for the Tree itself
class BinarySearchTree {
    constructor() {
        this.root = null; // The very top of the tree
    }

    // --- INSERTION LOGIC ---
    insert(value) {
        const newNode = new TreeNode(value);

        // If the tree is entirely empty, this new node becomes the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        
        // Loop forever until we find an empty spot (we'll manually break out using 'return')
        while (true) {
            // Edge case: We don't want duplicate values in this specific tree
            if (value === current.value) return undefined; 
            
            // If the value is SMALLER, go LEFT
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode; // Found an empty spot! Attach it.
                    return this;
                }
                current = current.left; // Move down the left branch and repeat the loop
            
            // If the value is LARGER, go RIGHT
            } else {
                if (current.right === null) {
                    current.right = newNode; // Found an empty spot! Attach it.
                    return this;
                }
                current = current.right; // Move down the right branch and repeat the loop
            }
        }
    }

    // --- TRAVERSAL LOGIC (Depth-First Search) ---
    // In-Order: Visits Left Child -> Parent -> Right Child
    // By default, it starts at the root if no node is passed in.
    inOrderTraversal(node = this.root) {
        // Base case: If we hit a dead end (null), stop and go back up
        if (node !== null) {
            // 1. Go as far down the left side as possible
            this.inOrderTraversal(node.left);   
            
            // 2. Once we can't go left anymore, print the current node's value
            console.log(node.value);            
            
            // 3. Then, check the right side
            this.inOrderTraversal(node.right);  
        }
    }
}

// ==========================================
// 3. USAGE: Building and testing our tree
// ==========================================

const myTree = new BinarySearchTree();

// Let's build the tree
myTree.insert(10); // Root
myTree.insert(5);  // Left child of 10
myTree.insert(15); // Right child of 10
myTree.insert(2);  // Left child of 5
myTree.insert(7);  // Right child of 5
myTree.insert(20); // Right child of 15
myTree.insert(12); // Left child of 15

// Let's print out the structure just to verify it's there
console.log("--- Raw Tree Structure ---");
console.log(JSON.stringify(myTree, null, 2));

// Let's run our traversal algorithm
console.log("\n--- In-Order Traversal Output ---");
myTree.inOrderTraversal();
