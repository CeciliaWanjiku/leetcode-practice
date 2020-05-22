// longest palindromic sequence

const longestPalindormicSequence = (str) => {
  

  const recurse = (str, startIndex, endIndex) => {
    if (!str.length) {
      return 0
    }
    if (startIndex == endIndex) {
      return 1
    }
    if (str[startIndex] == str[endIndex]) {
      return 2+ recurse(str, startIndex+1, endIndex-1)
    }
    let way1 = recurse(str, startIndex + 1, endIndex)
    let ways2 = recurse(str, startIndex, endIndex)

    return Math.max(way1, ways2)
  }

  return recurse(str, 0, str.length-1)
}

//bottomup

const lPS = (str) => {
  const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(0))

  for (let i = 0; i < str.length; i++){
    dp[i][i] = 1
  }

  for (let startIndex = str.length - 1; startIndex >= 0; startIndex--){
    for (let endIndex = startIndex + 1; endIndex < str.length; endIndex++){
      if (str[startIndex] == str[endIndex]) {
        dp[startIndex][endIndex] = 2+ dp[startIndex+1][endIndex-1]
      } else {
        dp[startIndex][endIndex] = Math.max(dp[startIndex+1][endIndex], dp[startIndex][endIndex-1])
      }

    }
  }
  return dp[0][str.length-1]
}