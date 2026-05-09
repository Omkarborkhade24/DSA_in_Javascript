class PatternSolver {
    // Finds two numbers in a SORTED array that add up to the target
    static twoSumOptimized(arr, target) {
        let left = 0;                  // Pointer 1 starts at index 0
        let right = arr.length - 1;    // Pointer 2 starts at the last index

        // Keep looping as long as the pointers haven't crossed each other
        while (left < right) {
            let currentSum = arr[left] + arr[right];

            if (currentSum === target) {
                // We found the match! Return the values (or their indices)
                return [arr[left], arr[right]];
            } else if (currentSum > target) {
                // The sum is too big. We need a smaller number, 
                // so we move the right pointer to the left.
                right--;
            } else {
                // The sum is too small. We need a bigger number, 
                // so we move the left pointer to the right.
                left++;
            }
        }
        
        return null; // Return null if no pair exists
    }
}

// ==========================================
// USAGE: Testing the Two-Pointer
// ==========================================
const sortedNumbers = [-4, -1, 1, 3, 5, 6, 8, 11];
const targetSum = 10;

console.log("--- Two-Pointer Technique ---");
console.log(`Finding pair that equals ${targetSum} in:`, sortedNumbers);

const result = PatternSolver.twoSumOptimized(sortedNumbers, targetSum);
console.log("Result Pair:", result); 
// Output: [ -1, 11 ] (Notice it found it instantly without nested loops!)
