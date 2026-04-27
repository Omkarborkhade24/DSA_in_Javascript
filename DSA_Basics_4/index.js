class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Points to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The start of the list
        this.size = 0;
    }

    // Add a node to the end
    append(data) {
        let newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Print all nodes
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Usage
const list = new LinkedList();
list.append(5);
list.append(15);
list.append(25);
list.printList(); // Output: 5 -> 15 -> 25 -> null
