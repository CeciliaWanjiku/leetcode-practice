//serialize and deserialize a binary tree
class Codec {

  serialize(root) {
    if (!root) {
      return ""
    }
    let str = ""
    let q = []
    q.push(root)
    str = str + root.val + "," + root.children.length + ","
    
    while (q.length) {
      let curr = q.shift()
      curr.children && curr.children.forEach(child => {
        q.push(child)
        str = str +child.val + "," + child.children.length + ","
      });
    }
    return str
  }

  deserialize(arr) {
    if (arr.length == 0) {
      return null
    }
    console.log(arr)
    let nodes = arr.split(",")
    console.log(nodes)
    let nodeq = [], childq = []
    let root = new TreeNode(nodes[0])
    nodeq.push(root)
    childq.push(nodes[1])

    let i = 2
    while (nodeq.length) {
      let curr = nodeq.shift()
      curr.children = []
      let n = childq.shift()
      for (let j = 0; j < n; j++){
        let child = new TreeNode(nodes[i++])
        childq.push(nodes[i++])
        nodeq.push(child)
        curr.children.push(child)

      }
    }
    return root
  }
}

//using an array

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        let arr = []
        let q = []
        if(!root){
            return []
        }
        arr.push([root.val, root.children.length])
        q.push(root)
        while(q.length){
            let curr = q.shift()
            curr.children && curr.children.forEach((child) => {
                arr.push([child.val, child.children.length])
                q.push(child)
            })
        }
        console.log(arr)
        return arr

        
        
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        if(data.length == 0){
            return null
        }
        let nodeq = []
        let childq = []
        const [node, childrenLength] = data.shift()
        let root = new TreeNode(node)
        nodeq.push(root)
        childq.push(childrenLength)
        
        while(nodeq.length){
            let curr = nodeq.shift()
            let len = childq.shift()
            curr.children = new Array()
            for(let i = 0; i<len; i++){
                let [childVal, childLen] = data.shift()
                let child = new TreeNode(childVal)
                curr.children.push(child)
                childq.push(childLen)
                nodeq.push(child) 
            }
        }
        console.log(root)
        return root
        
    };
}
//297. Serialize and Deserialize Binary Tree
var serialize = function(root) {
    if(!root){
        return ""
    }
    let q = []
    q.push(root)
    let res = ""
    
    while(q.length){
        let node = q.shift()
        if(!node){
            res = res + "none" + ","
        }else{
            res = res + node.val + ","
            q.push(node.left)
            q.push(node.right)
        }
        
    }
    return res
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length == 0){
        return null
    }
    
    let nodes = data.split(',')
    let root = new TreeNode(nodes[0])
    let q = []
    q.push(root)
    let i = 1
    while(q.length && i<nodes.length){
        let curr = q.shift()
        if(nodes[i] !== "none"){
            let left = new TreeNode(nodes[i])
            curr.left = left
            q.push(left)
            i+=1
        }else{
            curr.left = null
            i+=1
        }
        if(nodes[i] !== "none"){
            let right = new TreeNode(nodes[i])
            curr.right = right
            q.push(right)
            i+=1
        }else {
            curr.right = null
            i+=1
        }
        
    }
    return root
    
};

const subsets = (arr) => {
  let result = []
  result.push([])
  for (let i = 0; i < arr.length; i++){
    let currNo = arr[i]

    let len = result.length
    for (let j = 0; j < len; j++){
      const subset = result[j].slice(0)
      result.push(currNo)
    }

  }
  return result
}

const subsetsWithDuplicates = (arr) => {
  arr.sort()
  let subsets = []
  subsets.push([])
  let startIndex= 0, endIndex = 0

  for (let i = 0; i < arr.length; i++) {
    startIndex = 0

    if (i > 0 && nums[i] == nums[i - 1]) {
      startIndex = endIndex + 1
    }
    endIndex = subsets.length - 1
    
    for (let j = startIndex; j < endIndex + 1; j++) {
      let subset = subsets[j]
      subset.push(nums[i])
      subsets.push(subset)
    }
  }
  return subsets
      
}

//permutations
var permuteUnique = function(nums) {
    let subsets = []
    let q = []
    q.push([])
    
    for(let i = 0; i<nums.length; i++){
        let currNo = nums[i]
        let len = q.length
        for(let j = 0; j<len; j++){
            let subset = q.shift()
            for(let c = 0; c<subset.length+1; c++){
                let perm = subset.slice(0)
                perm.splice(c, 0, currNo)
                if(perm.length === nums.length){
                    if(!subsets.includes(perm)){
                        console.log("....")
                        subsets.push(perm)  
                    }
                    
                }else {
                    q.push(perm)
                }
            }   
    }
    
    }
    return subsets
};

const combinations = (n, k) => {
  let combs = []
  combine(combs, [], 1, n, k)

  const combine = (combs, comb, index, n, k) => {
    if (k == 0) {
      combs.push(comb)
      return
    }
    for (let i = index; i <= n; i++){
      comb.push(i)
      combine(combs, comb, i + 1, n, k - 1)
      comb.splice(comb.length-1, 1)
    }
  }
}