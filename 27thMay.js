//323. Number of Connected Components in an Undirected Graph
var countComponents = function(n, edges) {
    
    let adjList = new Array(n).fill(0).map(() => new Array())
    
    for(let edge of edges){
        let parent = edge[0], child = edge[1]
        adjList[parent].push(child)
        adjList[child].push(parent)
    }
    
    let visited = new Set()
    
    const dfs = (edge, edges) => {
        if(visited.has(edge)){
            return adjList[edge]
        }
        visited.add(edge)
        
        adjList[edge].forEach((child) => {
            if(!visited.has(child)){
                dfs(child, edges)
            }
        })
        
    }
    
    let count = 0
    
    for(let i = 0; i<n; i++){
        if(!visited.has(i)){
            dfs(i, edges)
            count++    
        }     
    }
    
    return count
    
};

//17. Pacific Atlantic Water Flow
const dfs = (matrix, cell, visited, m, n) => {
    const [row, col] = cell
    visited[row][col] = true
    if(row+1 <m && matrix[row+1][col] < matrix[row][col]){
        dfs(matrix, [row+1, col], visited, m, n)
    }
    if(row -1 >=0 && matrix[row-1][col] < matrix[row][col]){
        dfs(matrix, [row-1, col], visited, m, n)
    }
    if(col+1 < n && matrix[row][col+1] < matrix[row][col]){
        dfs(matrix, [row, col+1], visited, m, n)
    }
    if(col -1 >=0 && matrix[row][col-1] < matrix[row][col]){
        dfs(matrix, [row, col-1], visited, m, n)
    }
}

const pacificAtlantic = (matrix) => {
    if(!matrix.length){
        return []
    }
    let m = matrix.length, n = matrix[0].length

    let pacificVisited = new Array(m).fill(0).map(() => new Array(n))
    let atlanticVisited = new Array(m).fill(0).map(() => new Array(n))

    let result = []

    for(let i = 0; i<matrix.length; i++){
        dfs(matrix, [i, 0], pacificVisited,m,n)
        dfs(matrix,[i, n-1], atlanticVisited, m, n)
    }

    for(let j = 0; j<n; j++){
        dfs(matrix, [0, j], pacificVisited, m, n)
        dfs(matrix, [m-1, j], atlanticVisited, m, n)
    }

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(pacificVisited[i][j] && atlanticVisited[i][j]){
                result.push([i,j])
            }
        }
    }
    return result
}
// 105. Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function(preorder, inorder) {
    let preOrderIndex = 0
    const inorderIndexMap = {}
    for(let i = 0; i<inorder.length; i++){
        let num = inorder[i]
        inorderIndexMap[num] = i
    }
    
    const dfs = (left, right) => {
        if(left == right){
            return null
        }
        let rootVal = preorder[preOrderIndex]
        let root = new TreeNode(rootVal)
        preOrderIndex++
        let rootIndex = inorderIndexMap[rootVal]
        root.left = dfs(left, rootIndex)
        root.right = dfs(rootIndex+1, right)
        return root
    }
    
   return dfs(0, preorder.length)    
};

//106. Construct Binary Tree from Inorder and Postorder Traversal
var buildTree = function(inorder, postorder) {
    let map = {}
    let postidx = postorder.length-1
    for(let i = 0; i<inorder.length; i++){
        let num = inorder[i]
        map[num] = i
    }
    
    const dfs = (left, right) => {
        if(left > right){
            return null
        }
        let rootVal = postorder[postidx]
        let root = new TreeNode(rootVal)
        postidx--
        let rootidx = map[rootVal]
        root.right = dfs(rootidx+1, right)
        root.left = dfs(left, rootidx-1)
        
        return root
    }
    return dfs(0, inorder.length-1)
    
};
//134. Gas Station
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length
    let totalTank = 0, currTank = 0,
    startingStation  = 0
    
    for(let i = 0; i<n; i++){
        let diff = gas[i] -cost[i]
        totalTank +=diff
        currTank += diff
        console.log(currTank, totalTank)
        if(currTank < 0){
            startingStation = i+ 1 
            currTank = 0
        }
    }
    
    if(totalTank >=0){
        return startingStation
    }
    return -1
    
};

//468. Validate IP Address
var validIPAddress = function(IP) {
    const validateIP4 = (IP) => {
        let arr = IP.split(".")
        if(arr.length >4 || arr.length <4){
            return "Neither"
        }
        for(let chunk of arr){
            if(chunk.length == 0 || chunk.length >3){
                return "Neither"
            }
            if(chunk[0] == 0 && chunk.length !==1){
                return "Neither"
            }
            for(let num of chunk){
               num = parseInt(num)
                if(!Number.isInteger(num)){
                    return "Neither"
                }
            }
            if(chunk > 255){
                return "Neither"
            }
            
        }
        return "IPv4"
        
        
    }
    
    const validateIP6 = (IP) => {
        let arr = IP.split(':')
        let hexa = "0123456789abcdefABCDEF"
        
        for(let chunk of arr){
            if(chunk.length == 0 || chunk.length >4){
                return "Neither"
            }
            for(let char of chunk){
                if(hexa.indexOf(char) == -1){
                    return "Neither"
                }
            }
        }
        return "IPv6"
        
    }
    
    if(IP.indexOf(".") > 0){
        return validateIP4(IP)
    }else {
        return validateIP6(IP)
    }   
};

//295. Find Median from Data Stream
var MedianFinder = function() {
    this.maxHeap = new Heap([], null, ((a, b) => a-b))
    this.minHeap = new Heap([], null, ((a,b) => b-a))
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.length == 0 || num > this.maxHeap.peek()){
        this.minHeap.push(num)
    }else{
        this.maxHeap.push(num)
    }
    
    if(this.maxHeap.length > this.minHeap.length+1){
        this.minHeap.push(this.maxHeap.pop())
    }else {
        this.maxHeap.push(this.minHeap.pop())
    }
    
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minHeap.length == this.maxHeap.length){
        return (this.maxHeap.peek() + this.minHeap.peek())/2
    }
    return this.maxHeap.peek()
};

// implement a heap class
//minHeap
class Heap {
    constructor(){
        this.size = 0
        this.heap = []
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
        
    }
    leftChild (i){
        return 2*i +1

    }

    rightChild(i){
        return 2* i + 2
    }
    add(nums){
        this.heap.push(num)
        this.size = this.heap.length

        let index = this.heap.length-1
        let parentIndex = Math.floor((i-1)/2)

        while(index >0 && this.heap[index] <this.heap[parentIndex]){
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }

    peek() {
        return this.heap[0] || null
    }

    heapify(index) {
        const left = this.leftChild(i)
        const right = this.rightChild(i)

        let smallest  = i

        if(left < this.heap.length && this.heap[left] <this.heap[smallest]){
            smallest = left
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }

        if(smallest !== i){
            this.swap(i, smallest)
            this.heapify(smallest)
        }

    }

    pop(){
        let top = this.heap[0]

        if(this.heap.length > 1){
            this.heap[0] = this.heap.pop()
            this.heapify(0)
        }else {
            this.heap.pop()
        }

        return top
    }
}

const isValid = (char) => {
    let n = char.charCodeAt(0)
    if((n >=65 && n<91) || (n>=97 && n < 123)){
        return true
    }
    return false
}

//125. Valid Palindrome
var isPalindrome = function(s) {
    let i = 0, j = s.length-1
       
    while(i <= j){
        console.log(i, j, s[i], s[j])
        let char1 = s[i].toLowerCase(), char2 = s[j].toLowerCase()
        if(isValid(char1) && isValid(char2)){
            if(char1 !== char2){
                return false 
            }
            i++
            j--
        }
        if(!isValid(char1)){
            i++
        }
        if(!isValid(char2)){
            j--
        }    
    }
    return true
};

//415. Add Strings
//sum two numbers strings
var addStrings = function(num1, num2) {    
    let sum = "" 
    let i = num1.length-1, j = num2.length-1
    let carry = 0
    
    while(i >= 0 || j>=0 || carry > 0){
        let digit1 = i< 0 ? 0 : num1.charAt(i)-'0'
        let digit2 = j < 0 ? 0 : num2.charAt(j)-'0'
        let currSum = digit1 + digit2 +carry
        console.log(digit1, digit2, currSum)
        sum = "" + (currSum % 10) + sum
        carry = Math.floor(currSum/10)
        i--
        j--
    }
    return sum
};

//179. Largest Number
const comparator = (a, b) => {
    let s1 = ""+a+b
    let s2 = ""+b+a
    return s2-s1
}
const largestNumber = (nums) => {
    let result = ""
    nums.sort(comparator)
    for(let num of nums){
        result = result +num
    }

    if(result == 0){
        return "0"
    }
    return result
}