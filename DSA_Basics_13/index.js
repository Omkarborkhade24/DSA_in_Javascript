class DynamicProgramming {
    // 1. The SLOW Way (Standard Recursion)
    // Try passing 40 or 45 into this. It will take a noticeable amount of time!
    fibSlow(n) {
        if (n <= 2) return 1;
        return this.fibSlow(n - 1) + this.fibSlow(n - 2);
    }

    // 2. The FAST Way (Memoization / Top-Down)
    // We pass an array called 'memo' to remember our previous answers
    fibMemo(n, memo = []) {
        // If we already know the answer, return it immediately!
        if (memo[n] !== undefined) return memo[n];
        
        // Base case
        if (n <= 2) return 1;
        
        // Calculate the answer, but SAVE it in the memo before returning it
        let result = this.fibMemo(n - 1, memo) + this.fibMemo(n - 2, memo);
        memo[n] = result;
        
        return result;
    }

    // 3. Another FAST Way (Tabulation / Bottom-Up)
    // Instead of recursion, we just build an array from the ground up using a loop.
    // This is often even safer because it won't trigger a "Maximum Call Stack Size Exceeded" error on huge numbers.
    fibTab(n) {
        if (n <= 2) return 1;
        let fibNums = [0, 1, 1]; // Starting values
        
        for (let i = 3; i <= n; i++) {
            fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
        }
        
        return fibNums[n];
    }
}

// ==========================================
// USAGE: Testing DP efficiency
// ==========================================
const dp = new DynamicProgramming();

console.log("--- Calculating Fibonacci Numbers ---");

// Uncomment the line below to see how slow standard recursion is (might take a few seconds!)
// console.log("Slow Fib (40):", dp.fibSlow(40)); 

console.log("Memoized Fib (100):", dp.fibMemo(100)); // Instantaneous!
console.log("Tabulated Fib (100):", dp.fibTab(100)); // Also instantaneous!
