const subsets = (arr) => {
  let results = []
  results.push([])

  for (let i = 0; i < arr.length; i++){
    let currNo = arr[i]
    let subLength = results.length

    for (j = 0; j < subLength; j++){
      const set = results[j].slice(0)
      set.push(currNo)
      results.push(set)
    }
  }

  return results
}

const findPermutations = (nums) => {
  let results = [], q = []
  q.push([])

  for (let i = 0; i < nums.length; i++){
    let currNum = nums[i]

    for (let j = 0; j < q.length; j++){
      const oldPerm = q.shift()

      for (let p = 0; p < oldPerm.length; p++){
        const newPerm = oldPerm.slice(0)
        newPerm.splice(p, 0, currNum)
        if (newPerm === nums.length) {
          results.push(newPerm)
        } else {
          q.push(newPerm)
        }
      }

      return results

    }
  }
}

const bfsPermutations = (nums) => {
  let results = []
  let q = []
  q.push([])
  let sIndex = 0
  
  while (q.length && sIndex < nums.length) {
    let currNo = nums[sIndex]
    let curr = q.shift()
    console.log(">>>.")
    for (let i = 0; i < curr.length; i++){
      console.log(">>>.")
      let newPerm = curr.slice(0)
      newPerm.splice(i, 0, currNo)
      
      if (newPerm.length === nums.length) {
        console.log(">>>.")
        results.push(newPerm)
      } else {
        q.push(newPerm)
      }

    }
    sIndex++
  }
  return results
}

console.log(bfsPermutations([1, 2, 3]))


var permute = function(nums) {
    let paths = []  
    const generatePermutation = (index, path) => {
        if(index == nums.length){
            paths.push(path)
            return
        }
        for(let i = 0; i<path.length+1; i++){
                let newPath = path.slice(0)
                newPath.splice(i, 0, nums[index])
                generatePermutation(index+1, newPath)
            }
    }
     
  generatePermutation(0, [])
    
    return paths
    
};


const stringPermutations = (str) => {
  let results = []

  const dfs = (index, path, s) => {
    if (path.length == str.length) {
      results.push(path)
    }
    for (let i = 0; i < s.length; i++){
      let char = s[i]
      let charCode = char.charCodeAt(0)

      if ((charCode <=65 && charCode <91) || (charCode <=97 && charCode <123) ) {
        dfs(i + 1, path + char.toUpperCase(), s)
        dfs(i+1, path+char.toLowerCase(), s)
      } else {
        dfs(i+1, path+char, s)
      }
    }
  }
}


const bsfGenerateParens = (str) => {
  let results = []

  let q = []
  q.push("")

  while (q.length) {
    
  }
}