function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid; // Found it! Return the index.
        } else if (sortedArray[mid] < target) {
            left = mid + 1; // Discard the left half
        } else {
            right = mid - 1; // Discard the right half
        }
    }
    return -1; // Not found
}

// Usage
const numbers = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(numbers, 10)); // Output: 4 (the index of 10)
