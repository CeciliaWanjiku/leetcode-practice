//remove duplicate numbers

const remove_duplicates = (arr) => {
  let nextNoDuplicate = 1
  let i = 1

  while (i < arr.length) {
    if (arr[nextNoDuplicate - 1] !== arr[i]) {
      arr[nextNoDuplicate] = arr[i]
      nextNoDuplicate++
    }
    i++
  }
  return nextNoDuplicate
}
//squaring a sorted Array
const squareNos = (arr) => {
  const n = arr.length
  let squares = new Array(n).fill(0)
  let i = 0
  let j = n - 1
  let highestSquare = n-1
  
  while (i <= j) {
    let isquared = arr[i] * [arr[i]], jsquared = arr[j] * arr[j]

    if (isquared > jsquared) {
      squares[highestSquare] = isquared
      i++
    } else {
      squares[highestSquare] = jsquared
      j++
    }
    highestSquare--

  }
  return squares
}

//search for triplets

function search_pair(arr, targetSum, left, triplets) {
  let right = arr.length - 1
  
  while (left < right) {
    const currSum = arr[left] + arr[right]
    
    if (currSum == targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]])
      left++
      right--
      while (left < right && arr[left] == arr[left - 1]) {
        left++
      }
      while (left < right && arr[right] == arr[right + 1]) {
        right++
      }
    } else if (targetSum > currSum) {
      left++
    } else {
      right--
    }
  }
}

function search_for_triplets(arr) {
  arr.sort((a, b) => a - b)
  const triplets = []
  for (let i = 0; i < arr.length; i++){
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue
    }
    search_pair(arr, -arr[i], i+1, triplets)
  }
  return triplets
}

//triplets with closestSum 

const triplet_closest_sum = (arr, targetSum) => {
  arr.sort((a, b) => a - b)
  let smallestDiff = Infinity

  for (let i = 0; i < arr.length; i++){
    let left = i + 1, right = arr.length - 1
    
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[right] - arr[right]
      if (target_diff == 0) {
        return targetSum - target_diff
      }
      smallestDiff = Math.min(Math.abs(smallestDiff), Math.abs(target_diff))

      if (Math.abs(target_diff) < Math.abs(smallestDiff) || 
        Math.abs(target_diff) == Math.abs(smallestDiff) && target_diff > smallestDiff) {
        smallestDiff = target_diff
      }
      if (target_diff > 0) {
        left++
      } else {
        right++
      }
    }
  }
  return targetSum-smallestDiff
}

//subarray with product less than target

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0
  for (let right = 0; right < arr.length; right++){
    product *= arr[right]

    while ((product >= target && left < arr.length)) {
      product /= arr[left]
      left++
    }

    const q = []
    for (let i = right; i > left - 1; i++){
      q.unshift(arr[i])
      result.push(...q)
    }
  }
  return result
}

const search_quadruplets = (arr, target) => {
    arr.sort((a, b) => a - b)
    
    const quads = []

    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i] == arr[i - 1]) {
            continue
        }
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (arr[j] == arr[j - 1]) {
                continue
            }
            search_quads(arr, target, i, j, quads)
        }
    }

}

const search_quads = (arr, target, first, second, quads) => {
    let left = second + 1, right = arr.length - 1
    while (left < right) {
        sum = arr[left] + arr[right] + arr[first] + arr[second]
        if (sum == target) {
            quads.push(arr[left], arr[right], arr[first], arr[second])
            left++
            right--

            while (arr[left == arr[left - 1]]) {
                left++
            }
            while (arr[right] == arr[right + 1]) {
                right--
            }
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
}

//Comparing Strings containing Backspaces (medium) #


function backspace_compare(str1, str2) {
  let index1 = str1.length - 1, index2 = str2.length - 1
  
  while (index1 >= 0 || index2 >= 0) {
    let item1 = getNextValidChar(str1, index1), item2 = getNextValidChar(str2, index2)
    if (item1 < 0 && item2 < 0) {
      return true
    }
    if (item1 < 0 || item2 < 0) {
      return false
    }

    if (str1[item1] !== str2[item2]) {
      return false
    }
    index1 = item1-1
    index2  = item2-1
  }

  return true

}

const getNextValidChar = (str, index) => {
  let backspaceCount = 0

  while (index >= 0) {
    if (str[index] == "#") {
      backspaceCount++
    } else if (backspaceCount > 0) {
      backspaceCount--
    } else {
      break
    }
    index--
  }
  return index
}

//Minimum Window Sort

function shortest_window_sort(arr) {
  let low = 0, high = arr.length - 1
  
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++
  }
  if (low === arr.length - 1) {
    return 0
  }

  while (high > 0 && arr[high] >= arr[hi - 1]) {
    high--
  }

  let subArrayMax = -Infinity, subArrayMin = Infinity
  for (k = low; k < high + 1; k++){
    subArrayMax = Math.max(subArrayMax, arr[k])
    subArrayMin = Math.min(subArrayMin, arr[k])
  }

  while (low > 0 && arr[low - 1] > subArrayMin) {
    low-=1
  }
  while (high < arr.length - 1 && arr[high + 1] < subArrayMax) {
    high+=1
  }
  return high-low +1
}

function find_subsets(nums) {
  const subsets = []

  subsets.push([])

  for (let i = 0; i < nums.length; i++){
    let num = nums[i]

    const n = subsets.length
    for (let j = 0; j < n; j++){
      const set = subsets[j].slice(0)
      set.push(num)
      subsets.push(set)
    }
  }
  return subsets;
}

function duplicates_in_subsets(nums) {
  nums.sort()

  const subsets = []

  subsets.push([])
  let start = 0, end = 0

  for (let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] === nums[i - 1]) {
      start += 1
    }
    end = subsets.length - 1
    
    for (j = start; j < end + 1; j++){
      const level = subsets[j].slice(0)
      level.push(nums[i])
      subsets.push(level)
    }
  }
  return subsets
}

function permutations(nums) {
  let len = nums.length,
  result = [],
    q = []
  q.push([])

  for (let i = 0; i < len; i++){
    const currNo = nums[i]

    const n = q.length
    for (let p = 0; p < n; p++){
      const prevPermuation = q.shift()

      for (let j = 0; j < prevPermuation.length + 1; j++){
        const newPermutation = prevPermuation.slice(0)
        newPermutation.splice(j, 0, currNo)
        if (newPermutation.length == len) {
          result.push(newPermutation)
        } else {
          q.push(newPermutation)
        }

      }
    }
  }
  return result
}

//String Permutations by changing case

function string_letter_permutation(str) {
  permutations = []
  permutations.push(str)

  for (let i = 0; i < str.length; i++){
    if (isNaN(parseInt(str[i], 10))) {
      const n = permutations.length
      for (j = 0; j < n; j++){
        const perm = permutations[j].split('')

        if (perm[i] == perm[i].toLoweCase()) {
          perm[i] = perm[i].toUpperCase()
        } else {
          perm[i] = perm[i].toLoweCase()
          
        }
        permutations.push(perm.join(''))
      }
    }
  }
  return permutations
}

function generateAbbreviations(word) {
  const result = []
  recurse(word, '', 0, 0, result)
}

function recurse(word, abword, start, count, result) {
  if (start == word.length) {
    if (count !== 0) {
      abword = abword + count
    }
    result.push(abword)
  } else {
    recurse(word, abword, start+1, count+1, result)
  }

  if (count !== 0) {
    abword += count
  }
  const newWord = abword + word[start]
  recurse(word, newWord, start+1, 0, result)
}
