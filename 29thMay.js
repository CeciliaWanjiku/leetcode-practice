//1304. Find N Unique Integers Sum up to Zero
//formulae
// A[i] = i * 2 - n + 1 
var sumZero = function(n) {
    let result = new Array(n)
    
    for(let i = 0;i<n; i++){
        result[i] = i*2 - n+1
    }
    return result
};


//832. Flipping an Image
const reverse = (arr) => {
    let i = 0, j = arr.length-1
    while(i<j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr
}
var flipAndInvertImage = function(A) {
    for(let i = 0; i<A.length; i++){
        A[i] = reverse(A[i])
    }
    
    for(let i = 0; i<A.length; i++){
        for(let j = 0; j<A[0].length; j++){
            A[i][j] = A[i][j] ^ 1
        }
    }
    
    return A
};

//977. Squares of a Sorted Array
var sortedSquares = function(A) {
    let res = new Array(A.length)
    
    for(let i = 0; i<A.length; i++){
        res[i] = A[i] * A[i]
    }
    
    return res.sort((a, b) => a-b)
};

//557. Reverse Words in a String III
const reverse = (str) => {
    let arr = str.split('')
    let i = 0, j = arr.length-1
    
    while(i<j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr.join('')
}
var reverseWords = function(s) {
    if(!s.length){
        return ""
    }
    let words = s.split(" ")
    console.log(words)
    
   for(let i = 0; i<words.length; i++){
       words[i] = reverse(words[i])
   }    
    return words.join(" ")
};

//136. Single Number
var singleNumber = function(nums) {
    let sum = 0
    
    for(let i = 0; i<nums.length; i++){
        sum ^= nums[i]
    }
    return sum  
};

//669. Trim a Binary Search Tree
var trimBST = function(root, L, R) {
    
    const dfs = (root) => {
        if(!root){
            return null
        }
        if(root.val > R){
            return dfs(root.left)
        }
        if(root.val < L){
            return dfs(root.right)
        }
        root.left = dfs(root.left)
        root.right = dfs(root.right)
        return root
    }
    
    return dfs(root)
    
};

var trimBST = function(root, L, R) {
    if(!root){
        return null
    }
    
    while(root.val <L || root.val > R){
        if(root.val < L){
            root = root.right
        }
        if(root.val > R){
            root = root.left
        }
        
        let l = root, r = root, parent = root
        
        while(l){
            if(l.val == L){
                l.left = null;
                break;
            }
            if(l.val < L){
                parent.left = l.right
                l = l.right
            }
            
            if(l.val > L){
                parent = l
                l = l.left
            }
        }
        
        while(r){
            if(r.val == R){
                r.right = null
                break;
            }
            
            if(r.val > R){
                parent.right = r.left
                r = r.left
            }
            if(r.val < R){
                parent - r
                r = r.right
            }
        }
        
    }
    return root
    
};

//346. Moving Average from Data Stream
// Method one, maintain a queue and push new val
var MovingAverage = function(size) {
    this.size = size
    this.queue = new Array()
    
};
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    let windowSum = 0
    let start = Math.max(0, this.queue.length-this.size)
    for(let i = start; i<this.queue.length; i++){
        windowSum += this.queue[i]
    }
    let len = Math.min(this.size, this.queue.length)
    return windowSum / len
    
};
// using a double ended queue and a sliding window
var MovingAverage = function(size) {
    this.size = size
    this.queue = new Array()
    this.windowSum = 0 
    this.count = 0
    
};
MovingAverage.prototype.next = function(val) {
    this.count++
    
    this.queue.push(val)
    let tail = 0
    if(this.count > this.size){
        tail = this.queue.shift()
    }
    this.windowSum = this.windowSum -tail +val
    
    let len = Math.min(this.size, this.count)
    
    return this.windowSum / len
    
};

