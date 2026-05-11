Checklist Protocol 📝

☑️ Task 1: Write DSA in Js.

☑️ Task 2: Test the code.

☑️ Task 3: Deploy to GitHub Pages.

Working Link: https://stackblitz.com/edit/stackblitz-starters-w3cdx3iq?file=index.js

Screenshot:

<img width="830" height="511" alt="image" src="https://github.com/user-attachments/assets/45340909-d580-4f9d-93a0-7510f21d1c74" />

Backtracking (The "Maze Solver" Pattern)
Backtracking is an algorithmic technique used for finding all (or some) solutions to computational problems by incrementally building candidates. The golden rule is: As soon as you determine that a candidate cannot lead to a valid solution, you abandon it ("backtrack") and try another path.

The most classic real-world example of this is solving a maze.

If you are dropped in a maze, how do you get out?

Pick a direction.

Keep walking until you hit a dead end.

Backtrack to the last intersection.

Try a different direction.

Repeat until you find the exit.

Under the hood, Backtracking is just Depth-First Search (DFS) applied to a grid or a set of choices, heavily utilizing the Call Stack (Concept #1!).
