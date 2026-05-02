class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; // No duplicates allowed
            
            if (value < current.value) {
                // Go Left
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                // Go Right
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

// Usage
const tree = new BinarySearchTree();
tree.insert(10); // Becomes the root
tree.insert(5);  // Goes to the left of 10
tree.insert(15); // Goes to the right of 10
tree.insert(2);  // Goes to the left of 5

// to see the output:
console.log(JSON.stringify(tree, null, 2));
