/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(numbers, start = 0, end = numbers.length - 1){
    const pivotValue = numbers[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (numbers[i] < pivotValue) {
            swapIndex++;
            // Swap elements
            [numbers[swapIndex], numbers[i]] = [numbers[i], numbers[swapIndex]];
        }
    }
    // Swap the pivot element to its correct position
    [numbers[start], numbers[swapIndex]] = [numbers[swapIndex], numbers[start]];
    return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(numbers, left = 0, right = numbers.length - 1) {

    const length = numbers.length; // Declare numbers length
    if (left < right) {
        let pivotIndex = pivot(numbers, left, right); // Find the pivot index
        quickSort(numbers, left, pivotIndex - 1);    // Recursively sort left half
        quickSort(numbers, pivotIndex + 1, right);  // Recursively sort right half
    }
    return numbers;
}

module.exports = {pivot, quickSort};