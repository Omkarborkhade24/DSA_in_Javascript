class SlidingWindow {
    // Finds the maximum sum of 'k' consecutive elements in an array
    static maxSubarraySum(arr, k) {
        // Edge case: If the array is smaller than the window size, it's invalid
        if (arr.length < k) return null;

        let maxSum = 0;
        let tempSum = 0;

        // 1. Create the initial window (sum the first 'k' elements)
        for (let i = 0; i < k; i++) {
            maxSum += arr[i];
        }
        
        // At the start, the temporary sum is the max sum
        tempSum = maxSum;

        // 2. Slide the window across the rest of the array
        for (let i = k; i < arr.length; i++) {
            // MAGIC TRICK: 
            // Subtract the element that is leaving the window: arr[i - k]
            // Add the element that is entering the window: arr[i]
            tempSum = tempSum - arr[i - k] + arr[i];

            // Update maxSum if our new window is bigger
            if (tempSum > maxSum) {
                maxSum = tempSum;
            }
        }

        return maxSum;
    }
}

// ==========================================
// USAGE: Testing the Sliding Window
// ==========================================
const salesData = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const windowSize = 3;

console.log("\n--- Sliding Window Technique ---");
console.log(`Finding max sum of ${windowSize} consecutive numbers in:`, salesData);

const maxSales = SlidingWindow.maxSubarraySum(salesData, windowSize);
console.log("Maximum Sum found:", maxSales); 
// Output: 19 (which comes from the sub-array [8, 5, 6])
