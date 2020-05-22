//912. Sort an Array
var sortArray = function (nums) {
    const merge = (arr1, arr2) => {
        let newArr = []
        while(arr1.length && arr2.length){
            if(arr1[0] > arr2[0]){
                newArr.push(arr2.shift()) 
            }else {
                newArr.push(arr1.shift())
            }
        }
        while(arr1.length && !arr2.length){
            newArr.push(arr1.shift())
        }
         while(!arr1.length && arr2.length){
            newArr.push(arr2.shift())
        }
        
        return newArr
    }
    
    const sort = (arr) => {
        if(arr.length == 1){
            return arr
        }
        const mid = Math.floor(arr.length/2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)
        
        let leftArr = sort(left)
        let rightArr = sort(right)
        
        return merge(leftArr, rightArr)
    }
    
    return sort(nums)
};


const merge =(l1,l2) => {
    let newList = new ListNode(-1)
    let p = newList
    while(l1 && l2){
        if(l1.val > l2.val){
            p.next = l2
            l2 = l2.next
        }else {
            p.next = l1
            l1 = l1.next
        }
    }
    while(l1 && !l2){
        p.next = l1
        l1 = l1.next
    }
    while(!l1 && l2){
        p.next = l2
        l2 = l2.next
    }
    return newList.next
}
var sortList = function(head) {
    if(!head || !head.next){
        return head
    }
    let prev = null, slow = head, fast = head
    
    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    
    prev.next = null
    
    let left = sortList(head)
    let right = sortList(slow)
    
    return merge(left, right)
};

//654. Maximum Binary Tree
var constructMaximumBinaryTree = function(nums) {
    
    const findMaxIndex = (arr) => {
        let maxIndex = 0
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > arr[maxIndex]){
                maxIndex = i
            }
            
        }
        return maxIndex
    }
    
    
    const constructTree = (arr) => {
        if(!arr.length){
            return null
        }
        let maxIndex = findMaxIndex(arr)
        let root = new TreeNode(arr[maxIndex])
        root.left = constructTree(arr.slice(0, maxIndex))
        root.right = constructTree(arr.slice(maxIndex+1))
        
        console.log(root)
        
        return root
        
    }
    
    return constructTree(nums)
    
    
};
//346. Moving Average from Data Stream
var MovingAverage = function(size) {
    this.size = size
    this.queue = new Array(size)
    this.count = 0
    this.windowSum = 0
    this.head = 0
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.count++
    let tail = (this.head +1) % this.size
    this.windowSum = this.windowSum - this.queue[tail] + val
    this.head = (this.head +1) % this.size
    this.queue[this.head] = val
    return this.windowSum *1.0 / Math.min(this.size, this.count)
};

//13. Roman to Integer
var romanToInt = function(s) {
    let map  = {
        "I" : 1,
        "V":5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M":1000
    }
    let sum = 0
    for(let i = 0; i<s.length; i++){
        let char = s[i]
        if(i+1 < s.length && map[s[i+1]] > map[char]){
            sum-= map[char]
            sum+= map[s[i+1]]
            i = i+1  
        }else {
            sum+= map[char]
        }
        
        
    }
    return sum
    
};
