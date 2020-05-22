function removeDuplicates(nums) {
  var i = 0
  if (nums.length === 0) {
    return 0
  } else {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
        i++
        nums[i] = nums[j]
      }
    }
    return i + 1
  }
}


//console.log(removeDuplicates([1, 1, 1, 4, 5]))



const maxProfit = (stocks) => {

  let profit = 0;

  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] > stocks[i - 1]) {
      profit += stocks[i] - stocks[i - 1]
    }   
  }
  return profit

}

//console.log(maxProfit([1, 7, 2, 3, 6, 7, 6, 7]))



const rotateArray = (arr, k) => {
  const tempArr = arr.reverse()
  return tempArr.slice(0, k).reverse().concat(tempArr.slice(k).reverse())
}


//console.log(rotateArray([1,2,3,4,5], 2))
//console.log(rotateArray([1, 2, 3, 4], 2))



const longestSubstring = (str) => {
  const sub = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      //console.log(str[i])
      sub + str[i]
    } else {
      return

    }

  }
  //console.log("sub", sub)
  return sub


}
//console.log("ff", longestSubstring("gwwbg"))


const myAtoi = (input) => {
  const num = ""
  str = input.trim()

  if (str.length() === 0 || str === null) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    if (isNaN(input[i]) === true) {
      
    }
  }

}


const RomanToInteger = (value) => {
  const romanNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XV": 40,
    "x": 10,
    "IX": 9,
    "v": 5,
    "IV": 4,
    "I": 1
  }
  if (number < 1 || number > 3999) {
    return "Please enter a valid number"
  } else {
    for (let key in romanNumerals) {
      const a = Math.floor()
    }
  }

}


const reverseInteger = (vals) => {
  for (let i = 0; i < vals.length; i++) {
    
  }

}

const hasUniqueChars = (str) => {
  const sortedStr = str.split('').sort().join('');
  for (let i = 0; i < str.length; i++) {
    if (sortedStr[i + 1] !== undefined && sortedStr[i] === sortedStr[i + 1]) {
      return false
      
    } else {
      return true
    }

  }
}
// console.log(hasUniqueChars("tjk"))

const permutation = (str1, str2) => {
  if (str1.includes(str2)) {
   return true
  } else {
    return false
  }
}
//console.log(permutation('a,b,d,d,f', 'a,b'))


const URLify = (str, length) => {
  const newURL = str.replace(" ", "%20")
  return newURL

  }
//console.log(URLify("tfvbn dffgh", 20))


const stringCompression = (str) => {
  const charCount = ""
  for (let i = 0; i < str.length; i++) {

  }
}

// const addTwoNodes = (l1, l2) => {
//   newL1 = 
//   const newList = l1.reverse() + l2.reverse()
//   return newList.reverse()
// }
// console.log(addTwoNodes(234, 123))



class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const createTree = (arr, root, i, n) => {
  if (i < n) {
    temp_node = new Node(arr[i])
    root = temp_node

    root.left = createTree(arr, root.left, 2 * i + 1, n)
    root.right = createTree(arr, root.right, 2*i+2, n)
  }
  return root
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const tree = createTree(arr, null, 0, arr.length)
// console.log('**************', tree)


const removeDuplicatesInPlace = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== [arr[0]]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1
}

// console.log(removeDuplicatesInPlace([1, 2, 3, 4, 5, 5, 5, 6, 7]))


const mergeSortedArray = (num1, num2) => {
  while (num2.length) {
    let i = 0;
    let j = 0;

  }

}

// const identicalPairs = (arr) => {
//   const pairs = {}
//   const objArr = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.contains(arr[i])) {
//       pairs[arr[i]] = [i]
//     }
//     objArr[i] = arr[i]
//   }
//   Object.entries(objArr).forEach(([key, value]) => {
    
//   })
  
//   return objArr
//   // for (let item of arr) {

//   //     pairs[item] = []
//   // }
// }

//console.log('>>>> ', identicalPairs([3, 5, 6, 3, 3, 5]))


// function pairsCount(arr) {
//     const pairs = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && i < j) {
//                 pairs.push([i, j])
//             }
//         }
//     }
//     return pairs.length   
// }

// function mergeSortedArrays(arr1, arr2) {
//     /*
//         1. merge items in arr2 into arr1
//         2. for each item in arr2 insert it in the best place in arr1
//         3. push rest of arr1 one step to the right
//     */
//    for(let i = 0; i < arr2.length; i++) {
//      for (let j = 0; j < arr1.length; j++) {
//         if (arr2[i] < arr1[j]) {
//             const temp = arr1[j]
//             arr1[j] = arr2.splice(i,1)[0]
//             arr1[j+1] = temp
//         }
//      }
//    }
//    return arr1
// }
// //console.log('splice', mergeSortedArrays([1,2,2,5], [3,4,7,2]))


// function isaSubstring(mainStr, subStr) {
//   // find the fist char of substring in the string
//   //compare subsequent substring chars

//   let i = 0;
//   let j = 0;
//   if (subStr.length > mainStr.length) {
//     return false
//   }
//   while (true) {
//     if (j >= subStr.length - 1) {
//       return true
//     }
//     if (i >= mainStr.length - 1) {
//       return false
//     }
//     if (mainStr[i] === subStr[j]) {
//       i++
//       j++
//     } else {
//       i++
//     }
//   }
// }
 
// //console.log('sub>> ',isaSubstring("abcdx", "abcdx"))

// const trapWater = (arr) => {

// }


// function divisionCount(num) {
//   let count = 0
//   while (true) {
//     if (num % 2 !== 0) {
//       num--
//       count++
//     } else {
//       num /= 2
//       count++
//     }
//     if (num === 0) { 
//       return count;
//     }

//   }
// }

// //console.log(divisionCount(98))


// function smallestNumber(num) {
//   if (num === 1) {
//     return 0  
//   } else {
//     return 10 ** ((""+num).length-1)
//   }

// }
// //console.log(smallestNumber(989990))


// //countObj[char] = (countObj[char] || 0) + 1


// function substrCount(n, s) {
//         let repeatedCount = 0;
//         let charCount = {};
//   for (let i = 0; i < n; i++){
//      repeatedCount++
//     charCount[s[i]] = (charCount[s[i]] || 0) + 1
//   }

//   for(let i = 0; i < Object.keys(charCount).length; i++) {
//     if (charCount[i] > 1 && charCount[i] % 2 === 0) {
//           console.log("here")
//         console.log('bbbb', charCount[i])
//           repeatedCount++
//         }


//     }
//     return repeatedCount


// }
// //console.log(substrCount(5, "abasd"))

// function minimumBribes(q) {
//     let count = 0
//     for(let i =0; i<q.length; i++) {
//         if(q[i] - q[i-1] > 1 || q[i] - q[i-1] < 0) {
//           count++
//           return count;

//         } else {
//           //return "too chaotic"
//         }
//     }
    


// }

// //console.log(minimumBribes([2,1,5,3,4]))

// //pascals triangle

// const addRow = function (triangle) {
//   let previous = triangle[triangle.length - 1]
//   let newRow = [1]

//     for (let i = 0; i < previous.length; i++) {
//       let current = previous[i]
//       let next = previous[i + 1]
//       newRow.push(current + next)
//     }
//     newRow.push(1)
//     return triangle.push(newRow)
//   }

// const generate = (numRows) => {
//   let triangle = [[1], [1, 1]] 
//   for (let i = 2; i < numRows; i++) {
//     addRow(triangle)
//   }
//   return triangle
// }

// console.log(generate(3))





