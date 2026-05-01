function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // 1. Divide: Find the middle index
    const mid = Math.floor(arr.length / 2);
    
    // Split the array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // 2. Conquer: Recursively sort both halves, then merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Compare elements and add the smaller one to the result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left or right array
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// Output: [3, 9, 10, 27, 38, 43, 82]
