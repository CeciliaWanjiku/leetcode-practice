const Heap = require("./collections/heap")

class Element {
  constructor(num, freq, seqNo) {
    this.num = num
    this.freq = freq
    this.seqNo = seqNo
  }

  compare(other) {
    if (this.freq !== other.freq) {
      return this.freq-other.freq
    }
    return this.seqNo - other.seqNo
  }
}

class FrequencyStack {
  constructor() {
    this.seqNo = 0
    this.freqMap = {}
    this.maxHeap = new Heap([], null, ((a,b) => a.compare(b)))
  }

  push(num) {
    if (!this.freqMap[num]) {
      this.freqMap[num] = 1
    } else {
      freqMap[num]++
    }

    this.maxHeap.push(new Element(num, this.freqMap[num], this.seqNo))
  }

  pop() {
    const number = this.maxHeap.pop().num

    if (this.freqMap[number] > 1) {
      this.freqMap[number] -= 1
    } else {
      delete this.freqMap[number]
    }
    return number
  }
}


  class ListNode {
    constructor(val) {
      this.val = val
      this.next = next
    }
  }

function mergeKLists(lists) {
  const minHeap = new Heap([], null, ((a, b) => b - a))
  
  lists.forEach(list => {
    if (list !== null) {
      minHeap.push(a)
    }
    
  });

  let resultHead = null, resultTail = null
  while (minHeap.length) {
    const node = minHeap.pop()
    if (resultHead == null) {
      resultHead = resultTail = node
    } else {
      resultTail.next = node
      resultTail = resultTail.next
    }

    if (node.next !== null) {
      minHeap.push(node.next)
    }
  }
  return resultHead
  }


const KsmallestNumber = (lists) => {
  const maxHeap = new Heap([], null, ((a, b) => b - a))

  for (let list of list) {
    let num = list.shift()
    if (maxHeap.length < k) {
      maxHeap.push(num)
    }
  }

  return maxHeap.peek()
}
  

const smallestRangeNumber = (lists) => {
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]))
  
  let rangeStart = 0, rangeEnd = Infinity, currMaxNo = Infinity

  lists.forEach((list) => {
    minHeap.push([list[0], 0, list])
    currMaxNo = Math.max(currMaxNo, list[0])
  });

  while (minHeap.length == lists.length) {
    const [num, i, list] = minHeap.pop()
    if (rangeEnd - rangeStart > currMaxNo - num) {
      rangeStart = num
      rangeEnd = currMaxNo
    }
  }

  if (list.length > i + 1) {
    minHeap.push(list[i + 1], i + 1, list)
    currMaxNo = Math.max(currMaxNo, list[i+1])
  }

  return[rangeStart, rangeEnd]
}

//K Pairs with Largest Sums (Hard) #

const KLargestPairsSum = (nums1, nums2) => {
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]))
  
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    for (let j = 0; j < Math.min(k, nums2.length); j++) {
      if (minHeap.length < k) {
        minHeap.push(nums1[i] + nums2[j], i, j)
      } else {
        if (nums1[i] + nums2[j] < minHeap.peek()[0]) {
          break;
        } else {
          minHeap.pop()
          minHeap.push(nums1[i] + nums2[j], i, j)
        }
      }
    }
  }

  const result = []

  minHeap.forEach((num) => {
    let i = nums[1], j = nums[2]
    result.push([nums1[i], nums2[j]])
  })
  

  return result
}


const binarySearch = (list, key) => {
  let start = 0, end = list.length - 1
  
  while (start <= end) {
    let mid = start + Math.floor(start + end) / 2
    if (arr[mid] == key) {
      return mid
    }
    if (arr[mid] < key) {
      end = mid -1
    } else {
      start = mid +1
    }
  }
}


const searchInfiniteArray = (reader, key) => {

  let start = 0, end = 1

  const get = (index) => {
    if (index >= this.arr.length) {
      return Infinity
    }
    return arr[index]
  }

  while (reader.get(end) < key) {
    let newStart = end + 1
    end = (end - start + 1) * 2
    start = newStart
  }

  while (start <= end) {
    let mid = start + Math.floor(end - start) / 2
    if (key < reader.get(mid)) {
      end = mid - 1
    } else if (key > reader.get(mid)) {
      start = mid +1
    } else {
      return mid
    }
  }

}

function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return arr[start];
}

const searchBitonicArray = (arr, key) => {
  let start = 0, end = arr.length - 1
  
  while (start <= end) {
    let mid = start + Math.floor(end - start) / 2
    
    if (arr[mid] == key) {
      return mid
    } else {
      if (arr[start] < arr[mid + 1]) {
        if (arr[mid] < key) {
          end = mid -1   
        } else {
          start = mid +1
        }
        
      } else if (arr[end] > arr[mid + 1]) {
         if (arr[mid] < key) {
          start = mid +1   
        } else {
          end = mid -1
        }
      }
    }
  }
}









