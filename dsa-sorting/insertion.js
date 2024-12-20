function insertionSort(numbers) {
let n = numbers.length;
for (let i = 1; i < n; i++) {
    let key = numbers[i], j = i - 1;

    while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j--;
    }
    numbers[j + 1] = key;
}
return numbers;
}
module.exports = insertionSort;