class Stack {
  constructor() {
    this.items = []; // Using a JS array to hold stack elements
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return 'Stack is underflow!';
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // Output: 20
console.log(myStack.pop()); // Output: 20
