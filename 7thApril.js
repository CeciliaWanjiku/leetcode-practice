const isLeaf = (node) => {
    return node.left == null && node.right == null
}

const addLeaves = (res, node) =>{
    if(isLeaf(node)){
        res.push(node.val)
    }else {
        if(node.left){
            addLeaves(res, node.left)
        }
        if(node.right){
            addLeaves(res, node.right)
        }
    }
}
var boundaryOfBinaryTree = function(root) {
    let res = []
    
    if(!root){
        return res
    }
    if(!isLeaf(root)){
        res.push(root.val)
    }
    
    let t = root.left
    while(t !== null){
        console.log("here")
        if(!isLeaf(t)){
            res.push(t.val)
        }
        if(t.left !== null){
            t = t.left
        }else {
            t = t.right
        }
    }
    addLeaves(res, root)
    
    let s = []
    
    t = root.right
    
    while(t !== null){
        if(!isLeaf(t)){
            s.push(t.val)
        }
        if(t.right !== null){
           t = t.right
        }else {
           t = t.left 
        }
    }
    while(s.length){
        res.push(s.pop())
    }
    
    return res
    
};
const avg = (arr) => {
  sum = arr.reduce((a, b) => a + b, 0)
  return Math.floor(sum/arr.length)
}

const findAverage = (arr) => {
  let i = 0
  let j = arr.length
  let av = []
  while (i < j && i + 5 < j) {
    let curr;
    if (i == 0) {
      curr = avg(arr.slice(i, i+5))
      av.push(curr)
      i++
    } else {
      let newArr = av*5 - arr[i-1] + arr[i+6]
      
    }
    
  }

  //console.log(av)
}

findAverage([1, 2, 3, 4, 5, 6, 7, 8])


const longestSubs = (str, k) => {
  let i = 0
  let maxLength = 0
  let map = {}

  for (let j = 0; j < str.length; j++){
    const rightChar = str[j]

    if (!(rightChar in map)) {
      map[rightChar] = 0
    }
    map[rightChar] += 1

    while (Object.keys(map).length > k) {
      const leftChar = str[i]
      map[leftChar] -= 1
      if (map[leftChar] === 0) {
        delete map[leftChar]
      }
      i++
    }
    maxLength = Math.max(maxLength, j-i+1)
  }
  return maxLength
}

const fruits_into_baskets = function(fruits) {
  // TODO: Write your code here
  let i = 0,  j = 0, len = fruits.length,  map = {}, max = 0

  while(i<len && j<len){
    let fruit = fruits[j]
    if(map[fruit]){
        map[fruit] +=1
      }else {
        map[fruit] = 1
      }
    while(Object.keys(map).length > 2){
      let startFruit = fruits[i]
      map[startFruit] -=1

      if(map[startFruit] == 0){
        delete map[startFruit]
      }
      i++

    }
    max = Math.max(max, j-i+1)
    j++

  }

  return max

};


const longestNon = (str) => {
  let i = 0, j = 0, len = str.length, map = {}, max = 0

  while (i < len && j < len) {
    const char = str[i]

    if (map[char]) {
      i = Math.max(i, map[char] +1)
    }

    map[char] = j
    max = Math.max(max, j-i+1)
  }
  return max
}

const replaceSub = (str, k) => {
  let i = 0, j = 0, len = str.length, map = {}, longest = 0

  while (i < len && j < len) {
    const char = str[j]

    if (map[char]) {
      map[char] +=1
    } else {
      map[char] = 1
    }
    longest = Math.max(longest, map[char])

    if ((j - i + 1 - longest) > k) {
      let otheChar = str[i]
      map[otheChar] -= 1
      i++
    }

    longest = Math.max(longest, j - i + 1)
     j++
  }
  return longest
 
}

const pair_with_targetsum = function (arr, target_sum) {
  let i = 0, j = arr.length - 1
  
  while (i < j) {
    if (arr[i] + arr[j] == target_sum) {
      return [i,j]
    } else if (arr[i] + arr[j] > target_sum) {
      j--
      
    } else if (arr[i] + arr[j] < target_sum) {
      i++
    }
  }
}


const search_triplets = function(arr) {
  triplets = [];
  // TODO: Write your code here

  const dfs = (list, path, sum, index) => {
    if(sum == 0 && path.length == 3){
      triplets.push(path)
    }
    for(let i = index; i< list.length; i++){
      dfs(list, path.concat(list[i]), sum+list[i], i+1)
    }

  }

  dfs(arr, [], 0, 0)
  console.log(triplets)
  return triplets;
};

const cycleLength = (node) => {
  let curr = node
  let len = 0

  while (true) {
    if (curr = node) {
      break
    }
    curr = curr.next
    len+=1
  }
}


