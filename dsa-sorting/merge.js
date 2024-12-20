function merge(numbers1, numbers2) {
    let mergedNumbers = [];
    let index1 = 0;
    let index2 = 0;
  
    while (index1 < numbers1.length && index2 < numbers2.length) {
      if (numbers2[index2] > numbers1[index1]) {
        mergedNumbers.push(numbers1[index1]);
        index1++;
      } else {
        mergedNumbers.push(numbers2[index2]);
        index2++;
      }
    }
  
    while (index1 < numbers1.length) {
      mergedNumbers.push(numbers1[index1]);
      index1++;
    }
  
    while (index2 < numbers2.length) {
      mergedNumbers.push(numbers2[index2]);
      index2++;
    }
  
    return mergedNumbers;
}
function mergeSort(numbers) {
    if (numbers.length <= 1) return numbers;
    const midpoint = Math.floor(numbers.length / 2);
    const leftNumbers = mergeSort(numbers.slice(0, midpoint));
    const rightNumbers = mergeSort(numbers.slice(midpoint));
  
    return merge(leftNumbers, rightNumbers);
}

module.exports = { merge, mergeSort};