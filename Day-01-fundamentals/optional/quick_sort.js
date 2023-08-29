function hoarePartition(arr, low, high) {
    const pivot = arr[low]; // Choose the pivot as the first element
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quicksort(arr, low, high) {
    if (low < high) {
        const pivotIndex = hoarePartition(arr, low, high);
        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high);
    }
}

// Example usage
const unsortedArray = [6, 2, 8, 1, 9, 4];
quicksort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray); // Output: [1, 2, 4, 6, 8, 9]