// longest palindromic sequence

const findSequence = (s1, s2) => {

  const dp = new Array(s1.length).fill(0).map(() => new Array(s2.length).fill(0))

  const recurse = (s1, s2, index1, index2, count) => {
    if (index1 == s1.length || index2 == s2.length) {
      return count
    }
    if (!dp[index1][index2]) {
      if (s1[index1] == s2[index2]) {
        count = recurse(s1, s2, index1+1, index2+1, count+1)
      }

      let way1 = recurse(s1, s2, index1 + 1, index2, count)
      let way2 = recurse(s1, s2, index1, index2 + 1, count)
      
      dp[index1][index2] = Math.max(count, way1, way2)
      
    }
    return dp[index1, index2]
  }
}

const bottomUp = (s1, s2) => {
  const dp = new Array(s1.length).fill(0).map(() => new Array(s2.length).fill(0))
  let count = 0

  for (let i = 0; i < s1.length; i++){
    for (let j = 0; j < s2.length; j++){
      if (!dp[index1][index2]) {
        if (s1[index1 == s2[index2]]) {
          dp[i][j] = dp[i-1][j-1]+ 1
        } else {
          dp[i][j] = dp[i-1][j-1]
        }
      }
    }
  }

}
const findLCSLength = function(s1, s2) {
  const dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));

  let maxLength = 0;
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }
  return maxLength;
};


const longestCommonSubstr = (str1, str2) => {
  const dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));
  
  let maxLength = 0
  for (let i = 1; i <= str1.length; i++){
    for (let j = 1; j <= str2.length; j++){
      if (str1[i] == str[2][j]) {
        dp[i][j] = dp[i-1][j-1] +1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        
      }
      maxLength = Math.max(maxLength, dp[i][j]);
    }
  }
  return maxLength

}
const minDeletionsIndertions = (s1, s2) => {
  const c1 = longestCommonSubstr(s1, s2)
  let minDeletions = s1 - c1
  let maxInsertions = s2 - c2
  return minDeletions+maxInsertions
}

const longestIncreasingSubstr = (nums) => {
  let count = 0
  if (!nums.length) {
    return 0
  }

  const recurse = (nums, index, prevIndex) => {
    if (index >= nums.length) {
      return 0
    }

    if (prevIndex == -1 || nums[i + 1] > nums[i]) {
      let c1 = 1+  recurse(nums, index+1, index) 
    }
    let c2 = recurse(nums, index + 1, count) 
    return Math.max(c1, c2)
  }

  return recurse(nums, 0, -1)
  
}
//longest increasing subsequence
const LISub = (nums) => {
  const dp = Array(nums.length).fill(0);
  dp[0] = 1
  let maxlength = 1
  for (let i = 1; i < nums.length; i++){
    dp[i] = 1
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] +1
        maxLength = Math.max(maxlength, dp[i])
      }
    }
  }
  return maxLength

}

//maxSum increasing subsequence

const MaxLIsb = (nums) => {
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let maxSum = 0

  for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j] && dp[i] <dp[j] +nums[i]) {
        dp[i] = dp[j] + nums[i]
        maxSum = Math.max(dp[i], maxSum)
      }
    }

  }
  return maxSum
}


const shortestSupersequence = (s1, s2) => {
  let missingfromS1 = s1.length - longestSubsequence(s1,s2)
  let missingfromS2 = s2.length - longestSubsequence(s1, s2)
  return longestSubsequence(s1, s2) + missingfromS1 + missingfromS2
  
  const longestSubsequence = (s1, s2) => {
    const dp = []
    let maxLength = []

    for (let i = 1; i <= s1.length; i++){
      for (let j = 1; j <= s2.length; j++){

      }
    }

  }
}

const LongIcreaseSub = (nums) => {
  const dp = Array(nums.length).fill(0);
  dp[0] = 1
  let maxLength = 0

  for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j + 1]
        maxLength = Math.max(maxLength, dp[i])
      }
    }
  }

}

const minDeletionsSortedStr = (nums) => {
  return nums.length - minDeletionsSortedStr
}


function arrayOfArrayProducts(arr) {
  // your code goes here
  
  if(arr.length < 2){
    return []
  }
  
  let result = []
  
  let start= 0
  
  let left = [1]
  let right = [1]
   
  for(let i = 0; i<arr.length-1; i++){
    let val = left[left.length-1] * arr[i]
    left.push(val)  
  }
  
  for(let i = arr.length-1; i>0; i--){
    let val = right[0] * arr[i]
    right.unshift(val)
  }
  console.log(left, right)
  
  let j = 0
  
  while(j <left.length && j< right.length){
    let prod = left[j] * right[j]
    result.push(prod)
    j++
    
  }
  console.log(result)
  return result
   
}

arrayOfArrayProducts([8, 10, 2])

var detectCycle = function(head) {
    if (head==null || head.next == null) return null;

    let findIntersec = function(head) {     
        let slow = head, fast = head;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return slow;
        }
        return null;
    }
    let intersec = findIntersec(head);
    if (!intersec) return null;
    
    let pt1 = head;
    while(pt1 != intersec) {
        pt1 = pt1.next;
        intersec = intersec.next;
    }
    
    return pt1;
};
