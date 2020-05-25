//153. Find Minimum in Rotated Sorted Array
var findMin = function(nums) {
    if(!nums.length){
        return -1
    }
    if(nums.length == 1){
        return nums[0]
    }
    let start = 0, end = nums.length-1
    
    if(nums[end] > nums[0]){
        return nums[0]
    }
    
    while(start <= end){
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] > nums[mid+1]){
            return nums[mid+1]
        }
        if(nums[mid-1] > nums[mid]){
            return nums[mid]
        }

        if(nums[start] <= nums[mid]){
            start = mid+1
        }else{
            end=mid-1
        }
    }
    
    return -1 
};

//207. Course Schedule
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(() => new Array())
    const depList = new Array(numCourses).fill(0)
    
    let result = []
    
    for(let course of prerequisites){
        let parent = course[1], child = course[0]
        adjList[parent].push(child)
        depList[child] +=1  
    }
    let q = []
    for(let i = 0; i<depList.length; i++){
        if(depList[i] == 0){
            q.push(i)
        }  
    }
    
    while(q.length){
        let curr = q.shift()
        result.push(curr)
        adjList[curr] && adjList[curr].forEach((child) => {
            depList[child]-=1
            
            if(depList[child] == 0){
                q.push(child)
            }
        })
    }
    return result.length == numCourses
    
};

//226. Invert Binary Tree
var invertTree = function(root) {
    if(!root){
        return root
    }
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    
    root.left = right
    root.right = left
    return root  
};

//230. Kth Smallest Element in a BST
var kthSmallest = function(root, k) {
    
    const inorder = (root, arr) => {
        if(!root){
            return arr
        }
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
        return arr
    }
    let nums = []
    inorder(root, nums)
    
    return nums[k-1]   
};

//242. Valid Anagram
var isAnagram = function(s, t) {
    let hashed = new Array(26).fill(0)
    
    for(let char of s){
        let charCode = char.charCodeAt(0)
        hashed[charCode-97]++
    }
    for(let char of t){
        let charCode = char.charCodeAt(0)
        hashed[charCode-97]--
    }
    for(let num of hashed){
        if(num !== 0){
            return false
        }
    }
    return true    
};

//252. Meeting Rooms
var canAttendMeetings = function(intervals) {
    if(!intervals.length){
        return true
    }
    intervals.sort((a,b) => a[0] - b[0])
    let start = intervals[0][0], end = intervals[0][1]
    
    for(let i = 1; i<intervals.length; i++){
        const interval = intervals[i]
        if(interval[0] < end){
            return false
        }else {
            start = interval[0], end = interval[1]
        }
    }
    return true
};

//merge intervals

const mergeIntervals = (intervals) => {
    if(intervals.length <2){
        return intervals
    }

    intervals.sort((a,b) => a[0]- b[0])

    const merged = []

    let start = intervals[0][0], end = intervals[0][1]

    for(let i = 1; i< intervals.length; i++){
        let interval = intervals[i]
        if(interval[0] <= end){
            end = Math.max(interval[1], end)
        }else {
            mergeIntervals.push([start, end])
            start = intervals[0]
            end = intervals[1]
        }
    }
    mergeIntervals.push([start, end])

    return mergeIntervals
}

//56. Merge Intervals
var merge = function(intervals) {
    if(intervals.length < 2){
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    let mergedIntervals = []
    
    let start = intervals[0][0], end = intervals[0][1]
    
    for(let i = 1; i<intervals.length; i++){
        const interval = intervals[i]
        
        if(interval[0] <= end){
            end = Math.max(interval[1], end)
        }else {
            mergedIntervals.push([start, end])
            start = interval[0], end = interval[1]
        }
    }
    mergedIntervals.push([start, end])
    return mergedIntervals
    
};

//insert interval

const insertInterval = (intervals, newInterval) => {
    let merged = []
    let i = 0

    while(i<intervals.length && intervals[i][1] < newInterval[0]){
        merged.push(intervals[i])
        i++
    }
    while(i< intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }

    merged.push(newInterval)

    while(i < intervals.length){
        merged.push(intervals[i])
        i++
    }
    return merged
}

//253. Meeting Rooms II
var minMeetingRooms = function(intervals) {
    //create a minheap of endtimes
    //loop thorough and store end time
    //if end time has expired before next meeting pop it off 
    //return length of heap
    //update maxList
    
    let minRooms = 0
    
    const Heap = require('./collections/heap'); //http://www.collectionsjs.com
    let minHeap = new Heap([], null, ((a,b) => a[1] - b[1]))
    
    for(let i = 0; i<intervals.length; i++){
        const [start, end] = intervals[i]
        
        while(minHeap.length > 0 && minHeap.peek() < start){
            minHeap.pop()
        }
        minHeap.push(end)
        
        minRooms = Math.max(minRooms, minHeap.length)
        
    }
    return minRooms
    
};

//238. Product of Array Except Self
var productExceptSelf = function(nums) {
    let leftToRight = [1]
    let rightToLeft = [1]
    let product = []
    
    for(let i = 1; i<nums.length; i++){
        let prod = leftToRight[leftToRight.length-1] * nums[i-1]
        leftToRight.push(prod) 
    }
    for(let j = nums.length-1; j>0; j--){
        let prod = rightToLeft[0] * nums[j]
        rightToLeft.unshift(prod)
    }
    for(let i = 0; i<leftToRight.length; i++){
        product[i] = leftToRight[i] * rightToLeft[i] 
    }
    
    return product  
};

//235. Lowest Common Ancestor of a Binary Search Tree
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return root
    }
    
    while(true){
        if(root.val > p.val && root.val > q.val){
            root = root.left
        }else if(root.val < p.val && root.val <q.val) {
            root = root.right
        }else {
            return root
        }
    }
    
};

var lowestCommonAncestor = function(root, p, q) { 
    const dfs = (node, p, q) => {
        if(!node){
            return null
        }
        if(node == p || node == q){
            return root
        }
        
        let left = dfs(node.left, p, q)
        let right = dfs(node.right, p, q)
        
        if(left && right){
            return root
        }else if(left){
            return left
        }else if(right){
            return right
        }else{
            return null
        } 
    }
    return dfs(root, p, q) 
};

//198. House Robber
var rob = function(nums) {
    if(!nums.length){
        return 0
    }
    const dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1],nums[0])
    
    for(let i = 2; i<nums.length; i++){
        dp[i] = Math.max(nums[i]+ dp[i-2], dp[i-1])
    }   
    return dp[nums.length-1] 
};


