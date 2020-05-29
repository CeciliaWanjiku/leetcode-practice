//top k frequent elements

const kFrequentElements = (arr) => {
    const minHeap = new Heap([], null, ((a,b) => a-b))

    let i = 0
    for(let i = 0; i< arr.length; i++){
        if(minHeap.length < k){
            minHeap.push(nums[i])
        }else if( nums[i] > minHeap.peek()){
            minHeap.pop()
            minHeap.push(nums[i])
        }
    }

    return minHeap.pop()
}

//347. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    const frequencyMap = {}
    const minHeap = new Heap([], null, ((a,b) => a[0]-b[0]))
    
    for(let num of nums){
        if(!frequencyMap[num]){
            frequencyMap[num] = 1
        }else {
            frequencyMap[num] +=1
        }
    }
    
    Object.keys(frequencyMap).forEach((key) => {
        if(minHeap.length < k){
            minHeap.push([frequencyMap[key], key])
        }else {
            if(frequencyMap[key] > miHeap.peek()[0]){
                minHeap.pop()
                minHeap.push([frequencyMap[key], key])
            }
        }
    })
    
    let result = []
    while(minHeap.length){
        result.push(minHeap.pop())   
    }
    return result
    
};

//212. Word Search II

class TrieNode {
    constructor(){
        this.children = {}
        this.word = null
        this.endWord = false
    }

}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word) {
        let curr = this.root
        for(let i = 0; i<word.length; i++){
            let char = word[i]
            let node = curr[char]
            if(node == null){
                node = new TrieNode()
                curr[char] = node
            }
        }
        this.endWord = true
        this.word = word
    }
}

var findWords = function(board, words) {
    let res = []
    const search = (cell, node) => {
        const[row, col] = cell
        console.log("...",node)
        if(node && node.word !== null){
            res.push(node.word)
            node.word = null
        }
        
        if(row < 0 || col < 0 || row>=board.length || col >=board[0].length || board[row][col] == null){
            return 
        }
        
        let c = board[row][col]
        board[row][col] = "#"
        search([row+1, col], node[c])
        search([row-1, col], node[c])
        search([row, col-1], node[c])
        search([row, col+1], node[c])
        
        board[row][col] = c
        
}
    let dict = new Trie()
    
    for(let word of words){
        dict.insert(word)
    }
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            search([i, j], dict)
        }
    }
    
    return res  
};


//110. Balanced Binary Tree
var isBalanced = function(root) {
    
    let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(root)==Infinity?false:true;
};