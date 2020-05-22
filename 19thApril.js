//sliding window

const averageWindow = (k, arr) => {
  let result

  let windowSum = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]
    if (windowEnd >= K - 1) {
    result.push(windowSum / k)
    windowSum -= arr[windowStart]
    windowStart +=1
  }
  }
  return result
  
}

const smallestSubArraySum = (arr, s) => {
  let windowSum = 0,
    len = Infinity;
  windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]

    while (windowSum >= s) {
      len = Math.min(len, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }

  if (len == Infinity) {
    return 0
  }
  return len
}
//No-repeat Substring (hard)
const nonRepeatingSub = (str) => {
  let windowStart = 0, maxLength = 0, map = {}

  for (let windowEnd = 0; windowEnd < str.length; i++){
    const char = str[windowEnd]

    if (map[char]) {
      windowStart = Math.max(windowStart, map[char] + 1)
    }
    map[char] = windowEnd
    maxLength = Math.max(maxLength, windowEnd-windowStart+1)
  }
  return maxLength
  
}

const lengthOfLongestSubstr = (str, k) => {
  let windowStart = 0, maxLength = 0, maxRepeatingLetter = 0, map = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
    const char = str[windowEnd]

    if (map[char]) {
      map[char] += 1
    } else {
      map[char] = 1
    }

    maxRepeatingLetter = Math.max(maxRepeatingLetter, map[char])

    if ((windowEnd - windowStart + 1 - maxRepeatingLetter) > k) {
      let secondChar = str[windowStart]
      map[secondChar] -= 1
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart +1)
  }
}