//binary search

const binary_search = function(arr, key) {
  // TODO: Write your code here
  let start = 0, end = arr.length - 1, isAscending = arr[start] < arr[end]

  while (start <= end) {
    let mid = Math.floor(start + (start + end) / 2)
    
    if (arr[mid] == key) {
      return mid
    }
    if (isAscending) {
      if (key < arr[mid]) {
        end = mid -1
      } else {
        start = mid +1
      }
    } else {
      if (key > arr[mid]) {
        end = mid-1
      } else {
        start = mid +1
      }
    }

  }
  return -1

};

//console.log(binary_search([4, 6, 10], 10))
// console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
//console.log(binary_search([10, 6, 4], 4))


function search_ceiling_of_a_number(arr, key) {
  const n = arr.length;
  if (key > arr[n - 1]) { // if the 'key' is bigger than the biggest element
    return -1;
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else { // found the key
      return mid;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array, so the next big number will be arr[start]
  return start;
}

function search_next_letter(letters, key) {
  const n = letters.length;
  if (key < letters[0] || key > letters[n - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      console.log(key, letters[mid])
      end = mid - 1;
    } else { // key >= letters[mid]:
      start = mid + 1;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  return letters[start % n];
}
