function selectionSort(numbers) {
    const performSwap = (list, num1, num2) => {
      let temp = list[num1];
      list[num1] = list[num2];
      list[num2] = temp;
    };
  
    for (let current = 0; current < numbers.length; current++) {
      let smallest = current;
  
      for (let next = current + 1; next < numbers.length; next++) {
        if (numbers[next] < numbers[smallest]) {
          smallest = next;
        }
      }
  
      if (current !== smallest) {
        performSwap(numbers, current, smallest);
      }
    }
  
    return numbers;
  }
  
  module.exports = selectionSort;