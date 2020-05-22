const heap = require('./collections/heap');

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new heap([], null, ((a, b) => a - b))
    this.minHeap = new heap([], null, ((a, b) => b - a))
    
  }

  finding_sliding_window_median(nums, k) {
    const result = []

    for (let i = 0; i < nums.length; i++){
      if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.push(nums[i])
      } else {
        this.minHeap.push(nums[i])
      }

      rebalanceHeaps();

      if (i - k + 1 >= 0) {
        if (this.maxHeap.length === this.minHeap.length) {
          result[i-k+1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2
        } else {
          result[i-k+1] = this.maxHeap()
        }
      }

      const elementToBeRemoved = nums[i - k + 1]
      if (elementToBeRemoved <= this.maxHeap.peek()) {
        this.maxHeap.delete(elementToBeRemoved)
      } else {
        this.minHeap.delete(elementToBeRemoved)
      }

      this.rebalanceHeaps()
    }
    return result
  }
}
  
function find_max_capital(capital, profits, numberOfProjects, initialCapital) {
  const minCapitalHeap = new heap([], null, ((a, b) => b[0] - a[0]));
  const maxProfitHeap = new heap([], null, ((a, b) => a[0] = b[0]));

  for (let i = 0; i < profits.length; i++){
    minCapitalHeap([capital[i], i]);
  }
  let availableCapital = initialCapital

  for (let i = 0; i < numberOfProjects; i++){
    while (minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) {
      const [capital, index] = minCapitalHeap.pop()
      maxProfitHeap.push([profit[index], index])
    }
    if (maxProfitHeap.length === 0) {
      break
    }
    availableCapital = availableCapital + maxProfitHeap.pop()[0]
  }
  return availableCapital
}

class interval {
  constructor(start, end) {
    this.start = start
    this.end - end
  }
}

  function find_next_interval(interval) {
    const n = intervals.length

    const maxStartHeap = new heap([], null, ((a, b) => a[0] - b[0]))
    const maxEndHeap = new heap([], null, ((a, b) => b[0] - a[0]))

    const result = new Array(n).fill(0)

    for (i = 0; i < n; i++){
      maxStartHeap.push([intervals[i].start, i])
      maxEndHeap.push([intervals[i], i])
    }

    for (i = 0; i < n; i++){
      const [topEnd, endIndex] = maxEndHeap.pop()
      result[endIndex] = -1

      if (maxStartHeap.peek()[0] >= topEnd) {
        const [topStart, startIndex] = maxStartHeap.pop()

        while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
          const [topStart, startIndex] = maxStartHeap.pop()
          result[endIndex] = startIndex
          maxStartHeap.push(topStart,startIndex)

        }
      }
    }
    return result
    
    
  }


  const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function find_k_frequent_numbers(nums, k) {
  // find the frequency of each number
  numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // go through all numbers of the numFrequencyMap and push them in the minHeap, which will have
  // top k frequent numbers. If the heap size is more than k, we remove the smallest(top) number
  Object.keys(numFrequencyMap).forEach((num) => {
    minHeap.push([numFrequencyMap[num], num]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  // create a list of top k numbers
  const topNumbers = [];
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }

  return topNumbers;
}


console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`);

console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`);


  const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function sort_character_by_frequency(str) {
  // find the frequency of each character
  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  Object.keys(charFrequencyMap).forEach((key) => {
    maxHeap.push([charFrequencyMap[key], key]);
  });

  // build a string, appending the most occurring characters first
  const sortedString = [];
  while (maxHeap.length > 0) {
    [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join('');
} 

const findSumOfElements = (nums, k1, k2) => {
  const minHeap = new Heap(nums, null, ((a, b) => b - a))

  for (i = 0; i < k1; i++) {
    minHeap.pop();
  }
   let elementSum = 0;
  // sum next k2-k1-1 numbers
  for (i = 0; i < k2 - k1 - 1; i++) {
    elementSum += minHeap.pop();
  }

  return elementSum;
}

const rearrangeWithFrequency = (str) => {
  if (k <= 1) {
    return str
  }
  let map = {}

  for (let i = 0; i < str.length; i++){
    const char = str[i]
    if (map[char]) {
      map[char]+=1
    } else {
      map[char] = 1
    }
  }

  const maxHeap = new heap([], null, ((a, b) => a - b))
  
  Object.keys(map).forEach((key) => {
    maxHeap.push([map[char], char])
  })
  const q = []
  const res = []

  while (maxHeap.length) {
    const [freq, char] = maxHeap.pop()
    result.push(char)
    q.push([char, freq - 1])
    if (q.length === k) {
      const [char, freq] = q.shift()
      if (freq > 0) {
        maxHeap.push(freq, char)
      }
    }
  }

  return result.join('')

}

