var maxAreaOfIsland = function(grid) {
    const dfs = (cell) => {
    let curr = 0
    const [row, col] = cell
    if(row<0 || col<0 || row >= grid.length || col >= grid[0].length || grid[row][col] == 0){
        return 0
    }
    grid[row][col] = 0
    let down = dfs([row + 1, col])
    let up = dfs([row -1, col])
    let left = dfs([row, col-1])
    let right = dfs([row, col+1])
    curr = 1 + down +left + right+ up
    return curr
    
    
}
    let maxLength = 0
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] == 1){
                let currMax = dfs([i, j]) 
                console.log(currMax)
                maxLength = Math.max(currMax, maxLength)  
            }
        }
    }
    return maxLength
    
};

//897. Increasing Order Search Tree
var increasingBST = function(root) {
    let dummy = new TreeNode(); 
    let node = dummy;
	
    const traverse = function(root) {
        if(!root) return; 
        traverse(root.left); 
        node.right = root; 
        node = node.right; 
        node.left = null;
        traverse(root.right);    
    }; 
	
    traverse(root);
    return dummy.right;
};
// Implement Trie datastructure
// class Trie {
//   constructor() {
//     this.root = {}
//   }
//   insert(word) {
//     let node = this.root
//     for (let c of word) {
//       if (!node[c]) {
//         node[c] = {}
//       } else {
//         node = node[c]
//       }
//     }
//     node.isWord = true
//   }

//   traverse(word) {
//     let node = this.root
//     for (let c of word) {
//       node = node[c]
//       if (!node) {
//         return null
//       }
//       return node
//     }
//   }
//   search(word) {
//     const node = this.traverse(word)
//       if(node && node.isWord == true){
//       return node
//       }
//   }
  
//   startsWith(prefix) {
//     if (this.traverse(prefix) {
//       return true
//     }
//   }
// }


function findWords(board, words) {
  let res = []

  function buildTrie() {
    const root = {}
    for (let w of words) {
      let node = root
      for (let c of w) {
        if (!node[c]) {
          node[c] = {}
        } else {
          node = node[c]
        }
      }
      node.word = w

    }
    return root
  }

  function search(node, i, j) {
    if (node.word) {
      res.push(node.word)
      node.word = null
    }
  }


}

Class Trie {

}