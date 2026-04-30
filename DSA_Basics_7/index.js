function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped); // Keep going until no swaps were needed
    
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
// Output: [11, 12, 22, 25, 34, 64, 90]
