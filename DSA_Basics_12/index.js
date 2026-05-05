// ==========================================
// 1. THE HELPER: A Simple Priority Queue
// ==========================================
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // Add an item and sort the queue so the lowest priority number (shortest distance) is first
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    // Remove and return the item with the lowest priority number
    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// ==========================================
// 2. THE STRUCTURE: A Weighted Graph
// ==========================================
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Now we add a "weight" (e.g., miles, minutes, cost) to the connection
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    // ==========================================
    // 3. THE ALGORITHM: Dijkstra's Shortest Path
    // ==========================================
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {}; // Keeps track of the shortest distance from 'start' to every other node
        const previous = {};  // Keeps track of the path we took to get there
        let path = [];        // The final array we will return
        let smallest;

        // --- SETUP ---
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity; // We don't know how far they are yet
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // --- THE ENGINE ---
        // As long as there is something in our queue to visit...
        while (nodes.values.length) {
            smallest = nodes.dequeue().val; // Grab the closest node

            // If we reached our destination, build the path backwards and stop!
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break; // Break out of the while loop
            }

            // Otherwise, look at all the neighbors of our current node
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    
                    // Calculate the distance to this neighbor from our start point
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    // If we found a SHORTER route to this neighbor than we had before...
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate; // Update the new shortest distance
                        previous[nextNeighbor] = smallest;   // Remember how we got here
                        nodes.enqueue(nextNeighbor, candidate); // Add it to the queue to explore later
                    }
                }
            }
        }
        
        // Return the path (we have to reverse it because we built it backwards)
        return path.concat(smallest).reverse();
    }
}

// ==========================================
// 4. USAGE: Run it in your terminal!
// ==========================================
const myMap = new WeightedGraph();

// Add Cities (Vertices)
myMap.addVertex("A");
myMap.addVertex("B");
myMap.addVertex("C");
myMap.addVertex("D");
myMap.addVertex("E");
myMap.addVertex("F");

// Add Roads between them (Edges with distance weights)
myMap.addEdge("A", "B", 4);
myMap.addEdge("A", "C", 2);
myMap.addEdge("B", "E", 3);
myMap.addEdge("C", "D", 2);
myMap.addEdge("C", "F", 4);
myMap.addEdge("D", "E", 3);
myMap.addEdge("D", "F", 1);
myMap.addEdge("E", "F", 1);

console.log("Finding the shortest path from A to E...");
const shortestRoute = myMap.dijkstra("A", "E");

console.log("Route:", shortestRoute.join(" -> "));
// Output should be: A -> C -> D -> F -> E
