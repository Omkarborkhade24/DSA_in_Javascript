Checklist Protocol 📝

☑️ Task 1: Write DSA in Js.

☑️ Task 2: Test the code.

☑️ Task 3: Deploy to GitHub Pages.

Working Link: https://stackblitz.com/edit/stackblitz-starters-tximnwtg?file=index.js

Screenshot:

<img width="526" height="164" alt="image" src="https://github.com/user-attachments/assets/67318805-bacf-4d9f-a975-ab5c2b902b27" />

The Two-Pointer TechniqueImagine you have a sorted array of numbers, and you need to find two numbers that add up to a specific target (e.g., target is 10).
The Rookie Way ($O(n^2)$): Loop through every single number, and for each number, loop through the rest of the array to see if you find the match. 
If the array has 10,000 items, that's 100,000,000 operations!The Senior Way ($O(n)$): Place one pointer at the extreme left (smallest number) and one pointer at the extreme right (largest number). 
Add them together.
If the sum is too big, move the right pointer down (to a smaller number).
If the sum is too small, move the left pointer up (to a bigger number).
They "squeeze" inward until they find the answer in a single pass!
