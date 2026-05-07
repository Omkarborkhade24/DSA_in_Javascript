class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // --- INSERTION ---
    insert(element) {
        this.values.push(element); // Put it at the very end of the array
        this.bubbleUp();           // Move it up to its correct spot
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            // Find the parent index using the math formula
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            // If the element is smaller or equal to the parent, it's in the right spot!
            if (element <= parent) break;

            // Otherwise, swap them!
            this.values[parentIndex] = element;
            this.values[index] = parent;
            
            // Update the index to keep bubbling up
            index = parentIndex;
        }
    }

    // --- REMOVAL (Extract the Maximum Value) ---
    extractMax() {
        const max = this.values[0]; // The highest priority item is ALWAYS at the root (index 0)
        const end = this.values.pop(); // Pop off the very last item in the array
        
        if (this.values.length > 0) {
            this.values[0] = end; // Move the last item to the root
            this.sinkDown();      // Let it sink down to its correct spot
        }
        
        return max; // Return the maximum value we removed
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null; // Keeps track of which child we will swap with

            // Check if the left child exists and is bigger than the element
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            // Check if the right child exists
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                // We swap with the right child if it's bigger than the element AND bigger than the left child
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            // If no swaps are needed, we are done
            if (swap === null) break;

            // Execute the swap
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

// ==========================================
// USAGE: Building and testing the Heap
// ==========================================
const heap = new MaxBinaryHeap();

// Let's insert some numbers
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55); // This is the largest, it should bubble all the way to index 0!

console.log("--- Initial Heap Array ---");
console.log(heap.values); 
// Output will be: [ 55, 39, 41, 18, 27, 12, 33 ] (Notice 55 is at the front)

console.log("\n--- Extracting Maximums ---");
console.log("Extracted:", heap.extractMax()); // Should pull 55
console.log("Heap Array is now:", heap.values); // 41 is the new root

console.log("Extracted:", heap.extractMax()); // Should pull 41
console.log("Heap Array is now:", heap.values); // 39 is the new root
