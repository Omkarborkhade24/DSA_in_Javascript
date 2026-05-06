Checklist Protocol 📝

☑️ Task 1: Write DSA in Js.

☑️ Task 2: Test the code.

☑️ Task 3: Deploy to GitHub Pages.

Working Link: https://stackblitz.com/edit/stackblitz-starters-cjdssqqq?file=index.js

Screenshot:

https://ibb.co/235NNFZT

Dynamic Programming (DP)
​Dynamic Programming sounds intimidating, but it is actually just a method of optimization. It means solving a complex problem by breaking it down into smaller subproblems, and storing the results of those subproblems so you never have to calculate them twice.
​The classic example is the Fibonacci Sequence (0, 1, 1, 2, 3, 5, 8, 13...). Each number is the sum of the two preceding ones.
​If we write a standard recursive function to find the 40th Fibonacci number, the computer will recalculate the 3rd, 4th, and 5th numbers millions of times. It is incredibly slow (O(2^n) time).
​We fix this using Memoization (Top-Down DP): We create a "memo" (usually a Hash Map or Array) to remember the answers we've already figured out. This speeds it up to O(n) time!
