function factorial(value) {
  if (value <= 1) {
    return 1
  } else {
   return value * factorial(value-1)
  }
    
}

console.log(factorial(1));



function bubbleSort(arr) {
  let swapped = false
  while (swapped) {
    for (let i = 0; i < arr.length; i++) {
      if (i < j) {
        return
      } else {
        j = i
      }

    }

  }
}


// const insertionSort = (nums) => {
//   for (let i = 1; i < nums.length; i++){
//     for (let j = 0)
//   }
// }

const mergeSort = (arr) => {
  mid = Math.floor(arr / 2)
  let firstHalf = arr.slice(0, mid)
  let secondHalf = arr.slice(mid)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

const merge = (firstHalf, secondHalf) => {

  const results = [];

  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] <= secondHalf[0]) {
      results.push(firstHalf.shift())
      
    } else {
      results.push(secondHalf.shift())
    }
  }
  while (firstHalf.length) {
    results.push(firstHalf.shift())
    
  }
    while (secondHalf.length) {
    results.push(secondHalf.shift())
    
    }
  //or
  //results.concat(firstHalf, secondHalf)
  return results;

}