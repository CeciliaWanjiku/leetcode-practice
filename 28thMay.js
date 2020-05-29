//232. Implement Queue using Stacks
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(x)
    
    while(this.stack2.length){
        this.stack1.push(this.stack1.pop())
    }
    
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack1.length > 0){
        this.stack1.pop()
    }

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length-1]
    
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.stack1.length && !this.stack2.length){
        return true
    }
    return false
    
};

//225. Implement Stack using Queues
var MyStack = function() {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let rotations = this.queue.length;
    
    this.queue.push(x);
    
    while (rotations--) {
        this.queue.push(this.queue.shift());
    }
    
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.queue.length == 0) {
        return null;
    }
    return this.queue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length == 0;
};

//371. Sum of Two Integers
//calculate the sum of two integers without using the + sigh
var getSum = function(a, b) {
    //use the & operator to keep track of the positions of the carry
    //use the XOR to add the nubers
    //apply the left shift << on the carry
    
    let carry;
    while(b){
        carry = a & b
        //sum stored in a
        a= a^b
        //left shifted carry is stored in b
        b = carry << 1  
    }
    return a 
};

// 572. Subtree of Another Tree
const isEqual = (s, t) => {
    if(!s || !t){
        return false
    }
    if(!s && !t){
        return true
    }
    if(s.val !== t.val){
        return false
    }
    return isEqual(s.left, t.left) && isEqual(s.right, t.right)
}
const isSubtree = (s, t) => {
    return isEqual(s, t) || isEqual(s.left, t) || isEqual(s.right, t)
}