
// Circular queue
var MyCircularQueue = function(k) {
    this.queue = new Array(k)
    this.size = k
    this.front = -1
    this.rear = -1  
};

MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull(this.rear, this.size)){
        return "full"
    }
    if(this.front == -1 && this.rear == -1){
        this.front = 0
        this.rear = 0
        this.queue[this.rear] = value
    }else {
        this.rear = (this.rear+1)% this.size
        this.queue[this.rear] = value    
    }   
};

MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty(this.queue)){
        return "is Empty"
    }
    if(this.front == this.rear){
        this.rear = this.front = -1
    }else {
        this.front = (this.front+1) % this.size
    }
};

MyCircularQueue.prototype.Front = function() {
    return this.front
    
};

MyCircularQueue.prototype.Rear = function() {
    return this.rear
    
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.rear == -1 && this.front == -1
    
};

MyCircularQueue.prototype.isFull = function() {
    return (this.rear+1) % this.size === this.front
    
};

// Design a singly linked list 
class ListNode {
    constructor(val){
        this.val = val
        this.next = null
        
    }
}

class MyLinkedList {
    constructor(){
        this.head = new ListNode(-1)
        this.length = 0
    }
    
    get(index) {
        if(index< 0 || index>= this.length){
            return -1
        }
        let curr = this.head
        for(let i = 0; i<=index; i++){
            curr = curr.next
        }
        return curr.val  
    }
    addAtIndex(index, val){
        if(index < 0 || index>this.length){
            return
        }
        let prev = this.head
        for(let i = 0; i<index; i++){
            prev = prev.next  
        }
        let newNode = new ListNode(val)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
    }
    
    addAtHead(val){
       this.addAtIndex(0, val)
    }
    
    addAtTail(val){
        this.addAtIndex(this.length, val)
    }
    
    deleteAtIndex(index){
        if(index < 0 || index>=this.length){
            return 
        }
        let prev = this.head
        
        for(let i = 0; i<index;i++){
            prev = prev.next
        }
        prev.next = prev.next.next
        this.length--
    }

}

// doubly linked list

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
        
    }
}

class MyLinkedList {
    constructor(){
        this.head = new ListNode(-1)
        this.tail = new ListNode(-1)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.length = 0
    }
    
    get(index) {
        if(index< 0 || index>= this.length){
            return -1
        }
        let curr = this.head
        if(index +1 < this.length -index){
            for(let i = 0; i<=index; i++){
                curr = curr.next
            }
        }else {
            curr = this.tail
            for(let i = 0; i<=index; i++){
                curr = curr.prev
            }
        }
        return curr.val
    }

    addAtHead(val){
        let prev = this.head, next = this.head.next
        let newNode = new TreeNode(val)
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        this.length++
      
    }
    
    addAtTail(val){
        let next = this.tail, prev = this.tail.prev
        let newNode = new TreeNode(val)
        newNode.next = next
        prev.next = newNode
        newNode.prev = prev
        next.prev = newNode
        this.length++
    }
    
    addAtIndex(index, val){
        if(index> this.length || index < 0){
            return
        }
        let prev, next
        if(index< this.length-index){
            prev = this.head
            for(let i = 0; i<index; i++){
                prev = prev.next
                next = prev.next
            }   
        }else {
            next = this.tail
            for(let i = 0; i< this.length -index -1; i++){
                next = next.prev
                prev = next.prev
            }
        }
        
        let newNode = new ListNode(val)
        newNode.next = next
        newNode.prev = prev
        prev.next = newNode
        next.prev = newNode
        
        this.length++
        
    }
    
    deleteAtIndex(index){
        if(index < 0 || index>=this.length){
            return 
        }
        let prev, next
        if(index < this.length-index){
            prev = this.head
            for(let i= 0; i<index; i++){
                prev = prev.next
                next = prev.next.next  
            }
        }else {
            next = this.tail
            for(let i = 0; i<this.length -index -1; i++){
                next = next.prev
                prev = next.prev.prev
            }
        }
        prev.next = next
        next.prev = prev
        this.length--
    }

}

//79. Word Search
const dfs = (board, cell, word, index) => {
    const[row, col] = cell
    if(index == word.length){
        return true
    }
    if(row< 0 || col< 0 || row>=board.length || col>=board[0].length || board[row][col] !== word[index]){
        return false
    }
    let ret = false
    board[row][col] = "#"
    let down = dfs(board, [row +1, col], word, index+1)
    let up = dfs(board, [row-1, col], word, index+1)
    let right = dfs(board, [row, col+1], word, index+1)
    let left = dfs(board, [row, col-1], word, index+1)
    if(down || up || right || left){
        ret = true
        return
    }
    board[row][col] = word[index]
    return ret
}
var exist = function(board, word) { 
    for(let i = 0; i<board.length; i++){
        for(let j = 0; i<board[0].length; i++){
            if(dfs(board, [i, j], word, 0)){
                return true
            }
            
        }
    }
    return false
    
};

//17. Letter Combinations of a Phone Number
var letterCombinations = function(digits) {
    let letterMap = {
         2 : ["a","b","c"],
         3: ["d", "e", "f"],
         4: ["g", "h", "i"],
         5: ["j","k", "l" ],
         6: ["m", "n", "o"],
         7: ["p","q", "r", "s"],
         8: ["t","u", "v"],
         9: ["w", "x", "y", "z"]
     }
    let permutations = []
    if(!digits.length){
        return []
    }
    
    const recurse = (index, path) => {
        if(index == digits.length){
            permutations.push(path)
            return
        }    
        for(let char of letterMap[digits[index]]){
            recurse(index+1, path+char)
        }      
    }
    recurse(0, "")
     return permutations    
 };

 //450. Delete Node in a BST
 const successor =(root) => {
    root = root.right
    while(root.left){
        root = root.left
    }
    return root.val
}

const predecessor = (root) => {
    root= root.left
    while(root.right){
        root = root.right
    }
    return root.val
}
var deleteNode = function(root, key) { 
if(!root){
    return null
}

if(key > root.val){
    root.right = deleteNode(root.right, key)
}else if(key < root.val){
    root.left = deleteNode(root.left, key)
}else{
    if(!root.left && !root.right){
        root = null
    }else if(root.right){
        root.val = successor(root)
        root.right = deleteNode(root.right, root.val)
    }else {
        root.val = predecessor(root)
        root.left = deleteNode(root.left, root.val)
    }
}

return root
};