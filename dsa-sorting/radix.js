function getDigit(num, place) {
    const absoluteNum = Math.abs(num);
    const divisor = Math.pow(10, place);
    return Math.floor(absoluteNum / divisor) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    const absoluteNum = Math.abs(num);
    return Math.floor(Math.log10(absoluteNum)) + 1;
  }
  
  function mostDigits(numbers) {
    let largestCount = 0;
    for (let num of numbers) {
      const currentCount = digitCount(num);
      if (currentCount > largestCount) largestCount = currentCount;
    }
    return largestCount;
  }
  
  function radixSort(numbers) {
    const maxDigits = mostDigits(numbers);
    for (let position = 0; position < maxDigits; position++) {
      const buckets = Array(10)
        .fill(null)
        .map(() => []);
  
      for (let number of numbers) {
        const digit = getDigit(number, position);
        buckets[digit].push(number);
      }
  
      numbers = [];
      for (let bucket of buckets) {
        numbers = numbers.concat(bucket);
      }
    }
    return numbers;
  }
  
  module.exports = { getDigit, digitCount, mostDigits, radixSort };
  