Checklist Protocol 📝

☑️ Task 1: Write DSA in Js.

☑️ Task 2: Test the code.

☑️ Task 3: Deploy to GitHub Pages.

Working Link: https://stackblitz.com/edit/stackblitz-starters-y1ekwgwy?file=index.js

Screenshot:

<img width="590" height="187" alt="image" src="https://github.com/user-attachments/assets/f50f43d4-97f9-4333-b599-e7175ff99e1b" />

The Sliding Window TechniqueThe Sliding Window is used when you need to keep track of a continuous subset of data within a larger array or string.Imagine you need to find the maximum sum of 3 consecutive numbers in an array.The Rookie Way ($O(n*k)$): Calculate the sum of index 0+1+2. Then calculate 1+2+3. Then 2+3+4. You are recalculating the middle numbers over and over!The Senior Way ($O(n)$): Calculate the sum of the first 3 numbers to create your initial "window". To slide the window to the right, just subtract the number that falls off the back of the window, and add the new number coming into the front.
