// merge k sorted lists
var mergeKLists = function(lists) {
    const minHeap = new Heap([], null, ((a,b) => a.val-b.val))
    let result = new ListNode(-1)
    let curr = result
    for(let list of lists){
        if(list){
            minHeap.push(list)
        } 
    }
    while(minHeap.length){
        let node = minHeap.pop()
        curr.next = node
        curr = curr.next
        if(node.next){
            minHeap.push(node.next)
        }
    }
    
    return result.next  
};


//mirror tree
var isSymmetric = function(root) {
    
    const dfs = (root1, root2) => {
        if(!root1 && !root2){
            return true
        }
        if(!root1 || !root2){
            return false
        }
        if(root1.val !== root2.val){
            return false
        }
        
        return root1.val == root2.val && dfs(root1.left, root2.right) && dfs(root1.right, root2.left)
    }    
    return dfs(root, root)  
};

// rotate array
const reverse = (arr, start, end) => {  
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
    
}
var rotate = function(nums, k) {
    reverse(nums, 0, nums.length-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
    return nums 
};

//69. Sqrt(x)
// get the square root without using the square root sign
var mySqrt = function(x) {
    if(x < 2) {
        return x
    }
    let num, pivot, left = 2, right = Math.floor(x/2)
    
    while(left<=right){
        pivot = left + Math.floor((right-left)/2)
        num = pivot * pivot
        if(num == x){
            return pivot
        }
        if(num > x){
            right = pivot-1
        }else {
            left = pivot +1
        }
        
    }
    return right
    
};

//power of two
//50. Pow(x, n)
var myPow = function(x, n) {
    if(n < 0){
        n = -n
        x = 1/x  
    }
    const power = (x, n) => {
        if(n ==0){
            return 1.0
        }
        let half = power(x, n/2)
        if(n%2 == 0){
            return half * half
        }else {
            return half * half * x
        }
    }   
};


//367. Valid Perfect Square
var isPerfectSquare = function(num) {
    //the squareroot of a num will always be half or less than half of the num
    //if the half squared == num return, else adjust pointers
    if(num < 2){
        return num
    }
    let square, mid, left = 2, right = Math.floor(num/2)
    
    while(left<=right){
        mid = left + Math.floor((right-left)/2)
        square = mid*mid
        if(square == num){
            return true
        }
        if(square > num){
            right = mid-1
        }else {
            left = mid+1
        }
    }
    return false   
};

//109. Convert Sorted List to Binary Search Tree
var sortedListToBST = function(head) {
    if(!head){
        return null
    }
    
    const middle = (head) => {
        if(!head){
            return null
        }
        let fast = head, slow = head, prev = null
        
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next 
        }
        if(prev){
                prev.next = null
            }
        return slow
    }
    const dfs = (head) => { 
        if(head == null){
            return null
        }
        let mid = middle(head)   
        let root = new TreeNode(mid.val)
        if(head == mid){
            return root
        }
        root.left = dfs(head)
        root.right = dfs(mid.next)
        return root
        
    }
    return dfs(head)
    
};