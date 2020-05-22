const findMissingNo = (arr) => {
  let x1 = 1

  for (let i = 2; i < arr.length +1; i++){
    x1 ^= arr[i]
  }
  let x2 = arr[0]

  for (let j = 1; j < arr.length; j++){
    x2 ^=arr[j]
  }

  return x1 ^ x2
}

const cyclicSort = (nums) => {
  let i = 0
  while (i < nums.length) {
    const j = nums[i] - 1
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    i++
  }
  return nums
}

//find missing no
const find_missing_number = function(nums) {
  // TODO: Write your code here
  let i = 0
  while(i<nums.length+1){
    const j = nums[i] - 1
    if(nums[i] !== nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    i++
  }

  for(let i = 0; i<nums.length+1; i++){
    if(!nums[i]){
      return i+1
    }
  }
  
}; 

const find_duplicate = function(nums) {
  // TODO: Write your code here
  let i = 0
  while(i<nums.length){
    let j = nums[i] -1
    if(nums[i] !== nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    i++
  }
  console.log(nums)
  for(let m = 0; m <nums.length; m++){
    if(m !== nums[m]-1){
      return nums[m]

    }
  }
};