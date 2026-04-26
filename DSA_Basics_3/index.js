class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty!";
        // shift() removes the first element. 
        // Note: In a massive scale app, shift() is O(n). 
        // For strict O(1) performance, you'd use a pointer-based approach.
        return this.items.shift(); 
    }

    front() {
        if (this.isEmpty()) return "Queue is empty!";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Usage
const taskQueue = new Queue();
taskQueue.enqueue("Process Payment");
taskQueue.enqueue("Send Email");
console.log(taskQueue.dequeue()); // Output: Process Payment
