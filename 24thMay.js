
const hasAllChars = (str1, str2) => {
    if(str1.length <str2.length){
        return false
    }
    for(let char of str2){
        if(!str1.includes(char)){
            return false
        }
    }
    return true
}
var minWindow = function(s, t) {
    let i = 0, j = 0
    let maxLength = Number.MAX_VALUE
    let subst  = ""
    while(i<s.length && j<s.length){
        while(i< t.length){
            i++
        }
        let sub = s.slice(i, j+1)
        if(hasAllChars(sub, t)){
            if(sub.length < maxLength){
                subst = sub
                maxLength = sub.length
            }
            i++
            
        } else {
            j++
        }
        
    }
    return subst  
};

//98. Validate Binary Search Tree
var isValidBST = function(root) {
    
    const helper = (node, lowerLimit, upperLimit) => {
        if(!node){
            return true
        }
        if(lowerLimit !== null && node.val<=lowerLimit){
            return false
        }
        if(upperLimit !== null && node.val >= upperLimit){
            return false
        }
        if(!helper(node.right, node.val, upperLimit)){
            return false  
        }
        if(!helper(node.left, lowerLimit, node.val)){
            return false
        }
        
        return true
    }
    
    return helper(root, null, null)  
};

//100. Same Tree
var isSameTree = function(p, q) {
    if(!p && !q){
        return true
    }
    
    if(!p || !q){
        return false
    }
   
    if(p.val !== q.val){
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    
};

//102. Binary Tree Level Order Traversal
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let results = []
    let q = []
    let level = 0
    q.push(root)
    
    while(q.length){
        let len = q.length
        for(let i = 0; i<len; i++){
            let curr = q.shift()
            if(!results[level]){
                results[level] = []
            }
            results[level].push(curr.val)
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
        level++
    }
    return results
    
};

//104. Maximum Depth of Binary Tree
var maxDepth = function(root) {
    let maxDepth = 0
    
    const dfs = (root) => {
        if(!root){
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)

        maxDepth = 1+ Math.max(left, right)
        return maxDepth
    }
    dfs(root)
    return maxDepth
};

//143. Reorder List
var reorderList = function(head) {
    //find the middle
    //reverse last half
    //merge the two lists
    
    let fast = head, slow = head
    
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    console.log(slow)
    let curr = slow
    let prev = null
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    
    let first = head, second = prev

    while(second.next){
        let temp = first.next
        first.next= second
        first = temp
        temp = second.next
        second.next = first
        second - temp
    }
    
    
};

//141. Linked List Cycle
var hasCycle = function(head) {
    let slow = head, fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        
        if(fast == slow){
            return true
        }
        
    }
    
    return false
};

//91. Decode Ways
var numDecodings = function(s) {
    if(!s.length){
        return 0
    }
    let map = {}
    
    const recurse = (index, str) => {
        if(index == str.length){
            return 1
        }
        if(str[index] == "0"){
            return 0
        }
        if(index == str.length-1){
            return 1
        }
        if(!map[index]){
            let way2 = 0
            let way1 = recurse(index+1, str)
            if(str.substr(index, index+2) <=26){
                way2= recurse(index+2, str)  
            }
            map[index] = way1+way2
        }
        return map[index]
    }
    return recurse(0, s)  
};

var numDecodings = function(s) {
    if(!s.length){
        return 0
    }
    
    const dp = new Array(s.length+1).fill(0)
    
    dp[0] = 1
    
    dp[1] = s[0] == '0'? 0 : 1
    
    for(let i = 2; i<dp.length; i++){
        if(s[i] == '0'){
            dp[i] = dp[i-1]
        }
        let twoDigit = s.substr(i-2, i)
        if(twoDigit >=10 && twoDigit <=26){
            dp[i] = dp[i-2] + dp[i-1]
        }
    }
    return dp[s.length] 
};

//142. Linked List Cycle II
var detectCycle = function(head) {
    if(!head){
        return null
    }
    let slow = head, fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return slow
        }
    }
    if(slow !== null){
        let pointer1 = head, pointer2 = slow
        while(pointer1 !== pointer2){
            pointer1 = pointer1.next
            pointer2 = pointer2.next
        }
        return pointer1
    } 
};