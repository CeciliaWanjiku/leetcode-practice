//Given a list of numbers and a number k, 
// return whether any two numbers from the list add up to k.

const isSum = (arr, k) => {
  for (i = 0; i < arr.length; i++){
    const difference = k - arr[i]
    if (arr.includes(difference)) {
      return true
    } else {
      i++
    }
  }
  return false
}

//console.log(isSum([0, 1, 3, 4, 3], 7))


// Given an array of integers, return a new array such that each 
// element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
//If our input was[3, 2, 1], the expected output would be[2, 3, 6].

// Follow-up: what if you can't use division?


const multiples = (arr) => {
  //with division
  // const multiple = arr.reduce((a, b) => a * b)
  // const newArr = []
  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(multiple / arr[i])
  //   i++
  // }
  // return newArr

  //without division
 const newArr = []
  const product = (arr) => {
    arr.reduce((a, b) => a * b)
    return product
  }

  console.log('damn', product([1,2,3,4,5]))
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i - 1)
    const right = arr.slice(i + 1)
    console.log('here', product(left), product(right))
    newArr.push(product(left) * product(right))
    i++
  }
  return newArr
}

console.log(multiples([1, 3, 4, 3]))


//implementing a heap datastructure

class minHeap {
  constructor() {
    this.heap = []
  }

  getMin() {
    return this.heap[0]
    
  }
  insert(node) {
    this.heap.push(node)

    if (this.heap.length > 1) {
      let current = this.heap.length - 1

      while (current > this.heap[Math.floor(current / 2)] > this.heap[current]) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
        current = Math.floor(current/2)
      }
    }
  }

  remove() {
    let 
  }
}