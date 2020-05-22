var cloneGraph = function(node) {
    if(!node){
        return null
    }
    
    const visited = new Map();
    const queue = [node];
    visited.set(node, new Node(node.val));
    
    while(queue.length > 0){
        const current = queue.shift();
        for(let n of current.neighbors){
            if(!visited.has(n)){
                visited.set(n, new Node(n.val));
                queue.push(n);
            }
            visited.get(current).neighbors.push(visited.get(n))
        }
    }
    return visited.get(node);
};

function copyRandomList(head) {
  const map = new Map();
  
  function copy(node)   {
    if (node == null) return null;
    if (map.get(node) != null) return map.get(node);

    const n = new Node(node.val);
    map.set(node, n);

    n.next = copy(node.next);
    n.random = copy(node.random);
    return n;
  }

  return copy(head);
}

//366. Find Leaves of Binary Tree
var findLeaves = function(root) {
   const arr = []
   
   const dfs  = (node) => {
       if(!node){
           return 0
       }
       const left = dfs(node.left)
       const right = dfs(node.right)
       
       let depth = Math.max(left, right)
       
       if(arr[depth]){
           arr[depth].push(node.val)
       }else {
           arr[depth] = [node.val]
       }
       
       return 1 +depth
   }
   
    dfs(root)
    return arr
};
//1104. Path In Zigzag Labelled Binary Tree
var pathInZigZagTree = function(label) {
    let list  = []
    let nodeCount = 1
    let level = 1
    
    while(label >=nodeCount*2){
        nodeCount*=2
        level++
    }
    
    while(label > 0) {
        list.push(label)
        let levelMax = (2**level) -1
        let levelMin = 2**(level-1)
        console.log(levelMax, levelMin, label)
        label = Math.floor((levelMax + levelMin - label)/2)
        level--
    }
    console.log(level, nodeCount)
    return list.reverse()
 
};

//257. Binary Tree Paths
var binaryTreePaths = function(root) {
    let paths = []
    if(!root){
        return paths
    }
    
    const dfs = (node, path) => {
        if(!node){
            return
        }
       
        if(!path){
            path = path+node.val
        }else {
            path = path + "->" +node.val
        }
        
        dfs(node.left, path)
        dfs(node.right, path)
        
        if(!node.left && !node.right){
            if(!paths.includes(path)){
                paths.push(path)
            }
            return
        }
    }
    
    dfs(root, "")
    
    return paths
    
};

//339. Nested List Weight Sum
var depthSum = function(nestedList) {  
    let sum = 0
    let depth = 1
    let q = nestedList
    while(q.length){
        let len = q.length
        
        for(let i = 0; i<len; i++){
            let curr = q.shift()
            if(curr.isInteger()){
                sum = sum + curr.getInteger() *depth
            }else {
                curr.getList().forEach(e => q.push(e))
            }
        }
        depth++
    }
    
    return sum
    
};

var depthSum = function(nestedList) {  
    let sum = 0
    
    const dfs = (list, depth) => {
        for(let item of list){
            if(item.isInteger()) {
                console.log(item, sum)
                sum += item.getInteger() * depth
            }else {
                sum += dfs(item.getList(), depth+1)
            }
        }
    }
    
    dfs(nestedList, 1)
    
    return sum
};