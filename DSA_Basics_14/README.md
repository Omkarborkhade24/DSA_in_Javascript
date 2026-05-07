Checklist Protocol 📝

☑️ Task 1: Write DSA in Js.

☑️ Task 2: Test the code.

☑️ Task 3: Deploy to GitHub Pages.

Working Link: https://stackblitz.com/edit/stackblitz-starters-es66jekq?file=index.js

Screenshot:

<img width="543" height="278" alt="image" src="https://github.com/user-attachments/assets/e2fff6d7-c236-457b-8efb-1a4e43ea68b1" />

Binary Heaps
Earlier, when we did Dijkstra's Algorithm, we used a simple array and sorted it every time we added a new distance. Sorting an entire array over and over is slow.

The professional way to build a Priority Queue is using a Binary Heap.

A Binary Heap is a specific type of Tree. In a Max Binary Heap, the rule is simple: Parent nodes are always larger than their child nodes. (There is no left/right ordering like in a Binary Search Tree).

The Magic Math Trick:
We rarely build Heaps using Node objects with left and right pointers. We use a flat Array! Because the tree is always perfectly balanced, we can find parents and children using simple math:

For any element at index n...

The left child is at index 2n + 1

The right child is at index 2n + 2

Its parent is at index Math.floor((n - 1) / 2)
