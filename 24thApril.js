//280. Wiggle Sort
const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
var wiggleSort = function(nums) {
    let less = true
    for(let i = 0; i<nums.length-1; i++){
        if(less){
            if(nums[i] > nums[i+1]){
                swap(nums, i, i+1)
            }
        }else {
            if(nums[i] < nums[i+1]){
                swap(nums, i, i+1)
            }
        }
        less = !less
    }
};

var alienOrder = function(words) {
    let adjList  = {}
    let depList = {}
    let sorted = []
    for(let word of words){
        for(let w = 0; w<word.length; w++){
            let char = word[w]
            adjList[char] = []
            depList[char] = 0
        }
    }
    
    for(let i = 0; i<words.length-1; i++){
        let firstWord = words[i], secondWord = words[i+1]
        for(let j = 0; j< Math.min(firstWord.length, secondWord.length); j++){
            let parent = firstWord[j], child = secondWord[j]
            if(parent !== child){
                adjList[parent].push(child)
                depList[child]+=1
                break;
            }
                
            }
        }
    let q = []
    let chars = Object.keys(depList)
    chars.forEach((key) => {
        if(depList[key] == 0){
            q.push(key)
        }
    })
    console.log(depList)
    
    while(q.length){
        let curr = q.shift()
        sorted.push(curr)
        adjList[curr].forEach((child) => {
            depList[child] -=1
            if(depList[child] == 0){
                console.log(">>>>")
                q.push(child)
            }
        })
    }

    if(chars.length == sorted.length){
        return sorted.join('')    
    }
    return ''
    
    
    
};

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.map = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!(key in this.map)) {
    return -1;
  }
  disconnect(this.map[key]);
  insertAfter(this.map[key], this.head);
  return this.map[key].val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!(key in this.map)) {
    this.map[key] = new Node(key, value);
    this.length += 1;
  } else {
    this.map[key].val = value;
    disconnect(this.map[key]);
  }
  insertAfter(this.map[key], this.head);
  if (this.length > this.capacity) {
    delete this.map[this.tail.prev.key];
    this.length -= 1;
    disconnect(this.tail.prev);
  }
};

function insertAfter(a, b) {
  a.next = b.next;
  a.next.prev = a;
  b.next = a;
  a.prev = b;
}

function disconnect(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

//Design a circular Queue

var myCircularQueue = function (k) {
  this.queue = new Array(k).fill(undefined)
  this.size = k
  this.front = -1
  this.rear = -1
}
myCircularQueue.prototype.enqueue = function (val) {
  if (full(this.queue)) {
    return "is full"
  }
  if (this.front == -1) {
    this.front = 0
  }
  this.rear = (this.rear + 1) % this.size
  this.queue[this.rear] = k
}

myCircularQueue.prototype.dequeue = function (val) {
  if (empty(queue)) {
    return "is empty"
  }
  if (this.front == this.rear) {
    this.front = -1
    this.rear = -1
  } else {
    this.front = (this.front + 1) % this.size
    
  }
}
myCircularQueue.prototype.empty = function () {
  return this.front === 1
}
myCircularQueue.prototype.full = function () {
  return (rear+1) % this.size === front
}